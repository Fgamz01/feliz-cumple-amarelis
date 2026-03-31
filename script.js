/* =============================================
   🎉 CARTA DE CUMPLEAÑOS DIGITAL
   script.js — Toda la lógica del sitio
   ============================================= */

// ================================================
// 🔐 CONTRASEÑA — CAMBIA AQUÍ
// ================================================
const CORRECT_PASSWORD = "putinga16";  // ← Escribe aquí la contraseña que quieras

// ================================================
// 💌 CONTENIDO DE LAS CARTAS — EDITA AQUÍ
// ================================================
const letters = {

  francisco: {
    // ✏️ Edita todo el contenido de la carta de Francisco
    greeting:   "Querida amiga,",
    text: `Hoy quiero que sepas lo que representas en mi vida.

Bueno Ama usted en mi vida es mas especial de lo que usted cree, eres mi amistad mas duradera, estas conmigo desde que teniamos 9 años cuando no sabiamos nada de la vida(aun nos falta), todo este tiempo que eh compartido desde nuestra niñes, juventud y ahora adultos(chiquitos) me eh dado cuenta lo especial que eres como persona, tu eres como esos eclipses que pasa cada 500 años y yo fui de los pocos que tuve el lujo de poderte ver. 

Siempre me has apoyado y me has ayudado siempre que lo haya necesitado y no sabes cuanto valoro eso mas hoy en dia en una sociedad de falsos tu eres la diferencia, eh vivido momentos felices y tristes contigo y creo que esa es una de las razones principales por las que yo te llamo mejor amiga y es que en los buenos estan todos pero en las malas solo personas como tu mi AMA y la verdad me siento muy agradecido con la vida de que en 2016 tuviera la dicha de compartir salón con usted y poder formar una amistad que hasta el sol de hoy se ah mantenido y contando papa.

Ama te quiero mucho y se que algo que siempre quiere que se lo diga, en estos 20 te deseo lo mejor en tu vida, estare para ti siempre que lo necesites.
Espero nuestro señor Jesus te brinde mucha salud y prosperidad Amita. 

Y si con todo esto aun tiene dudas de si la quiero, tendre que aprender a volar entonces.

¡Feliz cumpleaños Amita! 🎂`,
    signature:  "La quiero en estas y las otras vidas también, Francisco 💜"
  },

  brandy: {
    // ✏️ Edita todo el contenido de la carta de Brandy
    greeting:   "Mi querida pulga,",
    text: `¡Feliz, feliz cumpleaños! 🌸

Hubo un momento en mi vida en el que yo estaba completamente decidida a no relacionarme con nadie. Venía de malas experiencias y simplemente no quería amistades.

Pero entonces llegaste tú.

No fue algo planeado; simplemente, poco a poco, tu forma de ser fue generando esa confianza. Tu esencia, lo que transmites.
Desde el primer momento has estado ahí. Y no es algo que diga por decir, porque sabes cómo soy (no me agrada la gente fácilmente). Pero contigo fue distinto.

Eres ese tipo de persona de las que ya casi no quedan, que siempre está, pero no solo por estar, sino por cómo lo haces. Siempre intentas ayudar, escuchar, apoyar, pero más allá de eso, es tu forma de ser lo que realmente hace la diferencia.
Hay algo en ti que genera una confianza tan genuina, tan real, que sin darme cuenta logré abrirme contigo. Me hiciste sentir cómoda, tranquila, segura.

Eres una persona cálida, generosa, amable, y todo eso se siente. No es algo superficial, no es algo que cualquiera tenga. Es algo tuyo, algo que te hace única.
Eres de esas personas que no se encuentran fácilmente, de las que llegan y marcan de verdad.

Para mí, tú eres todo lo que está bien.

Que la vida te devuelva todo lo bonito que eres, todo lo que das, todo lo que haces por los demás sin esperar nada a cambio.

Gracias por llegar a mi vida.
Gracias por quedarte. Y gracias por ser tú.

Te quiero muchísimo 💜🌸`,
    signature:  "Con todo mi amor, Brandy 🌸"
  }

};

// ================================================
// 📸 RECUERDOS — EDITA AQUÍ
// Cambia el título, descripción e imagen de cada recuerdo
// ================================================
const memories = [
  {
    title: "Nuestra amistad 💜",
    desc:  "Todas las aventuras que hemos vivido contigo siempre estaran en nuestro corazón.",
    img:   "assets/images/rancho.jpeg"  // ← Pon la ruta de tu foto aquí
  },
  {
    title: "Fotos juntas 📸",
    desc:  "Cada momento junto a ti lo llevo siempre en mi corazón.",
    img:   "assets/images/sonrisa.jpeg"  // ← Pon la ruta de tu foto aquí
  },
  {
    title: "Momentos únicos ✨",
    desc:  "Duermes muy lindo HAHAHHA",
    img:   "assets/images/durmiendo.jpeg"  // ← Pon la ruta de tu foto aquí
  },
  {
    title: "Nuestras locuras 🌸",
    desc:  "Puras obras de arte en la arena",
    img:   "assets/images/arena.jpeg"  // ← Pon la ruta de tu foto aquí
  }
];

// ================================================
// 📷 GALERÍA — EDITA AQUÍ
// Reemplaza cada src con la ruta de tus fotos
// ================================================
const galleryImages = [
  "assets/images/caminando.jpeg",
  "assets/images/diva.jpeg",
  "assets/images/fuerza.jpeg",
  "assets/images/feriaa.jpeg",
  "assets/images/gym.jpeg"
];

// ================================================
// 🔐 SISTEMA DE ACCESO
// ================================================
function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("lockError");

  if (input === CORRECT_PASSWORD) {
    // Contraseña correcta → acceder al sitio
    const lockscreen = document.getElementById("lockscreen");
    lockscreen.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    lockscreen.style.opacity = "0";
    lockscreen.style.transform = "scale(1.05)";
    setTimeout(() => {
      lockscreen.classList.add("hidden");
      document.getElementById("mainSite").classList.remove("hidden");
      initSite();
    }, 800);
  } else {
    // Contraseña incorrecta → mostrar error con animación
    error.classList.remove("hidden");
    error.style.animation = "none";
    setTimeout(() => { error.style.animation = "shake 0.4s ease"; }, 10);
    document.getElementById("passwordInput").value = "";
    document.getElementById("passwordInput").focus();

    // Vibración sutil del campo
    const input = document.getElementById("passwordInput");
    input.style.borderColor = "#FCA5A5";
    setTimeout(() => { input.style.borderColor = ""; }, 1500);

    setTimeout(() => { error.classList.add("hidden"); }, 3000);
  }
}

// ================================================
// 🌐 INICIALIZAR SITIO
// ================================================
function initSite() {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  updateGalleryImages();
  initScrollObserver();
}

// Actualizar imágenes de galería en el HTML
function updateGalleryImages() {
  const items = document.querySelectorAll(".gallery-item img");
  items.forEach((img, i) => {
    if (galleryImages[i]) img.src = galleryImages[i];
  });
}

// ================================================
// 🧭 NAVEGACIÓN
// ================================================
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // Cerrar menú móvil si está abierto
  document.querySelector(".nav-links")?.classList.remove("open");
}

function toggleNav() {
  document.querySelector(".nav-links")?.classList.toggle("open");
}

// ================================================
// 💌 SISTEMA DE CARTAS
// ================================================
let currentLetter = null;
let envelopeOpened = false;

function openLetter(who) {
  currentLetter = who;
  envelopeOpened = false;

  const modal = document.getElementById("letterModal");
  const envelopeWrap = document.getElementById("envelopeWrap");
  const letterPaper = document.getElementById("letterPaper");
  const envelope = document.getElementById("envelope");
  const flap = document.getElementById("envelopeFlap");

  // Resetear estado
  envelope.classList.remove("opened");
  flap.style.transform = "";
  letterPaper.classList.add("hidden");
  envelopeWrap.style.display = "flex";

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function openEnvelope() {
  if (envelopeOpened) return;
  envelopeOpened = true;

  const envelope = document.getElementById("envelope");
  envelope.classList.add("opened");
  envelope.style.animation = "none";

  // Animación del sobre abriéndose
  setTimeout(() => {
    const envelopeWrap = document.getElementById("envelopeWrap");
    const letterPaper = document.getElementById("letterPaper");

    envelopeWrap.style.transition = "opacity 0.5s, transform 0.5s";
    envelopeWrap.style.opacity = "0";
    envelopeWrap.style.transform = "scale(0.8) translateY(-20px)";

    setTimeout(() => {
      envelopeWrap.style.display = "none";

      // Rellenar contenido de la carta
      const letter = letters[currentLetter];
      const today = new Date();
      const dateStr = today.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });

      document.getElementById("letterDate").textContent = dateStr;
      document.getElementById("letterGreeting").textContent = letter.greeting;
      document.getElementById("letterText").textContent = "";
      document.getElementById("letterSignature").textContent = "";

      letterPaper.classList.remove("hidden");

      // Efecto de escritura en el texto
      typewriterEffect("letterText", letter.text, 18, () => {
        typewriterEffect("letterSignature", letter.signature, 40);
      });

    }, 500);
  }, 700);
}

// Efecto de máquina de escribir
function typewriterEffect(elementId, text, speed, callback) {
  const el = document.getElementById(elementId);
  el.classList.add("typing-cursor");
  let i = 0;

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      el.classList.remove("typing-cursor");
      if (callback) callback();
    }
  }, speed);
}

function closeLetter() {
  document.getElementById("letterModal").classList.add("hidden");
  document.body.style.overflow = "";
  currentLetter = null;
}

// ================================================
// 📸 SISTEMA DE RECUERDOS (POLAROID)
// ================================================
function openMemory(index) {
  const mem = memories[index];
  if (!mem) return;

  document.getElementById("memoryTitle").textContent = mem.title;
  document.getElementById("memoryDesc").textContent  = mem.desc;

  const img = document.getElementById("memoryImg");
  const placeholder = document.getElementById("memoryPlaceholder");
  img.src = mem.img;
  img.style.display = "block";
  placeholder.style.display = "none";

  document.getElementById("memoryModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeMemory() {
  document.getElementById("memoryModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// ================================================
// 🖼️ GALERÍA / LIGHTBOX
// ================================================
let currentGalleryIndex = 0;

function openGallery(index) {
  currentGalleryIndex = index;
  const src = galleryImages[index] || "";
  document.getElementById("lightboxImg").src = src;
  document.getElementById("galleryLightbox").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  document.getElementById("galleryLightbox").classList.add("hidden");
  document.body.style.overflow = "";
}

function galleryPrev() {
  currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById("lightboxImg").src = galleryImages[currentGalleryIndex];
}

function galleryNext() {
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
  document.getElementById("lightboxImg").src = galleryImages[currentGalleryIndex];
}

// ================================================
// 🎉 CONFETTI — PANTALLA COMPLETA
// ================================================
const confettiColors = [
  "#C4B5FD", "#F472B6", "#A78BFA", "#FB7185",
  "#E879F9", "#F0ABFC", "#818CF8", "#FCA5A5",
  "#ffffff", "#FDE68A", "#6EE7B7"
];

function launchConfetti() {
  const container = document.getElementById("confettiContainer");
  container.innerHTML = "";

  const total = 180;

  for (let i = 0; i < total; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    const size   = Math.random() * 12 + 6;
    const isCircle = Math.random() > 0.6;
    const isRect   = !isCircle && Math.random() > 0.5;
    const shape  = isCircle ? "50%" : isRect ? "2px" : "0%";
    const color  = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    const left   = Math.random() * 100;           // posición horizontal aleatoria
    const delay  = Math.random() * 1.8;           // retraso escalonado
    const dur    = Math.random() * 2.5 + 2.5;    // duración entre 2.5s y 5s
    const rotate = Math.random() * 720 - 360;     // rotación aleatoria
    const drift  = (Math.random() - 0.5) * 300;  // deriva horizontal durante la caída

    piece.style.cssText = `
      left: ${left}%;
      top: -20px;
      width: ${size}px;
      height: ${size * (isRect ? 0.4 : 1)}px;
      background: ${color};
      border-radius: ${shape};
      animation: confettiFall ${dur}s ${delay}s linear forwards;
      --drift: ${drift}px;
      --rotate: ${rotate}deg;
    `;
    container.appendChild(piece);
  }

  // Segunda oleada para efecto más denso
  setTimeout(() => {
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      const size  = Math.random() * 10 + 5;
      const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      const drift = (Math.random() - 0.5) * 250;
      piece.style.cssText = `
        left: ${Math.random() * 100}%;
        top: -20px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
        animation: confettiFall ${Math.random() * 2 + 2}s ${Math.random() * 0.8}s linear forwards;
        --drift: ${drift}px;
        --rotate: ${(Math.random() * 720 - 360)}deg;
      `;
      container.appendChild(piece);
    }
  }, 600);

  // Limpiar después de 8 segundos
  setTimeout(() => { container.innerHTML = ""; }, 8000);
}

// ================================================
// 👁️ ANIMACIONES AL HACER SCROLL
// ================================================
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.15 });

  // Aplicar a elementos de timeline y tarjetas de recuerdos
  document.querySelectorAll(".timeline-item, .memory-icon-card, .letter-card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ================================================
// ⌨️ CERRAR MODALES CON ESC
// ================================================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLetter();
    closeMemory();
    closeGallery();
  }
});
