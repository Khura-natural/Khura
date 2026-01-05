// ==========================
// Helpers
// ==========================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ==========================
// CONFIGURACIÓN WHATSAPP
// ==========================
const WA_NUMBER = "51944891339";

const waUrl = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

// Mensajes base KHURA
const MSG_GENERAL =
  "Hola, quiero información sobre el aceite corporal anti inflamatorio KHURA.";

const MSG_COMPRA =
  "Hola, quiero comprar el aceite corporal anti inflamatorio KHURA (120 ml).";

const MSG_MAYORISTA =
  "Hola, quiero información para compra mayorista del aceite KHURA.";

// ==========================
// WHATSAPP CTAs
// ==========================
[
  ["waTop", MSG_GENERAL],
  ["waHero", MSG_COMPRA],
  ["waDrawer", MSG_GENERAL],
  ["waFinal", MSG_COMPRA],
].forEach(([id, msg]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = waUrl(msg);
  el.target = "_blank";
});

// CTA específicos (si los usas)
[
  ["waUso", "Hola, ¿cómo se usa correctamente el aceite corporal KHURA?"],
  ["waIngredientes", "Hola, quisiera saber más sobre los ingredientes del aceite KHURA."],
  ["waMayorista", MSG_MAYORISTA],
].forEach(([id, msg]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = waUrl(msg);
  el.target = "_blank";
});

// ==========================
// MOBILE DRAWER
// ==========================
const drawer = $("#drawer");
const hamburger = $("#hamburger");
const drawerClose = $("#drawerClose");

if (hamburger && drawer) {
  hamburger.addEventListener("click", () => {
    drawer.style.display = "flex";
  });
}

if (drawerClose && drawer) {
  drawerClose.addEventListener("click", () => {
    drawer.style.display = "none";
  });
}

// Cerrar drawer al hacer click fuera
if (drawer) {
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) drawer.style.display = "none";
  });
}

// Cerrar drawer al navegar
$$(".drawerLink").forEach((link) =>
  link.addEventListener("click", () => {
    if (drawer) drawer.style.display = "none";
  })
);

// ==========================
// GALERÍA / LIGHTBOX (plantas, producto)
// ==========================
const lightbox = $("#lightbox");

if (lightbox) {
  const img = lightbox.querySelector("img");

  $$("#galeria .gallery img").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      img.src = thumb.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    img.src = "";
  });
}
