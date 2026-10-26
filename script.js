// ====== CONFIGURA AQUÍ ======
// Número de WhatsApp con código de país, sin + ni espacios (ej. Colombia: 573001234567)
const WHATSAPP_NUMBER = "573000000000";
// ============================

const waUrl = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

document.querySelectorAll(".wa-link").forEach((a) => {
  a.href = waUrl("Hola ZENVA, quiero información sobre su colección.");
  a.target = "_blank";
  a.rel = "noopener";
});

document.querySelectorAll(".buy").forEach((a) => {
  a.href = waUrl(`Hola ZENVA, quiero pedir: ${a.dataset.product}. Mi talla es: `);
  a.target = "_blank";
  a.rel = "noopener";
});

// Filtros de la colección
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");
chips.forEach((chip) =>
  chip.addEventListener("click", () => {
    chips.forEach((c) => {
      const on = c === chip;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", String(on));
    });
    const f = chip.dataset.filter;
    cards.forEach((card) => {
      card.hidden = f !== "todo" && card.dataset.cat !== f;
    });
  })
);

document.getElementById("year").textContent = new Date().getFullYear();
