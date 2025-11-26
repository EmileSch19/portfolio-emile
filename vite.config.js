import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  base: "/portfolio-emile/", // <-- ton nom de repo GitHub
  plugins: [react()],
});
