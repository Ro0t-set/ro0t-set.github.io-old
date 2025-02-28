import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import Sitemap from 'vite-plugin-sitemap'

const hostname = "https://tommasopatriti.me"

export default defineConfig({
  base: "./",
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    Sitemap({ 
      hostname,
      dynamicRoutes: [
        "/multilanguage-portfolio-template"
      ],
      externalSitemaps: [
        "https://www.tommasopatriti.me/PPS-24-ScafiWeb3/sitemap.xml"
      ]
    }),
    quasar({
      sassVariables: fileURLToPath(
        new URL('./src/quasar-variables.sass', import.meta.url)
      )
    })
  ],
})
