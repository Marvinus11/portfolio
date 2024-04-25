import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://Marvinus11.github.io',
    base: '/',
    server: {
        port: 3000,
        host: true
    },
    integrations: [icon()]

});
