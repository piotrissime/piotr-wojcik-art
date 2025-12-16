// Scroll to top button
const scrollToTopButton = document.querySelector(".scroll-to-top");

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
  enableScrollToTop();
};

initGallery();
