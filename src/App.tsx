import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MotionEnhancer from "./components/MotionEnhancer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Route-based code splitting
const Home = lazy(() => import("./pages/Home"));
const ContentPage = lazy(() => import("./pages/ContentPage"));
const SearchRoute = lazy(() => import("./pages/SearchRoute"));
const PolicyIndexPage = lazy(() => import("./pages/PolicyIndexPage"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <>
      <MotionEnhancer />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchRoute />} />
          <Route path="/policies" element={<PolicyIndexPage />} />
          <Route path="/policies/:policy" element={<PolicyPage />} />
          <Route path="/:slug" element={<ContentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <WhatsAppFloat />
    </>
  );
}
