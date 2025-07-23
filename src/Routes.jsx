import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import HomepagePremiumDeveloperLearningPlatform from "pages/homepage-premium-developer-learning-platform";
import TechnologyDeepDivePages from "pages/technology-deep-dive-pages";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard/Dashboard";
import MERNRoadmap from "pages/MERN/MERNRoadmap";
import Header from "components/ui/Header";
import AdminDashboard from "pages/Admin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
import SignInPage from "pages/Admin/SignInPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<HomepagePremiumDeveloperLearningPlatform />} />
          <Route path="/homepage-premium-developer-learning-platform" element={<HomepagePremiumDeveloperLearningPlatform />} />
          <Route path="/technology-deep-dive-pages" element={<TechnologyDeepDivePages />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mern" element={<><Header /><MERNRoadmap /></>} />

          {/* 🔒 Admin Routes */}
          <Route path="/admin-signin" element={<SignInPage />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
