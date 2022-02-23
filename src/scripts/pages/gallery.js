// const galleryItem = document.querySelectorAll('.gallery__item');
const lightbox = document.querySelector('.lightbox');
const closeLightboxButton = document.querySelector('.lightbox__close-button');
const medias = document.querySelectorAll('.gallery__item img');
const lightboxCurrentImg = document.querySelector('.lightbox__current-img');
const previousButton = document.querySelector('.lightbox__previous-image');
const nextButton = document.querySelector('.lightbox__next-image');
let currentIndex;

const openLightbox = () => {
    lightbox.style.display = 'block';
};
const closeLightbox = () => {
    lightbox.style.display = 'none';
};

// Open and close lightbox
const enableLightbox = () => {
    // Open lightbox
    medias.forEach((element, index) => {
        element.addEventListener('click', () => {
            let mediaSrc = element.src;
            lightboxCurrentImg.setAttribute('src', mediaSrc);
            currentIndex = index;
            openLightbox();
        });
    });
    // Close lightbox
    closeLightboxButton.addEventListener('click', () => {
        closeLightbox();
    });
};

// Set src to current media
const setMediaSrc = () => {
    const currentMedia = document.querySelector('.lightbox__current-img');
    currentMedia.src = medias[currentIndex].src;
};

// Next and previous media inside lightbox
const lightboxControls = () => {
    const previousMedia = () => {
        // If at the beginning of the array, go to the end of the array
        if (currentIndex === 0) {
            currentIndex = medias.length - 1;
            setMediaSrc();
        } else {
            currentIndex--;
            setMediaSrc();
        }
    };

    const nextMedia = () => {
        // If at the end of the array, go to the beginning of the array
        if (currentIndex === medias.length - 1) {
            currentIndex = 0;
            setMediaSrc();
        } else {
            currentIndex++;
            setMediaSrc();
        }
    };

    // Mouse controls
    previousButton.addEventListener('click', previousMedia);
    nextButton.addEventListener('click', nextMedia);
};

export const initGallery = () => {
    enableLightbox();
    lightboxControls();
};
