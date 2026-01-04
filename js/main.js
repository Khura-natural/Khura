// Helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ====== CONFIG ======
const WA_NUMBER = "51944891339";

function waUrl(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

const baseMsg = "Hola, quiero cotizar un evento con Adornia Eventos. ¿Me ayudan, por favor?";

// ====== WhatsApp CTAs ======
[
  ["waTop", baseMsg],
  ["waHero", baseMsg],
  ["waDrawer", baseMsg],
  ["waFinal", baseMsg],
].forEach(([id, msg]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = waUrl(msg);
  el.target = "_blank";
});

// ====== Mobile drawer ======
const drawer = $("#drawer");
const ham = $("#hamburger");
const drawerClose = $("#drawerClose");

if (ham && drawer) ham.addEventListener("click", () => (drawer.style.display = "flex"));
if (drawerClose && drawer) drawerClose.addEventListener("click", () => (drawer.style.display = "none"));
if (drawer) drawer.addEventListener("click", (e) => { if (e.target === drawer) drawer.style.display = "none"; });
$$(".drawerLink").forEach((a) => a.addEventListener("click", () => (drawer.style.display = "none")));

// ====== Gallery lightbox ======
const lightbox = $("#lightbox");
if (lightbox) {
  const lightImg = lightbox.querySelector("img");
  $$("#galeria .gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      lightImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightImg.src = "";
  });
}


function wa(msg) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// CTAs principales
[
  ["waTop", baseMsg],
  ["waHero", baseMsg],
  ["waDrawer", baseMsg],
  ["waFinal", baseMsg],
].forEach(([id, msg]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = wa(msg);
  el.target = "_blank";
});


["waDecoraciones", "waDecoracionesFinal"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.href = wa("Hola, quiero cotizar una decoración para mi evento con Adornia Eventos.");
    el.target = "_blank";
  }
});



["waCatering", "waCateringFinal"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.href = wa("Hola, quiero cotizar el servicio de catering para mi evento con Adornia Eventos.");
    el.target = "_blank";
  }
});
["waCorp", "waCorpFinal"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.href = wa("Hola, quiero cotizar un evento corporativo con Adornia Eventos.");
    el.target = "_blank";
  }
});

