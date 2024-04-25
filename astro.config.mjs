import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000,
        host: true
    },
    integrations: [icon()],
});
