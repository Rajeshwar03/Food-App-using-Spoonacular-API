import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'css-module',
      transform(code, id) {
        if (id.endsWith('.module.css')) {
          // Perform any desired transformations on the CSS code here
          return {
            code,
            map: null, // Provide source maps if available
          };
        }
      },
    },
  ],
});
