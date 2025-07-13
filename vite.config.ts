import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // if using React

export default defineConfig({
  plugins: [react()],
  base: '/Raj_Real_Estate/', // must match GitHub repo name
});
