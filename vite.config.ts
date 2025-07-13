import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // if you're using React

export default defineConfig({
  base: '/Raj_Real_Estate/', // exact match to your repo name (case + underscore)
  plugins: [react()],
});
