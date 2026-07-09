/* ===== SEAMLESS WEBINAR — JS (EN only) ===== */

// ===== VIDEOS =====
function playVideo(n) {
  const links = {
    1: 'JlVPtblL_2g',
    2: 'EYgnHrYCMHQ'
  };
  const container = document.getElementById(`video-${n}-container`);
  const id = links[n];
  container.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover">
    </iframe>`;
}

// ===== TIMER =====
function startTimer() {
  setInterval(() => {
    const now = new Date();
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const baliMs = utcMs + 8 * 3600000;
    const baliDayEnd = (Math.floor(baliMs / 86400000) + 1) * 86400000;
    const diffMs = Math.max(0, baliDayEnd - baliMs);
    const h = String(Math.floor(diffMs / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diffMs % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diffMs % 60000) / 1000)).padStart(2, '0');
    document.getElementById('timer-hours').textContent = h;
    document.getElementById('timer-mins').textContent = m;
    document.getElementById('timer-secs').textContent = s;
  }, 1000);
}

// ===== FAQ =====
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initFaq();
  startTimer();
});
