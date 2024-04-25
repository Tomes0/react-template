import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import postcssInitial from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssSorting from 'postcss-sorting';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react()
  ],
  css:{
    postcss: {
      plugins: [
          tailwindcss('./tailwind.config.cjs'),
          postcssImport(),
          postcssInitial(),
          postcssNested(),
          postcssSorting(),
          postcssPresetEnv(),
      ]
    }
  },
})
