// Medias
const medias = document.querySelectorAll(".gallery__item picture");
let displayedMedias = document.querySelectorAll(".gallery__item picture");
// Filter buttons
const filterButtons = document.querySelectorAll(".filter-button");

// Scroll to top button
const scrollToTopButton = document.querySelector(".scroll-to-top");

const filterMedias = () => {
  const filterMedias = (category) => {
    if (category !== "Tous") {
      let filteredElements = document.querySelectorAll(
        `.gallery__item picture:not(.${category})`
      );
      for (const iterator of filteredElements) {
        iterator.parentNode.parentNode.style.display = "none";
      }
      displayedMedias = document.querySelectorAll(
        `.gallery__item picture.${category}`
      );
      // Display filtered media if previously filtered
      for (const iterator of displayedMedias) {
        iterator.parentNode.parentNode.style.display = "block";
      }
    } else {
      for (const iterator of medias) {
        iterator.parentNode.parentNode.style.display = "block";
      }
      displayedMedias = medias;
    }
  };

  for (const iterator of filterButtons) {
    iterator.addEventListener("click", (e) => {
      switch (e.target.value) {
        case "Peintures noir et blanc":
          filterMedias("black-white");
          filterButtons.forEach((element) => {
            element.classList.remove("filter-active");
          });
          document
            .querySelector(".filter-options__black-white")
            .classList.add("filter-active");
          break;

        case "Peintures couleur":
          filterMedias("colour");
          filterButtons.forEach((element) => {
            element.classList.remove("filter-active");
          });
          document
            .querySelector(".filter-options__colour")
            .classList.add("filter-active");
          break;

        case "Dessins":
          filterMedias("drawing");
          filterButtons.forEach((element) => {
            element.classList.remove("filter-active");
          });
          document
            .querySelector(".filter-options__drawings")
            .classList.add("filter-active");
          break;

        case "Tous":
          filterMedias("Tous");
          filterButtons.forEach((element) => {
            element.classList.remove("filter-active");
          });
          document
            .querySelector(".filter-options__all")
            .classList.add("filter-active");
          break;

        default:
          break;
      }
    });
  }
};

const enableScrollToTop = () => {
  // Display the "scroll to top button" according to scroll position.
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopButton.classList.add("scroll-to-top_active");
    } else {
      scrollToTopButton.classList.remove("scroll-to-top_active");
    }
  });

  // Add "scroll to top" feature to button
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
};

export const initGallery = () => {
  filterMedias();
  enableScrollToTop();
};

initGallery();
