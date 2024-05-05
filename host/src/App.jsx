import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavbarComponent from "mf_navbar/NavbarComponent";
import Loader from "mf_loader/LoaderComponent";

const HomePage = lazy(() => import("./pages/HomePage"));
const CharactersPage = lazy(() => import("./pages/CharactersPage"));
const CharacterDetailPage = lazy(() => import("./pages/CharacterDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => (
  <Router>
    <NavbarComponent />
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/characters"
        element={
          <Suspense fallback={<Loader />}>
            <CharactersPage />
          </Suspense>
        }
      />
      <Route
        path="/characters/:id"
        element={
          <Suspense fallback={<Loader />}>
            <CharacterDetailPage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<Loader />}>
            <AboutPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  </Router>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
