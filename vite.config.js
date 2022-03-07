const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                galerie: resolve(__dirname, 'pages/galerie.html'),
                contact: resolve(__dirname, 'pages/contact.html'),
            },
        },
    },
});
