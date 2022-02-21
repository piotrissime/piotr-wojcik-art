// IMPORT FUNCTIONS

// Gallery page
import { initGallery } from './pages/gallery';
import { initContact } from './pages/contact';

// CALL FUNCTIONS

const main = async () => {
    switch (window.location.pathname.split('/').pop()) {
        case 'galerie.html':
            await initGallery();
            break;

        case 'contact.html':
            await initContact();
            break;
    }
};

main();
