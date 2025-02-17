import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Create from './Create';
import Update from './Update';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<Create />} />
    <Route path="/update/:id" element={<Update />} />
  </Routes>
  </BrowserRouter>
  );
}
export default App;