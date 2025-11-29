import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLandingPage from './components/MainLandingPage';
import EngageApp from './pages/engage/EngageApp';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/engage/*" element={<EngageApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
