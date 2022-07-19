import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "excelToArray",
      fileName: format => `excel-to-array.${format}.js`,
    },
    outDir: resolve(__dirname, "lib"),
  },
})
