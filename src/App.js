
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="form" element={<Form />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
