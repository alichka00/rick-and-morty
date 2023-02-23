import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [tsconfigPaths(), react(), svgr({ exportAsDefault: true })],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
