import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PortfolioMain from "./components/PortfolioMain";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  useEffect(() => {
    // Ensure theme is set on initial load even if PortfolioMain isn't mounted
    const theme = localStorage.getItem("portfolio-theme") || "slate-cyber";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<PortfolioMain />} />
          <Route
            path="/project/university-management-system"
            element={<ProjectDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
