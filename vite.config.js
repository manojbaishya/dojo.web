import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    server: {
        port: 5173,
        fs: {
            strict: true
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                cssref: resolve(__dirname, 'cssref.html'),
            },
        },
    },
    plugins: [
        {
            name: 'disable-index-fallback',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {

                    const validFiles = ['/', '/index.html', '/cssref.html'];
                    if (!validFiles.includes(req.url) && !req.url.startsWith('/@vite') && !req.url.startsWith('/node_modules') && !req.url.startsWith('/src') && !req.url.startsWith('/img')) {
                        res.statusCode = 404;
                        res.end('Page Does Not Exist');
                    } else {
                        next();
                    }
                });
            }
        }
    ]
});