import { HashRouter, Route, Routes } from 'react-router-dom';

// Layouts
import { MainLayout } from './layouts/MainLayouts';
import { AdminLayout } from './layouts/AdminLayouts';

// Pages
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TerraBioPage } from './pages/TerraBioPage';

// Router
export const App = () => (
  <HashRouter>
    <Routes>
      {/* MainLayout - / */}
      <Route path="/" exact element={<MainLayout />}>
        {/* / */}
        <Route index element={<HomePage />} />
        {/* /#/home */}
        <Route path="home" element={<HomePage />} />
        {/* /#/terrabio */}
        <Route path="terrabio" element={<TerraBioPage />} />
        {/* /#/apif1 */}
        <Route path="api f1" exact element={<ArticlePage />} />
        {/* 404 Not Found - * */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* AdminLayout - /admin */}
      <Route path="admin" element={<AdminLayout />}>
        {/* /#/admin */}
        <Route index element={<AdminPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
