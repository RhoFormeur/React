import "./assets/css/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

// Import Pages
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ArticlePage from "./pages/ArticlePage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Contact" exact element={<ContactPage />} />
        <Route path="/Article" exact element={<ArticlePage />} />
        <Route path="/Admin" exact element={<AdminPage />} />
        <Route element={<NotFoundPage/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
