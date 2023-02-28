import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/index.jsx', 'resources/js/pages/Recipes.jsx'],
            refresh: true,
        }),
        react()
    ],
});

// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';
//
// export default defineConfig({
//     plugins: [
//         laravel({
//             input: [
//                 'resources/js/index.jsx',
//             ],
//             refresh: true,
//         }),
//         react(),
//     ],
// });
