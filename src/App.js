
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SubmitPage from './pages/SubmitPage';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="submit" element={<SubmitPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
