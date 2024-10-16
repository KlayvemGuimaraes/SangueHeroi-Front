import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Doubts from "./components/Doubts/Doubts"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} /> {/* Página inicial */}
        <Route path="/doubts" element={<Doubts />} /> {/* Página inicial */}
        <Route path="/login" element={<Login />} /> {/* Outra página */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
