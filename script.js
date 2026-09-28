"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const filterButtons = document.querySelectorAll(".filter-button");
const experienceCards = document.querySelectorAll(".experience-card");
const searchInput = document.querySelector("#experience-search");
const emptyState = document.querySelector("#empty-state");
const newsletterForm = document.querySelector("#newsletter-form");
const newsletterMessage = document.querySelector("#newsletter-message");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      siteNav.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      siteNav.classList.remove("is-open");
      menuToggle.focus();
    }
  });
}

let selectedCategory = "Todas";

function updateExperienceCards() {
  const query = searchInput instanceof HTMLInputElement
    ? searchInput.value.trim().toLocaleLowerCase("es-AR")
    : "";
  let visibleCount = 0;

  experienceCards.forEach((card) => {
    const category = card.dataset.category ?? "";
    const searchableContent = `${card.dataset.search ?? ""} ${card.textContent ?? ""}`
      .toLocaleLowerCase("es-AR");
    const matchesCategory = selectedCategory === "Todas" || category === selectedCategory;
    const matchesQuery = searchableContent.includes(query);
    const isVisible = matchesCategory && matchesQuery;

    card.hidden = !isVisible;
    if (isVisible) {
      visibleCount += 1;
    }
  });

  if (emptyState) {
    emptyState.hidden = visibleCount > 0;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter ?? "Todas";

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    updateExperienceCards();
  });
});

searchInput?.addEventListener("input", updateExperienceCards);

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!(newsletterForm instanceof HTMLFormElement) || !newsletterForm.reportValidity()) {
    return;
  }

  if (newsletterMessage) {
    newsletterMessage.textContent = "¡Gracias! El formulario funciona como demostración; todavía no guarda suscripciones.";
  }
  newsletterForm.reset();
});
