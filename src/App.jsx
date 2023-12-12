import { Routes, Route } from "react-router-dom";
import { Home, City, ErrorPage } from "./pages";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import "./assets/main.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <section className="main-section">
        <Header />
        <main className="main-content h-page">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="city/:cityName" element={<City />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </main>
      </section>
    </div>
  );
}
