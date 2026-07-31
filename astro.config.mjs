import { defineConfig } from 'astro/config';
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  integrations: [
    playformInline({ // inline CSS for faster load
      compress: true,
      preloadFonts: true,
      inlineFonts: false,
      mergeStylesheets: true,
    }),
    playformCompress({
    // Exclude: [
    // 	"File.png",
    // 	(File: string) =>
    // 		File === "./Target/Favicon/Image/safari-pinned-tab.svg",
    // ],
    CSS: true,
    HTML: {
      "html-minifier-terser": {
        removeAttributeQuotes: true
      }
    },
    Image: true,
    JavaScript: true,
    JSON: true,
    SVG: true
    })
  ]
});
