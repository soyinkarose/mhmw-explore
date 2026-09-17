const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll(".card-meta button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "♥" ? "♡" : "♥";
  });
});

const menu = document.querySelector(".mobile-menu");
document.querySelector(".menu-btn").addEventListener("click", () => {
  menu.classList.add("open"); menu.setAttribute("aria-hidden","false");
});
document.querySelector(".close-menu").addEventListener("click", () => {
  menu.classList.remove("open"); menu.setAttribute("aria-hidden","true");
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

document.getElementById("waitlistForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thank you — you're on the MHMW early-access list.";
  e.target.reset();
});
