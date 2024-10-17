import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Doubts from "./components/Doubts/Doubts"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} /> {/* Página inicial */}
        <Route path="/doubts" element={<Doubts />} /> {/* Página inicial */}
        <Route path="/register" element={<Register />} /> {/* Outra página */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
