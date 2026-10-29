import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CommandPaletteProvider } from './context/CommandPaletteContext';
import { WorkspaceProvider } from './context/WorkspaceContext';
import CommandPalette from './components/CommandPalette';
import SavedBackupModal from './components/SavedBackupModal';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RoadmapsPage from './components/RoadmapsPage';
import ToolsPage from './components/ToolsPage';
import PromptsPage from './components/PromptsPage';
import RoadmapDetail from './components/RoadmapDetail';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function RouteWatcher() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Direct URL deep-link handling: /?roadmap=<id>&step=<stepId> or /roadmaps?roadmap=<id>
    const searchParams = new URLSearchParams(location.search);
    const roadmapParam = searchParams.get('roadmap');
    if (roadmapParam) {
      const stepParam = searchParams.get('step');
      const tabParam = searchParams.get('tab');
      const newQuery = new URLSearchParams();
      if (stepParam) newQuery.set('step', stepParam);
      if (tabParam) newQuery.set('tab', tabParam);
      const queryString = newQuery.toString() ? `?${newQuery.toString()}` : '';
      navigate(`/roadmap/${roadmapParam}${queryString}`, { replace: true });
      return;
    }

    // Dynamic Browser Tab Titles
    const path = location.pathname;
    if (path === '/') {
      document.title = 'useai.sh — Open-Source AI Workflows, Roadmaps & Prompt Engineering';
    } else if (path === '/roadmaps') {
      document.title = 'All AI Roadmaps (38) — useai.sh';
    } else if (path === '/prompts') {
      document.title = '330+ AI Prompt Templates & System Blueprints — useai.sh';
    } else if (path === '/tools') {
      document.title = 'Curated AI Tools Directory — useai.sh';
    }

    // Always reset scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: location.pathname } }));
  }, [location.pathname, location.search, navigate]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <WorkspaceProvider>
          <CommandPaletteProvider>
            <RouteWatcher />
            <div className="min-h-screen flex flex-col bg-app-bg text-app-text selection:bg-brand-accent/20 selection:text-brand-accent">
              <Navbar />
              <CommandPalette />
              <SavedBackupModal />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/roadmaps" element={<RoadmapsPage />} />
                  <Route path="/prompts" element={<PromptsPage />} />
                  <Route path="/tools" element={<ToolsPage />} />
                  <Route path="/roadmap/:id" element={<RoadmapDetail />} />
                  <Route path="/roadmaps/:id" element={<RoadmapDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </CommandPaletteProvider>
        </WorkspaceProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
