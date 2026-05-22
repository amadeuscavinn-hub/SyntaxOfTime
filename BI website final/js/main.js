/**
 * The Syntax of Time - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initProgressBar();
  initCursorGlow();
  initMobileMenu();
  initScrollReveal();
  initTimeline();
  initTransitions();
  initTestimonials();
  initGaleri();
  initSources();
  initImagePlaceholders();
  initBackToTop();
  initNavigation();
});

/**
 * Progress Bar
 */
function initProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  if (!progressBar) return;

  function updateProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollTop / Math.max(1, scrollHeight);
    progressBar.style.transform = `scaleX(${progress})`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/**
 * Cursor Glow Effect
 */
function initCursorGlow() {
  const cursorGlow = document.querySelector('.cursor-glow');
  if (!cursorGlow) return;

  let posX = -1000, posY = -1000;

  document.addEventListener('mousemove', function(e) {
    posX = e.clientX;
    posY = e.clientY;
    cursorGlow.style.opacity = '1';
    cursorGlow.style.background = `radial-gradient(500px circle at ${posX}px ${posY}px, rgba(201,169,97,0.07), transparent 50%)`;
  });

  document.addEventListener('mouseleave', function() {
    cursorGlow.style.opacity = '0';
  });
}

/**
 * Mobile Menu
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Scroll Reveal Animation
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  function checkReveal() {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 80;
      
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkReveal, { passive: true });
  checkReveal();
}

/**
 * OS Timeline
 */
function initTimeline() {
  const timelineSection = document.querySelector('.os-timeline-section');
  if (!timelineSection) return;

  const releases = [
    {
      year: 1985,
      name: "Windows 1.0",
      codename: "Interface Manager",
      tagline: "Jendela pertama terbuka.",
      body: "Antarmuka grafis pertama Microsoft yang berjalan di atas MS-DOS. Jendelanya tersusun berdampingan tanpa boleh saling bertumpuk. Penjualannya lambat, namun ia menanam fondasi: bahwa komputer dapat ditunjuk, bukan hanya diketik.",
      highlight: "Memperkenalkan mouse kepada generasi yang sebelumnya hanya mengenal keyboard.",
      motif: "Jendela tersusun · 16 warna · MS-DOS Executive",
      verdict: "campur"
    },
    {
      year: 1990,
      name: "Windows 3.0",
      codename: "Janus",
      tagline: "Adopsi massal dimulai.",
      body: "Tombol tiga dimensi, Program Manager, dan File Manager. Terjual lebih dari sepuluh juta kopi dalam dua tahun pertama dan mengubah PC menjadi benda rumah tangga. Dianggap sebagai titik balik yang membuat Microsoft mendominasi pasar OS.",
      highlight: "Versi Windows pertama yang terasa seperti perangkat lunak konsumen, bukan eksperimen ilmiah.",
      motif: "Program Manager · 256 warna · Solitaire",
      verdict: "sukses"
    },
    {
      year: 1995,
      name: "Windows 95",
      codename: "Chicago",
      tagline: "Era Start menu lahir.",
      body: "Start menu, Taskbar, dan Recycle Bin — kosakata yang begitu sukses sehingga nyaris tidak berubah selama tiga puluh tahun. Peluncurannya menjadi peristiwa budaya global, lengkap dengan iklan Rolling Stones dan antrean tengah malam di toko komputer.",
      highlight: "Menetapkan metafora desktop yang masih kita huni hingga hari ini.",
      motif: "Start Menu · Taskbar · Plug and Play",
      verdict: "sukses"
    },
    {
      year: 2001,
      name: "Windows XP",
      codename: "Whistler",
      tagline: "Bukit hijau yang melegenda.",
      body: "Bahasa visual yang lebih ramah — sudut membulat, warna cerah, dan wallpaper Bliss yang ikonik. Stabil, dicintai, dan keras kepala: Microsoft baru menghentikan dukungan resminya pada 2014, dan jutaan mesin masih menjalankannya hingga lama setelah itu.",
      highlight: "Antarmuka paling lama dicintai dalam sejarah komputasi.",
      motif: "Tema Luna · ClearType · Bliss",
      verdict: "sukses"
    },
    {
      year: 2007,
      name: "Windows Vista",
      codename: "Longhorn",
      tagline: "Ambisi yang tersandung.",
      body: "Desain Aero, transparansi, dan keamanan baru. Namun Vista hadir dengan bug, persyaratan perangkat keras yang berat, dan masalah kompatibilitas yang luas. Banyak organisasi memilih bertahan di XP, dan peluncurannya tercatat sebagai salah satu kegagalan strategis paling didokumentasikan di industri TI.",
      highlight: "Pelajaran klasik: inovasi tanpa kesiapan ekosistem akan dihukum oleh pasar.",
      motif: "Aero · UAC · Sidebar Gadgets",
      verdict: "gagal"
    },
    {
      year: 2009,
      name: "Windows 7",
      codename: "Vienna",
      tagline: "Penyempurnaan yang tenang.",
      body: "Setelah resepsi Vista yang bermasalah, Windows 7 hadir dengan poles, transparansi yang lebih ringan, dan Taskbar baru. Favorit konsensus — bukti bahwa kesederhanaan dan kestabilan bisa menjadi inovasi tersendiri.",
      highlight: "Memulihkan kepercayaan pada platform setelah satu dekade penuh gejolak.",
      motif: "Aero glass · Jump Lists · Snap",
      verdict: "sukses"
    },
    {
      year: 2012,
      name: "Windows 8",
      codename: "Threshold I",
      tagline: "Belokan menuju layar sentuh.",
      body: "Start screen penuh layar, Live Tiles, dan hilangnya tombol Start. Eksperimen berani memperlakukan PC seperti tablet. Penolakan publik terhadap perubahan radikal ini memicu riset akademis tentang resistensi pengguna terhadap transformasi sistem TI.",
      highlight: "Studi kasus paling sering dikutip tentang bagaimana perubahan UI yang terlalu cepat mendorong resistensi.",
      motif: "Live Tiles · Charms Bar · Modern UI",
      verdict: "campur"
    },
    {
      year: 2015,
      name: "Windows 10",
      codename: "Threshold II",
      tagline: "Satu Windows, di mana saja.",
      body: "Disatukan untuk PC, tablet, dan ponsel. Start menu kembali, Cortana hadir, dan OS bertransformasi menjadi layanan yang terus diperbarui — bukan lagi produk yang dikemas dalam kotak. Strategi 'Windows as a Service' lahir di sini.",
      highlight: "Menandai transisi dari perangkat lunak menjadi langganan, dari rilis menjadi pembaruan berkelanjutan.",
      motif: "Live Tiles · Cortana · Edge",
      verdict: "sukses"
    },
    {
      year: 2021,
      name: "Windows 11",
      codename: "Sun Valley",
      tagline: "Geometri yang lebih lembut.",
      body: "Start menu di tengah, sudut membulat, material Mica, dan Fluent Design. Adopsi awal lambat karena syarat TPM 2.0 dan CPU yang ketat, namun pada 2024 telah menyalip Windows 10 di banyak segmen kerja profesional dengan fitur Snap Layouts dan integrasi Teams.",
      highlight: "Windows pertama yang dibentuk oleh ruang kerja hibrid pasca-pandemi.",
      motif: "Fluent Design · Mica · Snap Layouts",
      verdict: "sukses"
    }
  ];

  const verdictLabels = {
    sukses: "Diterima Baik",
    campur: "Tanggapan Beragam",
    gagal: "Bermasalah"
  };

  let activeIndex = 2;

  function updateTimeline(index) {
    activeIndex = index;
    const r = releases[index];

    // Update card
    const card = timelineSection.querySelector('.os-timeline-card');
    if (card) {
      card.querySelector('.os-timeline-year').textContent = r.year;
      card.querySelector('.os-timeline-codename').textContent = r.codename;
      card.querySelector('.os-timeline-card-title').textContent = r.name;
      card.querySelector('.os-timeline-card-tagline').textContent = `"${r.tagline}"`;
      
      const verdictEl = card.querySelector('.os-timeline-verdict');
      verdictEl.className = `os-timeline-verdict verdict-${r.verdict}`;
      verdictEl.innerHTML = `<span class="os-timeline-verdict-dot"></span>Penilaian Pasar · ${verdictLabels[r.verdict]}`;
      
      card.querySelector('.os-timeline-card-body').textContent = r.body;
      card.querySelector('.os-timeline-highlight-text').textContent = r.highlight;
      card.querySelector('.os-timeline-motif').textContent = r.motif;
    }

    // Update counter
    const counter = timelineSection.querySelector('.os-timeline-counter');
    if (counter) {
      counter.innerHTML = `<span class="current">${String(index + 1).padStart(2, '0')}</span><span> / </span>${String(releases.length).padStart(2, '0')} — Klik atau gunakan ← →`;
    }

    // Update scrubber progress
    const progress = timelineSection.querySelector('.os-timeline-scrubber-progress');
    if (progress) {
      progress.style.width = `${(index / (releases.length - 1)) * 100}%`;
    }

    // Update scrubber points
    const points = timelineSection.querySelectorAll('.os-timeline-scrubber-point');
    points.forEach((point, i) => {
      point.classList.remove('active', 'past');
      if (i === index) {
        point.classList.add('active');
      } else if (i < index) {
        point.classList.add('past');
      }
    });

    // Update buttons
    const buttons = timelineSection.querySelectorAll('.os-timeline-btn');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

  // Initialize scrubber points
  const scrubber = timelineSection.querySelector('.os-timeline-scrubber');
  if (scrubber) {
    releases.forEach((r, i) => {
      const left = (i / (releases.length - 1)) * 100;
      const point = document.createElement('button');
      point.className = 'os-timeline-scrubber-point';
      point.style.left = `${left}%`;
      point.innerHTML = `
        <span class="os-timeline-scrubber-dot"></span>
        <span class="os-timeline-scrubber-year">${r.year}</span>
        <span class="os-timeline-scrubber-name">${r.name.replace('Windows ', '')}</span>
      `;
      point.addEventListener('click', () => updateTimeline(i));
      scrubber.appendChild(point);
    });

    // Keyboard navigation
    scrubber.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight') {
        updateTimeline(Math.min(activeIndex + 1, releases.length - 1));
      } else if (e.key === 'ArrowLeft') {
        updateTimeline(Math.max(activeIndex - 1, 0));
      }
    });
  }

  // Initialize buttons
  const buttonsContainer = timelineSection.querySelector('.os-timeline-buttons');
  if (buttonsContainer) {
    releases.forEach((r, i) => {
      const btn = document.createElement('button');
      btn.className = 'os-timeline-btn';
      btn.innerHTML = `
        <div class="os-timeline-btn-year">${r.year}</div>
        <div class="os-timeline-btn-name">${r.name.replace('Windows ', 'Win ')}</div>
      `;
      btn.addEventListener('click', () => updateTimeline(i));
      buttonsContainer.appendChild(btn);
    });
  }

  updateTimeline(activeIndex);
}

/**
 * Transitions Section
 */
function initTransitions() {
  const section = document.querySelector('.transitions-section');
  if (!section) return;

  const transitions = [
    {
      from: "DOS",
      to: "Win 3.0",
      title: "Dari baris perintah ke jendela grafis",
      body: "Pengguna tidak lagi harus menghafal perintah. Layar berubah menjadi sebuah ruang, bukan sekadar tempat ketikan. Para pengembang perangkat lunak harus belajar mendesain untuk mata, bukan hanya untuk buku manual — sebuah pergeseran yang membuka era kerja kantor digital."
    },
    {
      from: "Win XP",
      to: "Win Vista",
      title: "Pelajaran tentang inovasi yang terlalu cepat",
      body: "Vista memperkenalkan Aero, UAC, dan arsitektur keamanan baru — tetapi mengabaikan kesiapan ekosistem. Driver belum siap, perangkat keras tidak mampu, dan pengguna menolak gangguan UAC. Riset industri TI hingga kini mengutip Vista sebagai studi kasus klasik tentang dampak buruk merilis perubahan besar tanpa kesiapan mitra dan pasar."
    },
    {
      from: "Win 7",
      to: "Win 8",
      title: "Belokan layar sentuh dan bangkitnya resistensi pengguna",
      body: "Start screen, Live Tiles, dan hilangnya tombol Start menjadi pemicu gelombang resistensi yang kemudian dipelajari secara akademis. Penelitian tentang user resistance menunjukkan bahwa perubahan radikal tanpa migrasi yang jelas akan menghasilkan penolakan — bahkan dari pengguna yang biasanya adaptif."
    },
    {
      from: "Win 10",
      to: "Win 11",
      title: "Dari produk menjadi atmosfer kerja",
      body: "Pembaruan kontinu, Snap Layouts, dan integrasi Teams. Adopsi awal lambat, namun riset Microsoft tentang masa depan kerja menunjukkan bahwa fitur multitasking bawaan OS modern berkorelasi langsung dengan peningkatan produktivitas pekerja hibrid. Windows 11 adalah OS pertama yang dirancang dengan asumsi bahwa 'meja' tidak lagi tetap."
    }
  ];

  let activeIndex = 0;

  function updateTransition(index) {
    activeIndex = index;
    const t = transitions[index];

    // Update buttons
    const buttons = section.querySelectorAll('.transition-btn');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    // Update content
    const content = section.querySelector('.transition-content');
    if (content) {
      content.querySelector('.transition-header-from').textContent = t.from;
      content.querySelector('.transition-header-to').textContent = t.to;
      content.querySelector('.transition-title').textContent = t.title;
      content.querySelector('.transition-body').textContent = t.body;
    }
  }

  // Initialize buttons
  const list = section.querySelector('.transitions-list');
  if (list) {
    transitions.forEach((t, i) => {
      const btn = document.createElement('button');
      btn.className = 'transition-btn';
      btn.innerHTML = `
        <div class="transition-btn-header">
          <span class="transition-btn-from">${t.from}</span>
          <span class="transition-btn-arrow">→</span>
          <span class="transition-btn-to">${t.to}</span>
        </div>
        <div class="transition-btn-title">${t.title}</div>
      `;
      btn.addEventListener('click', () => updateTransition(i));
      btn.addEventListener('mouseenter', () => updateTransition(i));
      list.appendChild(btn);
    });
  }

  updateTransition(0);
}

/**
 * Testimonials Section
 */
function initTestimonials() {
  const section = document.querySelector('.testimonials-section');
  if (!section) return;

  const voices = [
    {
      group: "Dosen",
      role: "Pengajar Sistem Operasi · 28 tahun mengajar",
      name: "Dr. Hendra Wijaya",
      quote: "Saya pertama kali menyentuh Windows 3.1 di laboratorium kampus pada 1993. Komputernya satu, mahasiswanya tiga puluh. Kami antri hanya untuk membuka File Manager. Hari ini mahasiswa saya membuka Visual Studio sambil video call — itu lompatan yang sulit dijelaskan tanpa pernah merasakannya.",
      takeaway: "Akses adalah perubahan terbesar — bukan grafis, bukan kecepatan, tapi siapa yang akhirnya bisa duduk di depan layar."
    },
    {
      group: "Dosen",
      role: "Dosen Desain Komunikasi Visual",
      name: "Ibu Maria Santoso",
      quote: "Windows XP mengajari satu generasi desainer Indonesia bagaimana berpikir dalam folder, dalam undo, dalam ctrl-z. Anak-anak sekarang menganggap itu semua udara. Mereka tidak sadar bahwa cara mereka 'membatalkan' sesuatu di hidup digital mereka adalah warisan dari sebuah tombol kecil di pojok layar.",
      takeaway: "Antarmuka mengajarkan kebiasaan berpikir, dan kebiasaan itu menetap jauh setelah versi OS-nya pensiun."
    },
    {
      group: "Pengguna",
      role: "Mahasiswa Teknik Informatika · Pengguna Win 11",
      name: "Reyhan Pratama",
      quote: "Snap Layouts adalah alasan saya pindah ke Windows 11. Saya bisa coding di kiri, dokumentasi di tengah, dan WhatsApp Web di kanan tanpa pernah menyentuh mouse. Untuk multitasking, ini bukan upgrade — ini cara hidup yang berbeda.",
      takeaway: "OS modern dinilai bukan dari fitur barunya, tapi dari berapa banyak gesekan kecil yang ia hilangkan dari hari kita."
    },
    {
      group: "Pengguna",
      role: "Pengguna Harian · UMKM Online",
      name: "Ibu Sari Lestari",
      quote: "Saya mulai jualan online dari Windows 7 di warnet. Sekarang saya punya laptop sendiri dengan Windows 11. Yang lucu — Start menu-nya pindah ke tengah dan saya butuh tiga hari untuk terbiasa. Tapi sekarang saya tidak bisa kembali. Ada rasa rapi yang baru.",
      takeaway: "Perubahan kecil pada antarmuka bisa terasa seperti pindah rumah. Tidak nyaman dulu, lalu menjadi rumah."
    }
  ];

  const groups = ["Dosen", "Pengguna"];
  let currentGroup = "Dosen";
  let currentIndex = 0;

  function getFilteredVoices() {
    return voices.filter(v => v.group === currentGroup);
  }

  function updateTestimonial() {
    const filtered = getFilteredVoices();
    const v = filtered[currentIndex % filtered.length];

    // Update tabs
    const tabs = section.querySelectorAll('.testimonial-tab');
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.group === currentGroup);
    });

    // Update counter
    const counter = section.querySelector('.testimonials-counter');
    if (counter) {
      counter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(filtered.length).padStart(2, '0')}`;
    }

    // Update content
    section.querySelector('.testimonial-text').textContent = v.quote;
    section.querySelector('.testimonial-author-name').textContent = v.name;
    section.querySelector('.testimonial-author-role').textContent = v.role;
    section.querySelector('.testimonial-takeaway-text').textContent = v.takeaway;

    // Update sidebar title
    section.querySelector('.testimonials-sidebar-title').textContent = `Suara dari ${currentGroup}`;

    // Update sidebar list
    const listContainer = section.querySelector('.testimonial-list');
    if (listContainer) {
      listContainer.innerHTML = '';
      filtered.forEach((vo, i) => {
        const btn = document.createElement('button');
        btn.className = `testimonial-list-btn${i === currentIndex ? ' active' : ''}`;
        btn.innerHTML = `
          <div class="testimonial-list-name">${vo.name}</div>
          <div class="testimonial-list-role">${vo.role}</div>
        `;
        btn.addEventListener('click', () => {
          currentIndex = i;
          updateTestimonial();
        });
        btn.addEventListener('mouseenter', () => {
          currentIndex = i;
          updateTestimonial();
        });
        listContainer.appendChild(btn);
      });
    }
  }

  // Initialize tabs
  const tabsContainer = section.querySelector('.testimonials-tabs');
  if (tabsContainer) {
    groups.forEach(g => {
      const tab = document.createElement('button');
      tab.className = 'testimonial-tab';
      tab.dataset.group = g;
      tab.textContent = g;
      tab.addEventListener('click', () => {
        currentGroup = g;
        currentIndex = 0;
        updateTestimonial();
      });
      tabsContainer.insertBefore(tab, tabsContainer.lastElementChild);
    });
  }

  updateTestimonial();
}

/**
 * Galeri Section
 */
function initGaleri() {
  const section = document.querySelector('.galeri-section');
  if (!section) return;

  const albums = [
    {
      key: "command",
      label: "Era Perintah",
      range: "1985 — 1994",
      items: [
        { label: "Windows 1.0 Desktop", caption: "Antarmuka tersusun, MS-DOS Executive di tengah." },
        { label: "Program Manager · Win 3.0", caption: "Ikon program 3D yang melegenda." },
        { label: "Solitaire Pertama", caption: "Permainan yang mengajarkan jutaan orang menggunakan mouse." }
      ]
    },
    {
      key: "desktop",
      label: "Era Desktop",
      range: "1995 — 2008",
      items: [
        { label: "Windows 95 Start Menu", caption: "Tombol Start hijau yang mengubah segalanya." },
        { label: "Bliss · Windows XP", caption: "Wallpaper paling banyak dilihat dalam sejarah komputasi." },
        { label: "MSN Messenger", caption: "Suara nudge dan stiker emoticon era 2000-an." }
      ]
    },
    {
      key: "glass",
      label: "Era Kaca",
      range: "2009 — 2020",
      items: [
        { label: "Aero Glass · Win 7", caption: "Transparansi yang menjadi mewah pada masanya." },
        { label: "Live Tiles · Win 8", caption: "Kartu hidup yang ambisius — dan kontroversial." },
        { label: "Cortana · Win 10", caption: "Asisten suara di kotak pencarian Taskbar." }
      ]
    },
    {
      key: "fluent",
      label: "Era Fluent",
      range: "2021 — sekarang",
      items: [
        { label: "Centered Start · Win 11", caption: "Start menu berpindah ke tengah, sebuah pergeseran simbolik." },
        { label: "Snap Layouts", caption: "Multitasking yang dirancang untuk layar lebar dan kerja hibrid." },
        { label: "Mica Material", caption: "Latar lembut yang menyerap warna wallpaper." }
      ]
    }
  ];

  let activeKey = albums[0].key;

  function updateGaleri() {
    const album = albums.find(a => a.key === activeKey);
    if (!album) return;

    // Update tabs
    const tabs = section.querySelectorAll('.galeri-tab');
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.key === activeKey);
    });

    // Update header
    section.querySelector('.galeri-range').textContent = album.range;
    section.querySelector('.galeri-label').textContent = album.label;

    // Update grid
    const grid = section.querySelector('.galeri-grid');
    if (grid) {
      grid.innerHTML = '';
      album.items.forEach(item => {
        const placeholder = createImagePlaceholder(item.label, item.caption, '4/3');
        grid.appendChild(placeholder);
      });
      initImagePlaceholders();
    }
  }

  // Initialize tabs
  const tabsContainer = section.querySelector('.galeri-tabs');
  if (tabsContainer) {
    albums.forEach(a => {
      const tab = document.createElement('button');
      tab.className = 'galeri-tab';
      tab.dataset.key = a.key;
      tab.textContent = a.label;
      tab.addEventListener('click', () => {
        activeKey = a.key;
        updateGaleri();
      });
      tabsContainer.appendChild(tab);
    });
  }

  updateGaleri();
}

/**
 * Sources Section
 */
function initSources() {
  const section = document.querySelector('.sources-section');
  if (!section) return;

  const groups = [
    {
      key: "history",
      label: "Sejarah Windows",
      items: [
        {
          title: "Microsoft Windows",
          pub: "Britannica",
          url: "https://www.britannica.com/technology/Microsoft-Windows",
          note: "Perjalanan kronologis dan faktual Windows dari versi pertama hingga Windows 11."
        },
        {
          title: "List of Windows Versions",
          pub: "Britannica",
          url: "https://www.britannica.com/technology/list-of-Windows-versions",
          note: "Perbandingan antar versi Windows beserta penilaian keberhasilan dan kegagalannya."
        },
        {
          title: "The Troubled Launch of Windows Vista",
          pub: "National CIO Review",
          url: "https://nationalcioreview.com/articles-insights/tech-time-travel/tech-time-travel-the-troubled-launch-of-windows-vista/",
          note: "Studi kasus kegagalan peluncuran Vista dengan perspektif strategis bagi industri TI."
        }
      ]
    },
    {
      key: "efficiency",
      label: "Dampak terhadap Kerja",
      items: [
        {
          title: "Windows 11 Adoption Rates 2024 Analysis",
          pub: "SoftwareKeep",
          url: "https://softwarekeep.digital/blogs/news/windows-11-adoption-rates-2024-analysis",
          note: "Dampak nyata adopsi Windows 11 di lingkungan kerja profesional."
        },
        {
          title: "Digital Tools and Workflow Efficiency",
          pub: "NCBI / PubMed Central",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12192724/",
          note: "Dampak perubahan OS dan alat digital terhadap efisiensi kerja."
        },
        {
          title: "New Future Of Work Report 2025",
          pub: "Microsoft Research",
          url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2025/12/New-Future-Of-Work-Report-2025.pdf",
          note: "Hubungan antara OS, alat digital, dan produktivitas kerja modern."
        }
      ]
    },
    {
      key: "adaptation",
      label: "Respons & Adaptasi Pengguna",
      items: [
        {
          title: "User Resistance Behaviors and Management Strategies in IT-Enabled Change",
          pub: "ResearchGate",
          url: "https://www.researchgate.net/publication/273094243_User_Resistance_Behaviors_and_Management_Strategies_in_IT-Enabled_Change",
          note: "Teori resistensi pengguna dalam perubahan sistem TI."
        },
        {
          title: "Enhancing User Experience During Organizational Transformations",
          pub: "ResearchGate",
          url: "https://www.researchgate.net/publication/381652514_Enhancing_User_Experience_During_Organizational_Transformations_Strategies_for_Effective_Change_Management_and_User_Adoption",
          note: "Analisis kasus deployment TI berskala besar dan strategi manajemen perubahan."
        }
      ]
    },
    {
      key: "indonesia",
      label: "Sosial-Budaya Indonesia",
      items: [
        {
          title: "Pengaruh Perkembangan Teknologi terhadap Kehidupan dan Interaksi Sosial Masyarakat Indonesia",
          pub: "ResearchGate",
          url: "https://www.researchgate.net/publication/375525102_Pengaruh_Perkembangan_Teknologi_terhadap_Kehidupan_dan_Interaksi_Sosial_Masyarakat_Indonesia",
          note: "Dampak perkembangan teknologi, termasuk platform Windows, terhadap masyarakat Indonesia."
        },
        {
          title: "Digital Transformation in Indonesia: Society 5.0 Context",
          pub: "MDPI · Societies",
          url: "https://www.mdpi.com/2075-4698/14/12/266",
          note: "Transformasi digital Indonesia, dengan adopsi OS dan platform sebagai pondasinya."
        }
      ]
    }
  ];

  let activeKey = groups[0].key;

  function updateSources() {
    const group = groups.find(g => g.key === activeKey);
    if (!group) return;

    // Update tabs
    const tabs = section.querySelectorAll('.source-tab');
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.key === activeKey);
    });

    // Update list
    const list = section.querySelector('.sources-list');
    if (list) {
      list.innerHTML = '';
      group.items.forEach((item, i) => {
        const link = document.createElement('a');
        link.className = 'source-item';
        link.href = item.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `
          <span class="source-number">${String(i + 1).padStart(2, '0')}</span>
          <div class="source-content">
            <div class="source-title">${item.title}</div>
            <p class="source-note">${item.note}</p>
          </div>
          <span class="source-pub">${item.pub}</span>
          <svg class="source-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        `;
        list.appendChild(link);
      });
    }
  }

  // Initialize tabs
  const tabsContainer = section.querySelector('.sources-tabs');
  if (tabsContainer) {
    groups.forEach(g => {
      const tab = document.createElement('button');
      tab.className = 'source-tab';
      tab.dataset.key = g.key;
      tab.textContent = g.label;
      tab.addEventListener('click', () => {
        activeKey = g.key;
        updateSources();
      });
      tabsContainer.appendChild(tab);
    });
  }

  updateSources();
}

/**
 * Create Image Placeholder Element
 */
function createImagePlaceholder(label, caption, aspect = '16/10') {
  const figure = document.createElement('figure');
  figure.className = 'image-placeholder';
  figure.innerHTML = `
    <div class="image-placeholder-box" style="--aspect: ${aspect}">
      <input type="file" accept="image/*">
      <div class="image-placeholder-inner">
        <div class="image-placeholder-pattern"></div>
        <div class="image-placeholder-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
            <path d="M14 3v4M12 5h4"/>
          </svg>
        </div>
        <div class="image-placeholder-tag">Tempat Gambar</div>
        <div class="image-placeholder-label">${label}</div>
        <div class="image-placeholder-hint">Klik untuk mengunggah</div>
      </div>
    </div>
    ${caption ? `<figcaption class="image-placeholder-caption">${caption}</figcaption>` : ''}
  `;
  return figure;
}

/**
 * Image Placeholders
 */
function initImagePlaceholders() {
  const placeholders = document.querySelectorAll('.image-placeholder');
  
  placeholders.forEach(placeholder => {
    const box = placeholder.querySelector('.image-placeholder-box');
    const input = placeholder.querySelector('input[type="file"]');
    const inner = placeholder.querySelector('.image-placeholder-inner');
    const label = placeholder.querySelector('.image-placeholder-label')?.textContent || 'Image';
    
    if (!box || !input || box.dataset.initialized) return;
    box.dataset.initialized = 'true';

    box.addEventListener('click', function(e) {
      if (box.classList.contains('has-image')) {
        // Open lightbox
        openLightbox(box.querySelector('.image-placeholder-img')?.src);
      } else {
        input.click();
      }
    });

    input.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(ev) {
        const src = ev.target.result;
        box.classList.add('has-image');
        inner.innerHTML = `
          <img src="${src}" alt="${label}" class="image-placeholder-img">
          <div class="image-placeholder-overlay"></div>
          <div class="image-placeholder-actions">
            <button class="image-placeholder-action change-btn" title="Ganti gambar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
              </svg>
            </button>
            <button class="image-placeholder-action zoom-btn" title="Perbesar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
              </svg>
            </button>
          </div>
        `;

        // Rebind events
        const changeBtn = inner.querySelector('.change-btn');
        const zoomBtn = inner.querySelector('.zoom-btn');

        changeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          input.click();
        });

        zoomBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          openLightbox(src);
        });
      };
      reader.readAsDataURL(file);
    });
  });
}

/**
 * Lightbox
 */
function openLightbox(src) {
  if (!src) return;
  
  let lightbox = document.querySelector('.lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <img src="" alt="Preview">
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.closest('.lightbox-close')) {
        lightbox.classList.remove('active');
      }
    });
  }

  lightbox.querySelector('img').src = src;
  lightbox.classList.add('active');
}

/**
 * Back to Top
 */
function initBackToTop() {
  const backTopBtn = document.querySelector('.footer-back-top');
  if (!backTopBtn) return;

  backTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Navigation Active States
 */
function initNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
