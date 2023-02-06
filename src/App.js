
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Submit from './pages/Submit';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="submit" element={<Submit />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
