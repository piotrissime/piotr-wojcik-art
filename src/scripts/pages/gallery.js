// TODO : fix currentIndex bug after filtering medias

// Medias
const medias = document.querySelectorAll('.gallery__item img');
let displayedMedias = document.querySelectorAll('.gallery__item img');
// Filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
// Lightbox
const lightbox = document.querySelector('.lightbox');
const closeLightboxButton = document.querySelector('.lightbox__close-button');
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
    displayedMedias.forEach((element, index) => {
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
    currentMedia.src = displayedMedias[currentIndex].src;
};

// Next and previous media inside lightbox
const lightboxControls = () => {
    const previousMedia = () => {
        // If at the beginning of the array, go to the end of the array
        if (currentIndex === 0) {
            currentIndex = displayedMedias.length - 1;
            setMediaSrc();
        } else {
            currentIndex--;
            setMediaSrc();
        }
    };

    const nextMedia = () => {
        // If at the end of the array, go to the beginning of the array
        if (currentIndex === displayedMedias.length - 1) {
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

const filterMedias = () => {
    const filterMedias = (category) => {
        if (category !== 'Tous') {
            let filteredElements = document.querySelectorAll(
                `.gallery__item img:not(.${category})`
            );
            for (const iterator of filteredElements) {
                iterator.parentNode.style.display = 'none';
            }
            displayedMedias = document.querySelectorAll(
                `.gallery__item img.${category}`
            );
            // Display filtered media if previously filtered
            for (const iterator of displayedMedias) {
                iterator.parentNode.style.display = 'block';
            }
            console.log(displayedMedias);
        } else {
            for (const iterator of medias) {
                iterator.parentNode.style.display = 'block';
            }
            displayedMedias = medias;
        }
    };

    for (const iterator of filterButtons) {
        iterator.addEventListener('click', (e) => {
            switch (e.target.value) {
                case 'Peintures noir et blanc':
                    filterMedias('black-white');
                    break;

                case 'Peintures couleur':
                    filterMedias('colour');
                    break;

                case 'Dessins':
                    filterMedias('drawing');
                    break;

                case 'Tous':
                    filterMedias('Tous');
                    break;

                default:
                    break;
            }
        });
    }
};

export const initGallery = () => {
    enableLightbox();
    lightboxControls();
    filterMedias();
};
