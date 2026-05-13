import React from 'react';
import { createRoot } from 'react-dom/client';
import ROIRechner from './roi-rechner.jsx';

// Self-mounting widget: sucht #roi-rechner-root im DOM und mountet dorthin.
// Pattern wie ElevenLabs ConvAI, Cal.com-Embed etc.
function mountWhenReady() {
  const root = document.getElementById('roi-rechner-root');
  if (!root) {
    console.warn('[ROI-Rechner] Mount-Point #roi-rechner-root nicht gefunden');
    return;
  }
  createRoot(root).render(React.createElement(ROIRechner));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountWhenReady);
} else {
  mountWhenReady();
}
