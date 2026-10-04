// vite.config.ts
import { defineConfig } from "file:///C:/Users/madha/Downloads/gaurav-portfolio-3d-main/gaurav-portfolio-3d-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/madha/Downloads/gaurav-portfolio-3d-main/gaurav-portfolio-3d-main/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "three": ["three", "three-stdlib"],
          "react-three": ["@react-three/fiber", "@react-three/drei"],
          "gsap": ["gsap"],
          "vendor": ["react", "react-dom", "react-router-dom"]
        }
      }
    },
    chunkSizeWarningLimit: 1e3,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ["three", "gsap", "lenis"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYWRoYVxcXFxEb3dubG9hZHNcXFxcZ2F1cmF2LXBvcnRmb2xpby0zZC1tYWluXFxcXGdhdXJhdi1wb3J0Zm9saW8tM2QtbWFpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWFkaGFcXFxcRG93bmxvYWRzXFxcXGdhdXJhdi1wb3J0Zm9saW8tM2QtbWFpblxcXFxnYXVyYXYtcG9ydGZvbGlvLTNkLW1haW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL21hZGhhL0Rvd25sb2Fkcy9nYXVyYXYtcG9ydGZvbGlvLTNkLW1haW4vZ2F1cmF2LXBvcnRmb2xpby0zZC1tYWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgJ3RocmVlJzogWyd0aHJlZScsICd0aHJlZS1zdGRsaWInXSxcbiAgICAgICAgICAncmVhY3QtdGhyZWUnOiBbJ0ByZWFjdC10aHJlZS9maWJlcicsICdAcmVhY3QtdGhyZWUvZHJlaSddLFxuICAgICAgICAgICdnc2FwJzogWydnc2FwJ10sXG4gICAgICAgICAgJ3ZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsndGhyZWUnLCAnZ3NhcCcsICdsZW5pcyddXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0WixTQUFTLG9CQUFvQjtBQUN6YixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFNBQVMsQ0FBQyxTQUFTLGNBQWM7QUFBQSxVQUNqQyxlQUFlLENBQUMsc0JBQXNCLG1CQUFtQjtBQUFBLFVBQ3pELFFBQVEsQ0FBQyxNQUFNO0FBQUEsVUFDZixVQUFVLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLFFBQ3JEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLHVCQUF1QjtBQUFBLElBQ3ZCLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxRQUFRLE9BQU87QUFBQSxFQUNwQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
