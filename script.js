// ── Fade-up scroll animation ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// ── Hamburger menu ──
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const btn = document.getElementById("hamburger");
  const overlay = document.getElementById("mobileOverlay");
  nav.classList.toggle("open");
  btn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}
function closeMenu() {
  const nav = document.getElementById("navLinks");
  const btn = document.getElementById("hamburger");
  const overlay = document.getElementById("mobileOverlay");
  nav.classList.remove("open");
  btn.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

// ── Booking form ──
function handleBooking() {
  const btn = document.querySelector(".form-submit");
  if (!btn) return;
  btn.textContent = "Enquiry sent! We'll be in touch shortly.";
  btn.style.background = "#2a7a55";
  btn.disabled = true;
}

// ── Gallery filter ──
function filterGallery(category, btn) {
  document
    .querySelectorAll(".gallery-filter")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".gallery-item").forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
