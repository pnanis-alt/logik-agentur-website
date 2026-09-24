// Hoteldemo der Logik Agentur. Spezifikation im privaten Repo: docs/agentur/seestern-spezifikation_v1_2.md
// Vor dem Klick keine Verbindung zu Gateway oder ElevenLabs.
// Chat: eigene WebSocket-Verbindung ohne SDK, damit keine Ueberschreibung gesendet wird
// (das SDK schickt bei textOnly immer die Ueberschreibung text_only mit, die am Agenten gesperrt ist).
// Voice: ElevenLabs-SDK ueber WebSocket mit signierter URL, Dateien lokal, kein CDN.
(() => {
  "use strict";

  const wurzel = document.querySelector("[data-demo]");
  if (!wurzel) return;
  const demo = wurzel.dataset.demo;
  const gateway = wurzel.dataset.gateway;
  const ERLAUBTE_LINKS = (wurzel.dataset.links || "").split(",").map((s) => s.trim()).filter(Boolean);

  const el = (id) => document.getElementById(id);
  const meldung = el("demo-meldung");
  const knopfChat = el("demo-chat-start");
  const knopfVoice = el("demo-voice-start");

  const TEXTE = {
    "nicht-aktiv": "Die Demo ist noch nicht freigeschaltet. Termin, Telefon und E-Mail unten funktionieren schon.",
    abgelaufen: "Die Demo ist beendet. Gern zeigen wir sie Ihnen im Gespräch, Kontakt unten.",
    beendet: "Die Demo ist beendet. Gern zeigen wir sie Ihnen im Gespräch, Kontakt unten.",
    kontingent: "Alle Demo-Gespräche für diesen Kanal sind aufgebraucht. Gern zeigen wir die Demo im Gespräch, Kontakt unten.",
    tageslimit: "Für heute sind keine weiteren Starts möglich. Bitte versuchen Sie es morgen wieder oder nutzen Sie den Kontakt unten.",
    "nicht-verfuegbar": "Die Demo ist gerade nicht erreichbar. Termin, Telefon und E-Mail unten funktionieren weiter.",
    mikrofon: "Ohne Mikrofonfreigabe ist kein Sprachgespräch möglich. Der Chat funktioniert ohne Mikrofon.",
    fehler: "Das hat nicht geklappt. Termin, Telefon und E-Mail unten funktionieren weiter.",
  };

  // Umami: nur wenn geladen und Do Not Track nicht gesetzt. Kein anderer Weg.
  function zaehle(name, extra) {
    try {
      if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;
      if (window.umami && typeof window.umami.track === "function") {
        window.umami.track(name, Object.assign({ demo }, extra || {}));
      }
    } catch (_) {
      /* Statistik darf die Demo nie stoeren */
    }
  }

  function zeige(text, istFehler) {
    meldung.textContent = text || "";
    meldung.classList.toggle("fehler", Boolean(istFehler));
  }

  function sperreKnoepfe(gesperrt) {
    knopfChat.disabled = gesperrt;
    knopfVoice.disabled = gesperrt;
  }

  async function holeStart(kanal) {
    try {
      const res = await fetch(`${gateway}/v1/start`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ demo, kanal }),
      });
      const daten = await res.json();
      if (daten && daten.status === "ok" && typeof daten.signedUrl === "string") return daten;
      return { status: "gesperrt", grund: (daten && daten.grund) || "fehler" };
    } catch (_) {
      return { status: "gesperrt", grund: "nicht-verfuegbar" };
    }
  }

  // Text sicher darstellen; nur Links zu erlaubten Adressen werden klickbar.
  function fuelleText(ziel, text) {
    const teile = String(text).split(/(https?:\/\/[^\s)]+)/g);
    for (const teil of teile) {
      if (/^https?:\/\//.test(teil)) {
        let host = "";
        try {
          host = new URL(teil).hostname;
        } catch (_) {
          host = "";
        }
        const erlaubt = ERLAUBTE_LINKS.some((h) => host === h || host.endsWith(`.${h}`));
        if (erlaubt && teil.startsWith("https://")) {
          const a = document.createElement("a");
          a.href = teil;
          a.textContent = teil;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          ziel.appendChild(a);
          continue;
        }
      }
      ziel.appendChild(document.createTextNode(teil));
    }
  }

  // ---------- Chat ----------
  const chatFeld = el("demo-chat");
  const chatVerlauf = el("demo-chat-verlauf");
  const chatForm = el("demo-chat-form");
  const chatEingabe = el("demo-chat-eingabe");
  let chatSocket = null;
  let chatAntwortGezaehlt = false;

  function blase(wer, text) {
    const div = document.createElement("div");
    div.className = `blase ${wer}`;
    fuelleText(div, text);
    chatVerlauf.appendChild(div);
    chatVerlauf.scrollTop = chatVerlauf.scrollHeight;
  }

  function chatEnde(text) {
    chatForm.querySelector("button").disabled = true;
    chatEingabe.disabled = true;
    zeige(text);
    chatSocket = null;
  }

  async function starteChat() {
    zaehle("demo-chat-klick", { kanal: "chat" });
    sperreKnoepfe(true);
    zeige("Chat wird gestartet …");
    const antwort = await holeStart("chat");
    if (antwort.status !== "ok") {
      zeige(TEXTE[antwort.grund] || TEXTE.fehler, antwort.grund !== "kontingent");
      zaehle("demo-gesperrt", { kanal: "chat", grund: antwort.grund });
      sperreKnoepfe(false);
      return;
    }
    zaehle("demo-chat-berechtigt", { kanal: "chat" });
    chatFeld.hidden = false;
    chatVerlauf.textContent = "";
    chatAntwortGezaehlt = false;
    chatEingabe.disabled = false;
    chatForm.querySelector("button").disabled = false;

    const ws = new WebSocket(antwort.signedUrl);
    chatSocket = ws;
    ws.addEventListener("open", () => {
      ws.send(JSON.stringify({ type: "conversation_initiation_client_data" }));
    });
    ws.addEventListener("message", (ereignis) => {
      let daten;
      try {
        daten = JSON.parse(ereignis.data);
      } catch (_) {
        return;
      }
      if (daten.type === "ping") {
        const id = daten.ping_event && daten.ping_event.event_id;
        ws.send(JSON.stringify({ type: "pong", event_id: id }));
      } else if (daten.type === "conversation_initiation_metadata") {
        zeige("Chat läuft. Höchstens 3 Minuten je Gespräch.");
        zaehle("demo-chat-gestartet", { kanal: "chat" });
        chatEingabe.focus();
      } else if (daten.type === "agent_response") {
        const text = daten.agent_response_event && daten.agent_response_event.agent_response;
        if (text) {
          blase("agent", text);
          if (!chatAntwortGezaehlt) {
            chatAntwortGezaehlt = true;
            zaehle("demo-antwort-begonnen", { kanal: "chat" });
          }
        }
      }
    });
    ws.addEventListener("close", () => {
      if (chatSocket === ws) chatEnde("Der Chat ist beendet. Jeder Start zählt zu den Demo-Gesprächen.");
      sperreKnoepfe(false);
    });
    ws.addEventListener("error", () => {
      if (chatSocket !== ws) return;
      if (!chatVerlauf.hasChildNodes()) chatFeld.hidden = true;
      chatEnde(TEXTE.fehler);
    });
  }

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatEingabe.value.trim().slice(0, 500);
    if (!text || !chatSocket || chatSocket.readyState !== WebSocket.OPEN) return;
    chatSocket.send(JSON.stringify({ type: "user_message", text }));
    blase("gast", text);
    chatEingabe.value = "";
  });

  el("demo-chat-ende").addEventListener("click", () => {
    if (chatSocket) chatSocket.close();
  });

  // ---------- Voice ----------
  const sprachFeld = el("demo-voice");
  const sprachZustand = el("demo-voice-zustand");
  const sprachEnde = el("demo-voice-ende");
  let sprachGespraech = null;
  let sprachAntwortGezaehlt = false;

  // SDK erst bei Bedarf laden, von dieser Website (siehe DRITTANBIETER-LIZENZEN.txt).
  function ladeSdk() {
    if (window.ElevenLabsClient) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "/demo/assets/elevenlabs-client-1.25.0.js";
      s.onload = () => (window.ElevenLabsClient ? resolve() : reject(new Error("SDK fehlt")));
      s.onerror = () => reject(new Error("SDK nicht ladbar"));
      document.head.appendChild(s);
    });
  }

  async function starteVoice() {
    zaehle("demo-voice-klick", { kanal: "voice" });
    sperreKnoepfe(true);
    try {
      await ladeSdk();
    } catch (_) {
      zeige(TEXTE.fehler, true);
      sperreKnoepfe(false);
      return;
    }
    zeige("Bitte erlauben Sie den Zugriff auf das Mikrofon …");
    // Erst Mikrofon, dann Startberechtigung: Eine Ablehnung soll keinen Demo-Platz kosten.
    try {
      const strom = await navigator.mediaDevices.getUserMedia({ audio: true });
      strom.getTracks().forEach((t) => t.stop());
    } catch (_) {
      zeige(TEXTE.mikrofon, true);
      zaehle("demo-gesperrt", { kanal: "voice", grund: "mikrofon" });
      sperreKnoepfe(false);
      return;
    }
    zeige("Sprachgespräch wird gestartet …");
    const antwort = await holeStart("voice");
    if (antwort.status !== "ok") {
      zeige(TEXTE[antwort.grund] || TEXTE.fehler, antwort.grund !== "kontingent");
      zaehle("demo-gesperrt", { kanal: "voice", grund: antwort.grund });
      sperreKnoepfe(false);
      return;
    }
    zaehle("demo-voice-berechtigt", { kanal: "voice" });
    sprachFeld.hidden = false;
    sprachAntwortGezaehlt = false;
    try {
      sprachGespraech = await window.ElevenLabsClient.Conversation.startSession({
        signedUrl: antwort.signedUrl,
        connectionType: "websocket",
        libsampleratePath: "/demo/assets/libsamplerate-2.1.2.worklet.js",
        onConnect: () => {
          sprachZustand.textContent = "Verbunden. Sprechen Sie einfach los.";
          zeige("Sprachgespräch läuft. Höchstens 3 Minuten je Gespräch.");
          zaehle("demo-voice-gestartet", { kanal: "voice" });
        },
        onModeChange: (m) => {
          sprachZustand.textContent = m && m.mode === "speaking" ? "Der Assistent spricht …" : "Der Assistent hört zu …";
        },
        onMessage: (m) => {
          if (m && m.source === "ai" && !sprachAntwortGezaehlt) {
            sprachAntwortGezaehlt = true;
            zaehle("demo-antwort-begonnen", { kanal: "voice" });
          }
        },
        onDisconnect: () => {
          sprachZustand.textContent = "Gespräch beendet.";
          zeige("Das Sprachgespräch ist beendet. Jeder Start zählt zu den Demo-Gesprächen.");
          sprachGespraech = null;
          sprachEnde.disabled = true;
          sperreKnoepfe(false);
        },
        onError: () => {
          zeige(TEXTE.fehler, true);
        },
      });
      sprachEnde.disabled = false;
    } catch (_) {
      zeige(TEXTE.fehler, true);
      sperreKnoepfe(false);
    }
  }

  sprachEnde.addEventListener("click", async () => {
    if (sprachGespraech) await sprachGespraech.endSession();
  });

  knopfChat.addEventListener("click", starteChat);
  knopfVoice.addEventListener("click", starteVoice);

  // Kontaktwege zaehlen (nur Klick, keine Daten).
  document.querySelectorAll("[data-zaehle]").forEach((a) => {
    a.addEventListener("click", () => zaehle(a.dataset.zaehle));
  });

  sperreKnoepfe(false);
})();
