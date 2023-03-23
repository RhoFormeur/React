import { HashRouter, Route, Routes } from "react-router-dom";

// Import Pages
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ArticlePage from "./pages/ArticlePage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import TerraBioPage from "./pages/TerraBioPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/TerraBio" exact element={<TerraBioPage />} />
        <Route path="/Contact" exact element={<ContactPage />} />
        <Route path="/API F1" exact element={<ArticlePage />} />
        <Route path="/Admin" exact element={<AdminPage />} />
        <Route element={<NotFoundPage/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
