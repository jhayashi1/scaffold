import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';
import {defineConfig} from 'vite';

const root = resolve(__dirname, 'src');
const fromRoot = (path: string): string => resolve(root, path);

export default defineConfig({
    build: {
        emptyOutDir  : true,
        minify       : 'esbuild',
        outDir       : fromRoot('../dist'),
        rollupOptions: {
            input: {
                main: fromRoot('../index.html'),
            },
        },
        sourcemap: true,
        target   : 'esnext',
    },
    plugins: [
        react(),
    ],
    server: {
        port: 8080,
    },
});
