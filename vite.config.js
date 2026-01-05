import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  base: "/", // <-- ton nom de repo GitHub
  plugins: [react()],
});
