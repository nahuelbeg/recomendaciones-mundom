"use strict";

const experiences = {
  "encuentro-con-delfines": {
    title: "Encuentro con delfines",
    category: "NATURALEZA",
    tag: "Para toda la familia",
    rating: "4.9",
    description: [
      "Una experiencia emocionante para conocer de cerca a los delfines y descubrir más sobre su comportamiento. Un momento especial para compartir en familia y aprender sobre la vida marina.",
      "La propuesta y los horarios pueden variar según la fecha. Consultá la información actualizada antes de organizar tu visita."
    ],
    tip: "Revisá los horarios y las condiciones de la actividad antes de viajar. Llevá ropa cómoda y seguí siempre las indicaciones del equipo a cargo.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=1200&q=85",
        alt: "Delfín asomando entre las olas"
      },
      {
        src: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=900&q=85",
        alt: "Delfines nadando en el agua"
      },
      {
        src: "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=900&q=85",
        alt: "Delfín en una experiencia de observación marina"
      }
    ]
  },
  "safari-terrestre": {
    title: "Safari terrestre",
    category: "AVENTURA",
    tag: "A campo abierto",
    rating: "4.8",
    description: [
      "Una experiencia única en el santuario de conservación más fascinante del país. Un recorrido para avistar la mayor diversidad de especies en su hábitat natural. 25 hectáreas de paisajes extraordinarios que te sorprenderán a cada paso."
    ],
    tip: "Consultá la disponibilidad y la duración del recorrido para planificar el resto del día. No alimentes a los animales y respetá las indicaciones del personal.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
        alt: "Jirafa y otros animales en un entorno natural"
      },
      {
        src: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=85",
        alt: "Elefante en un entorno natural"
      },
      {
        src: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=85",
        alt: "León descansando en la naturaleza"
      }
    ]
  },
  "mundo-submarino": {
    title: "Un mundo submarino",
    category: "CULTURA",
    tag: "Plan bajo techo",
    rating: "4.7",
    description: [
      "Una pausa fascinante para mirar el océano desde otra perspectiva y aprender en familia. Descubrí la diversidad de la vida marina y acercate a sus ambientes y habitantes.",
      "Las actividades y exhibiciones disponibles pueden variar según la fecha. Consultá la información actualizada al organizar tu visita."
    ],
    tip: "Es una buena alternativa para sumar al recorrido en familia. Consultá los horarios de apertura y las actividades disponibles para el día de tu visita.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=85",
        alt: "Vida marina bajo aguas azules"
      },
      {
        src: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=900&q=85",
        alt: "Arrecife de coral y peces tropicales"
      },
      {
        src: "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=900&q=85",
        alt: "Tortuga marina nadando bajo el agua"
      }
    ]
  },
  "sabores-de-la-costa": {
    title: "Sabores de la costa",
    category: "GASTRONOMÍA",
    tag: "Sabores locales",
    rating: "4.8",
    description: [
      "Una mesa en familia, cocina local y esos pequeños placeres que completan un día de playa. Explorá los sabores de la costa y hacé una pausa para disfrutar sin apuro.",
      "La oferta gastronómica, los menús y los horarios dependen de cada establecimiento y pueden cambiar. Confirmá los detalles antes de ir."
    ],
    tip: "Consultá directamente los horarios, el menú y las opciones disponibles. En temporada alta, puede ser útil averiguar si hace falta reservar.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
        alt: "Mesa servida con platos frescos para compartir"
      },
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
        alt: "Interior de un restaurante preparado para recibir visitantes"
      },
      {
        src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
        alt: "Plato fresco servido para compartir"
      }
    ]
  }
};

const experienceId = new URLSearchParams(window.location.search).get("id");
const experience = experienceId ? experiences[experienceId] : undefined;
const experienceContent = document.querySelector("#experience-content");
const experienceNotFound = document.querySelector("#experience-not-found");

if (!experience || !experienceContent || !experienceNotFound) {
  if (experienceNotFound) {
    experienceNotFound.hidden = false;
  }
} else {
  document.title = `${experience.title} | Recomendaciones Mundo Marino`;
  experienceContent.hidden = false;

  const category = document.querySelector("#experience-category");
  const title = document.querySelector("#experience-title");
  const tag = document.querySelector("#experience-tag");
  const rating = document.querySelector("#experience-rating");
  const description = document.querySelector("#experience-description");
  const tip = document.querySelector("#experience-tip");
  const gallery = document.querySelector("#experience-gallery");

  if (
    category instanceof HTMLElement &&
    title instanceof HTMLElement &&
    tag instanceof HTMLElement &&
    rating instanceof HTMLElement &&
    description instanceof HTMLElement &&
    tip instanceof HTMLElement &&
    gallery instanceof HTMLElement
  ) {
    category.textContent = experience.category;
    title.textContent = experience.title;
    tag.textContent = experience.tag;
    rating.textContent = `★ ${experience.rating} / 5`;
    tip.textContent = experience.tip;

    experience.description.forEach((paragraphText) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = paragraphText;
      description.append(paragraph);
    });

    experience.photos.forEach((photo, index) => {
      const figure = document.createElement("figure");
      figure.className = `experience-gallery-photo${index === 0 ? " experience-gallery-featured" : ""}`;
      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = photo.alt;
      image.loading = index === 0 ? "eager" : "lazy";
      figure.append(image);
      gallery.append(figure);
    });

    const reviewForm = document.querySelector("#review-form");
    const reviewList = document.querySelector("#review-list");
    const reviewCount = document.querySelector("#reviews-count");
    const reviewMessage = document.querySelector("#review-form-message");
    const storageKey = `experience-reviews:${experienceId}`;
    let reviews = [];

    if (
      reviewForm instanceof HTMLFormElement &&
      reviewList instanceof HTMLElement &&
      reviewCount instanceof HTMLElement &&
      reviewMessage instanceof HTMLElement
    ) {
      try {
        const savedReviews = window.localStorage.getItem(storageKey);
        if (savedReviews) {
          const parsedReviews = JSON.parse(savedReviews);
          if (
            Array.isArray(parsedReviews) &&
            parsedReviews.every((review) =>
              review &&
              typeof review.name === "string" &&
              typeof review.comment === "string" &&
              Number.isInteger(review.rating) &&
              review.rating >= 1 &&
              review.rating <= 5 &&
              typeof review.date === "string"
            )
          ) {
            reviews = parsedReviews;
          } else {
            reviewMessage.textContent = "No se pudieron cargar las opiniones guardadas porque su formato no es válido.";
          }
        }
      } catch (error) {
        reviewMessage.textContent = "No se pudieron cargar las opiniones guardadas en este navegador.";
        console.error("No se pudieron leer las opiniones guardadas.", error);
      }

      const renderReviews = () => {
        reviewList.replaceChildren();
        reviewCount.textContent = reviews.length === 1
          ? "1 opinión"
          : `${reviews.length} opiniones`;

        if (reviews.length === 0) {
          const emptyMessage = document.createElement("p");
          emptyMessage.className = "review-empty";
          emptyMessage.textContent = "Todavía no hay opiniones. ¡Sé la primera persona en compartir su experiencia!";
          reviewList.append(emptyMessage);
          return;
        }

        reviews.forEach((review) => {
          const card = document.createElement("article");
          card.className = "review-card";

          const heading = document.createElement("div");
          heading.className = "review-card-heading";
          const avatar = document.createElement("span");
          avatar.className = "review-avatar";
          avatar.setAttribute("aria-hidden", "true");
          avatar.textContent = review.name.trim().charAt(0).toLocaleUpperCase("es-AR") || "?";

          const identity = document.createElement("div");
          const name = document.createElement("h3");
          name.textContent = review.name;
          const date = document.createElement("time");
          date.dateTime = review.date;
          date.textContent = new Intl.DateTimeFormat("es-AR", {
            dateStyle: "medium"
          }).format(new Date(review.date));
          identity.append(name, date);
          heading.append(avatar, identity);

          const stars = document.createElement("p");
          stars.className = "review-stars";
          stars.setAttribute("aria-label", `${review.rating} de 5 estrellas`);
          stars.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;

          const comment = document.createElement("p");
          comment.className = "review-comment";
          comment.textContent = review.comment;
          card.append(heading, stars, comment);
          reviewList.append(card);
        });
      };

      renderReviews();

      reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();
        reviewMessage.textContent = "";

        const formData = new FormData(reviewForm);
        const name = String(formData.get("name") ?? "").trim();
        const comment = String(formData.get("comment") ?? "").trim();
        const selectedRating = Number(formData.get("rating"));

        if (!name || !comment || !Number.isInteger(selectedRating) || selectedRating < 1 || selectedRating > 5) {
          reviewMessage.textContent = "Completá tu nombre, una puntuación y un comentario para publicar.";
          return;
        }

        const nextReviews = [{
          name,
          comment,
          rating: selectedRating,
          date: new Date().toISOString()
        }, ...reviews];

        try {
          window.localStorage.setItem(storageKey, JSON.stringify(nextReviews));
        } catch (error) {
          reviewMessage.textContent = "No se pudo guardar tu opinión en este navegador.";
          console.error("No se pudo guardar la opinión.", error);
          return;
        }

        reviews = nextReviews;
        renderReviews();
        reviewForm.reset();
        reviewMessage.textContent = "Tu opinión quedó guardada en este navegador.";
      });
    }
  } else {
    throw new Error("Faltan elementos necesarios para mostrar la página de experiencia.");
  }
}
