import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './ui/AppLayout';
import { MediaQueryProvider } from './context/MediaQueryContext';

function App() {
  return (
    <MediaQueryProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MediaQueryProvider>
  );
}

export default App;
