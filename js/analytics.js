window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-05VQRC84LY');

function getSource() {
  const p = new URLSearchParams(window.location.search);
  return p.get('src') || 'direct';
}

function trackAction(action, person, destination) {
  if (typeof gtag === 'function') {
    gtag('event', action, {
      person: person,
      source: getSource(),
      destination: destination || ''
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
      trackAction(
        el.dataset.track,
        el.dataset.person || 'unknown',
        el.getAttribute('href') || ''
      );
    });
  });
});
