// vite.config.js
import { defineConfig } from "file:///C:/Users/User/OneDrive/Desktop/8nova-website/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/User/OneDrive/Desktop/8nova-website/node_modules/@vitejs/plugin-react/dist/index.js";
import compression from "file:///C:/Users/User/OneDrive/Desktop/8nova-website/node_modules/vite-plugin-compression/dist/index.mjs";
import viteImagemin from "file:///C:/Users/User/OneDrive/Desktop/8nova-website/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig({
  // use relative asset paths so built `dist` can be served from any path
  // without hard-coded `/8nova/` prefix that causes 404s
  base: "./",
  plugins: [
    react(),
    // optimize images during build to reduce bundle sizes
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.65, 0.8] },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { removeEmptyAttrs: false }
        ]
      }
    }),
    // generate brotli and gzip compressed assets for static hosts that can serve them
    compression({ algorithm: "brotliCompress", ext: ".br" }),
    compression({ algorithm: "gzip", ext: ".gz" })
  ],
  build: {
    // ensure source maps not generated in production
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcOG5vdmEtd2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXDhub3ZhLXdlYnNpdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VzZXIvT25lRHJpdmUvRGVza3RvcC84bm92YS13ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbidcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2VtaW4nXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyB1c2UgcmVsYXRpdmUgYXNzZXQgcGF0aHMgc28gYnVpbHQgYGRpc3RgIGNhbiBiZSBzZXJ2ZWQgZnJvbSBhbnkgcGF0aFxuICAvLyB3aXRob3V0IGhhcmQtY29kZWQgYC84bm92YS9gIHByZWZpeCB0aGF0IGNhdXNlcyA0MDRzXG4gIGJhc2U6ICcuLycsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIC8vIG9wdGltaXplIGltYWdlcyBkdXJpbmcgYnVpbGQgdG8gcmVkdWNlIGJ1bmRsZSBzaXplc1xuICAgIHZpdGVJbWFnZW1pbih7XG4gICAgICBnaWZzaWNsZTogeyBvcHRpbWl6YXRpb25MZXZlbDogNyB9LFxuICAgICAgb3B0aXBuZzogeyBvcHRpbWl6YXRpb25MZXZlbDogNyB9LFxuICAgICAgbW96anBlZzogeyBxdWFsaXR5OiA3NSB9LFxuICAgICAgcG5ncXVhbnQ6IHsgcXVhbGl0eTogWzAuNjUsIDAuOF0gfSxcbiAgICAgIHN2Z286IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIHsgcmVtb3ZlVmlld0JveDogZmFsc2UgfSxcbiAgICAgICAgICB7IHJlbW92ZUVtcHR5QXR0cnM6IGZhbHNlIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pLFxuICAgIC8vIGdlbmVyYXRlIGJyb3RsaSBhbmQgZ3ppcCBjb21wcmVzc2VkIGFzc2V0cyBmb3Igc3RhdGljIGhvc3RzIHRoYXQgY2FuIHNlcnZlIHRoZW1cbiAgICBjb21wcmVzc2lvbih7IGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJywgZXh0OiAnLmJyJyB9KSxcbiAgICBjb21wcmVzc2lvbih7IGFsZ29yaXRobTogJ2d6aXAnLCBleHQ6ICcuZ3onIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgLy8gZW5zdXJlIHNvdXJjZSBtYXBzIG5vdCBnZW5lcmF0ZWQgaW4gcHJvZHVjdGlvblxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQWtVLFNBQVMsb0JBQW9CO0FBQy9WLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBO0FBQUEsRUFHMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFFTixhQUFhO0FBQUEsTUFDWCxVQUFVLEVBQUUsbUJBQW1CLEVBQUU7QUFBQSxNQUNqQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUU7QUFBQSxNQUNoQyxTQUFTLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDdkIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRTtBQUFBLE1BQ2pDLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNQLEVBQUUsZUFBZSxNQUFNO0FBQUEsVUFDdkIsRUFBRSxrQkFBa0IsTUFBTTtBQUFBLFFBQzVCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFFRCxZQUFZLEVBQUUsV0FBVyxrQkFBa0IsS0FBSyxNQUFNLENBQUM7QUFBQSxJQUN2RCxZQUFZLEVBQUUsV0FBVyxRQUFRLEtBQUssTUFBTSxDQUFDO0FBQUEsRUFDL0M7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
