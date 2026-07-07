/* ===== SEAMLESS WEBINAR — JS v5 (single page) ===== */
const lang = {
  ru: {
    "glitch-title": "СОВРЕМЕННЫЙ ТАНЕЦ<br>И ПЕРФОРМАНС<br>В ЭПОХУ РИЛС",
    "lang-quote": "«Поднимите руку, если за последний месяц вы видели перформанс» — поднялась половина группы.<br>«А теперь те, кто смотрел stories или Reels» — встали все.",
    "lang-quote-author": "— Александр Андрияшкин",
    "entry-name-label": "Имя",
    "entry-contact-label": "Контакт для связи",
    "entry-country-label": "Страна",
    "btn-entry-submit": "Получить доступ →",

    "teacher-1-name": "Александр Андрияшкин",
    "teacher-1-role": "Хореограф, режиссёр, педагог",
    "teacher-1-bio": "Лауреат «Золотой Маски» (премия 2017 — спектакль The_Marusya). Шортлист Aerowaves (топ-20 хореографов Европы). Резиденции: Jacob's Pillow (США), Tanzquartier (Вена), SiWiC (Цюрих). Преподавал в 14 странах — от США до Японии.",
    "teacher-2-name": "Владимир Варнава",
    "teacher-2-role": "Танцовщик, хореограф, режиссёр",
    "teacher-2-bio": "Двукратный лауреат «Золотой Маски» (2011, 2014 — лучшая мужская роль). Лауреат Harlequin (2011). Победитель Context. Diana Vishneva (2013). Постановки в Мариинском театре, Пермском театре оперы и балета, AKHE театре.",

    "material-1-chip": "🎬 Бесплатная лекция",
    "content-1-title": "Бесплатная лекция от Андрияшкина",
    "v1-label": "Андрияшкин — 100 лет за 100 минут",
    "v1-desc": "Перфолекция об истории современного танца. От модерна до метамодерна.",

    "material-2-chip": "🎬 Бесплатный урок",
    "content-2-title": "Бесплатный урок от Варнавы",
    "v2-label": "Варнава — Body & Gravity (RUS)",
    "v2-desc": "Танц практика: вес, гравитация и присутствие в движении.",

    "webinar-intro-text": "Этот вебинар показывает, как мыслят художники.\nВы уйдёте с методом, который сможете применить в своей работе —\nсоздаёте ли вы рилсы, перформансы, фильмы или визуальные проекты.",

    "badge-webinar": "sreda+seamless",
    "webinar-title": "Contemporary Dance & Performance<br>в эпоху Reels",
    "webinar-sub": "Как идеи становятся движением, образами и выражением?",
    "problem-text": "Мы живём во время, когда перформанс больше не ограничен сценой. Сегодня движение, образы и личные истории существуют в разных пространствах — от театра и галерей до цифровых платформ. Reels, видео и социальные сети стали частью языка нашего времени. Но за каждым образом стоит более глубокий вопрос: • Как идея становится формой? • Как чувство становится движением? • Как внутренний импульс становится тем, чем можно поделиться с другими?",
    "why-title": "Почему мы это исследуем?",
    "why-p1": "В современном искусстве создание редко начинается с готового ответа. Оно начинается с вопроса. Наблюдения. Любопытства. Поиска.",
    "why-p2": "Художники, танцовщики и перформеры развивают свою работу через процесс исследования — изучая контекст, тело, пространство и смысл. Так появляются новые формы.",
    "why-p3": "На этом вебинаре мы исследуем, как художественное мышление помогает создавать идеи и превращать их в выражение.",
    "research-title": "На вебинаре мы",
    "research-1": "исследуем реальные вопросы о создании и выражении",
    "research-2": "посмотрим, как строятся художественные концепции",
    "research-3": "откроем инструменты для развития идей",
    "research-4": "увидим, как идея трансформируется через тело и движение",
    "research-5": "поэкспериментируем с переводом концепта в визуальную форму",
    "not-title": "Мы не учим",
    "not-1": "Как делать виральный контент",
    "not-2": "Как копировать успешные форматы",
    "not-3": "Универсальные формулы креативности",
    "yes-title": "Мы исследуем",
    "yes-1": "Как художники создают идеи",
    "yes-2": "Как концепции становятся формами",
    "yes-3": "Как тело становится инструментом коммуникации",
    "yes-4": "Как исследование ведёт к новым возможностям",
    "yes-5": "Как создавать из собственной перспективы",
    "outcomes-title": "Вы можете уйти с",
    "outcome-1": "Новым взглядом на креативность",
    "outcome-2": "Инструментами для развития собственных идей",
    "outcome-3": "Более глубоким пониманием связи между концептом, телом и выражением",
    "outcome-4": "Новым взглядом на перформанс в современном мире",
    "for-title": "Для кого",
    "for-1": "Танцовщики и хореографы",
    "for-2": "Перформеры и художники",
    "for-3": "Исследователи движения",
    "for-4": "Создатели контента",
    "for-5": "Всем, кому интересна креативность, тело и выражение",

    "format-title": "Формат",
    "format-1": "2-часовая сессия: инструменты для создания перформанса",
    "format-2": "Возможность задать вопросы в прямом эфире",
    "format-4": "Запись остаётся после вебинара",
    "session-ru-label": "🇷🇺 Русская сессия",
    "session-en-label": "🇬🇧 Английская сессия",
    "faq-q1": "Нужен ли опыт танцев?",
    "faq-a1": "Любой уровень. Интенсив подходит и новичкам, и практикующим танцорам, перформерам, исследователям движения — и всем, кому интересна тема тела и камеры.",
    "faq-q2": "Будет ли запись?",
    "faq-a2": "Да, все участники получат запись.",
    "faq-q3": "Как это работает онлайн?",
    "faq-a3": "Ты получишь приватную Zoom-ссылку после покупки.",
    "timer-label": "Специальная цена действует до:",
    "price-old": "$67",
    "price-current": "$47",
    "price-info": "Текущая цена — $47. После Early Bird — $67",
    "btn-buy": "Купить билет — $47",
    "buy-link": "https://web.tribute.tg/s/X02"
  },
  en: {
    "glitch-title": "Contemporary Dance &amp; Performance<br>in the Age of Reels",
    "lang-quote": "«Raise your hand if in the last month you've seen a performance» — half the group raised their hand.<br>«Now those who watched stories or Reels» — everyone stood up.",
    "lang-quote-author": "— Alexander Andriyashkin",
    "entry-name-label": "Name",
    "entry-contact-label": "Contact info",
    "entry-country-label": "Country",
    "btn-entry-submit": "Get access →",

    "teacher-1-name": "Alexander Andriyashkin",
    "teacher-1-role": "Choreographer, director, educator",
    "teacher-1-bio": "Laureate of the Golden Mask Award (2017 — The_Marusya). Aerowaves shortlist (Europe's top 20 choreographers). Residencies: Jacob's Pillow (USA), Tanzquartier (Vienna), SiWiC (Zurich). Taught in 14 countries — from the US to Japan.",
    "teacher-2-name": "Vladimir Varnava",
    "teacher-2-role": "Dancer, choreographer, director",
    "teacher-2-bio": "Two-time Golden Mask laureate (2011, 2014 — Best Male Role in Ballet). Harlequin Award winner (2011). Winner of Context. Diana Vishneva choreography competition (2013). Productions at Mariinsky Theatre, Perm Opera, AKHE Theatre.",

    "material-1-chip": "🎬 Free talk",
    "content-1-title": "Free talk from Andriyashkin",
    "v1-label": "Andriyashkin — Why do we need performance if we have iPhone?",
    "v1-desc": "A conversation about performance, presence and the body in the age of reels and digital content.",

    "material-2-chip": "🎬 Free lesson",
    "content-2-title": "Free lesson from Varnava",
    "v2-label": "Varnava — Body & Gravity (EN)",
    "v2-desc": "A practical session on weight, gravity and presence in movement.",

    "webinar-intro-text": "This webinar teaches how artists think.\nLeave with a method you can apply to your own work-\nwhether you create reels, performances, films or visual projects.",

    "badge-webinar": "sreda+seamless",
    "webinar-title": "Contemporary Dance &amp; Performance<br>in the Age of Reels",
    "webinar-sub": "How do ideas become movement, images and expression?",
    "problem-text": "We live in a time when performance is no longer limited to the stage. Today, movement, images and personal stories exist across different spaces — from theatre and galleries to digital platforms. Reels, videos and social media have become part of the language of our time.",
    "why-title": "Why are we exploring this?",
    "why-p1": "In contemporary art, creation rarely starts with a ready-made answer. It starts with a question. An observation. A curiosity. A search.",
    "why-p2": "Artists, dancers and performers develop their work through a process of research — exploring context, body, space and meaning. This is how new forms appear.",
    "why-p3": "During this webinar we will explore how artistic thinking can help us create ideas and transform them into expression.",
    "research-title": "During the webinar we will",
    "research-1": "explore real questions about creation and expression",
    "research-2": "look at how artistic concepts are built",
    "research-3": "discover tools for developing ideas",
    "research-4": "see how an idea can transform through the body and movement",
    "research-5": "experiment with translating a concept into a visual form",
    "not-title": "We won't teach",
    "not-1": "How to make viral content",
    "not-2": "How to copy successful formats",
    "not-3": "Universal formulas for creativity",
    "yes-title": "We will explore",
    "yes-1": "How artists create ideas",
    "yes-2": "How concepts become forms",
    "yes-3": "How the body becomes a tool of communication",
    "yes-4": "How research leads to new possibilities",
    "yes-5": "How to create from your own perspective",
    "outcomes-title": "You may leave with",
    "outcome-1": "A new way of looking at creativity",
    "outcome-2": "Tools for developing your own ideas",
    "outcome-3": "A deeper understanding of the connection between concept, body and expression",
    "outcome-4": "A new perspective on performance in the contemporary world",
    "for-title": "For whom",
    "for-1": "Dancers & choreographers",
    "for-2": "Performers & artists",
    "for-3": "Movement researchers",
    "for-4": "Content creators",
    "for-5": "Anyone curious about creativity, body & expression",

    "format-title": "Format",
    "format-1": "2-hour session: tools to build your own performance",
    "format-2": "Live Q&A session",
    "format-4": "Recording available after",
    "session-ru-label": "🇷🇺 RU session",
    "session-en-label": "🇬🇧 EN session",
    "faq-q1": "Do I need dance experience?",
    "faq-a1": "Any level. Designed for both beginners and practicing dancers, performers, movement researchers — and anyone curious about body and camera.",
    "faq-q2": "Will there be a recording?",
    "faq-a2": "Yes. All participants receive the recording.",
    "faq-q3": "How does it work online?",
    "faq-a3": "You'll receive a private Zoom link after purchase.",
    "timer-label": "Special price valid until:",
    "price-old": "$97",
    "price-current": "$47",
    "price-info": "Current price — $47. After Early Bird — $97",
    "btn-buy": "Buy ticket — $47",
    "buy-link": "https://web.tribute.tg/s/X02"
  }
};

let currentLang = 'en';
let timerInterval = null;
let entryData = {};

// ===== LANG =====
function setLang(l) {
  currentLang = l;
  applyLang(l);
}
function showContent() {
  const entry = document.getElementById('section-entry');
  const wrapper = document.getElementById('content-wrapper');
  if (entry) entry.style.display = 'none';
  if (wrapper) { wrapper.classList.remove('hidden'); wrapper.style.display = ''; }
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function applyLang(l) {
  const t = lang[l];
  for (const [key, value] of Object.entries(t)) {
    const el = document.getElementById(key);
    if (el) {
      if (key === 'lang-quote' || key === 'webinar-title' || key === 'glitch-title') {
        el.innerHTML = value;
        if (key === 'glitch-title') el.setAttribute('data-text', value.replace(/<br>/gi, ' '));
      } else {
        el.textContent = value;
      }
    }
  }
  // Update buy links
  const link = lang[l]['buy-link'];
  const btn = document.getElementById('btn-buy');
  if (link && btn) btn.href = link;
  
  document.documentElement.lang = l;
  
  // Show/hide session cards - no longer needed as both are always visible now
}

// ===== ENTRY FORM SUBMIT =====
function submitEntry() {
  const name = document.getElementById('entry-name').value.trim();
  const contactType = document.getElementById('entry-contact-type').value;
  const contact = document.getElementById('entry-contact').value.trim();
  const country = document.getElementById('entry-country').value;

  if (!name) {
    alert(currentLang === 'ru' ? 'Пожалуйста, введи своё имя' : 'Please enter your name');
    return;
  }
  if (!contact) {
    alert(currentLang === 'ru' ? 'Пожалуйста, укажи контакт для связи' : 'Please enter your contact');
    return;
  }
  if (!country) {
    alert(currentLang === 'ru' ? 'Пожалуйста, выбери страну' : 'Please select your country');
    return;
  }

  const fullContact = contactType === 'telegram' ? 'tg: ' + contact : 'wa: ' + contact;

  entryData = {
    name,
    contact: fullContact,
    contactType,
    contactValue: contact,
    country,
    lang: currentLang,
    source: 'webinar-landing-v5',
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  localStorage.setItem('seamless_entry', JSON.stringify(entryData));

  // Send to Supabase
  if (typeof saveToSupabase === 'function') {
    saveToSupabase(entryData);
  }

  // Show content
  revealContent();
}

// ===== REVEAL CONTENT =====
function revealContent() {
  const wrapper = document.getElementById('content-wrapper');
  if (!wrapper) return;

  wrapper.classList.remove('hidden');
  wrapper.classList.add('visible');

  // Small delay then smooth scroll to first content section
  setTimeout(() => {
    const firstSection = wrapper.querySelector('.content-section');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    startTimer();
  }, 300);

  initFaq();
}

// ===== VIDEOS =====
function playVideo(n) {
  const links = {
    1: { ru: '0-pUiSubwSI', en: 'JlVPtblL_2g' },
    2: { ru: 'pyU1CMrvRLA', en: 'EYgnHrYCMHQ' }
  };
  const container = document.getElementById(`video-${n}-container`);
  const id = links[n][currentLang] || links[n]['ru'];
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
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    const now = new Date();
    // Calculate end of current Bali day (UTC+8)
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const baliMs = utcMs + 8 * 3600000;
    const baliDayEnd = (Math.floor(baliMs / 86400000) + 1) * 86400000;
    const diffSec = Math.max(0, baliDayEnd - baliMs);
    const h = String(Math.floor(diffSec / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diffSec % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diffSec % 60000) / 1000)).padStart(2, '0');
    document.getElementById('timer-days').textContent = '';
    document.getElementById('timer-days-l').textContent = '';
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
  try {
    applyLang('en');
    initFaq();

    // Check if returning user already submitted
    const stored = localStorage.getItem('seamless_entry');
    if (stored) {
      try {
        const d = JSON.parse(stored);
        entryData = d;
        if (d.lang) {
          currentLang = d.lang;
          applyLang(currentLang);
        }
        // Auto-reveal content for returning visitors
        revealContent();
      } catch(e) {}
    }

    // Enter key on form fields
    ['entry-name', 'entry-contact', 'entry-contact-type', 'entry-country'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            submitEntry();
          }
        });
      }
    });

  } catch(e) {
    console.error('SEAMLESS INIT ERROR:', e);
  }
});
