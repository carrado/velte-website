import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4001, // Change to your desired port
    host: true, // Optional: Allows access from network devices
    open: true, // Optional: Automatically opens browser
  },
});
