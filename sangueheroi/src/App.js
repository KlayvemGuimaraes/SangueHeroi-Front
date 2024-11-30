import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Doubts from "./components/Doubts/Doubts";
import FaqPage from "./pages/FaqPage/FaqPage";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import 'bootstrap/dist/css/bootstrap.min.css';

import Quiz from './pages/Quiz/Quiz';
import ResultQuiz from './pages/ResultQuiz/ResultQuiz';
import Comunity from "./pages/Comunity/Community"
import Profile from "./pages/Profile/Profile"
import Dados from "./pages/Profile/DataUser/DataUser"
import Certified from "./pages/Profile/Certified/Certified"
import Login from "./pages/Login/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} /> {/* Página inicial */}
        <Route path="/doubts" element={<Doubts />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/register" element={<Register />} />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/mapa" element={<Map />} />
        <Route path="/comunidade" element={<Comunity />} />
      </Routes>

      <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resultadoquiz" element={<ResultQuiz />} />
      </Routes>

      <Routes>
          <Route path="/perfil" element={<Profile />} />
          <Route path="perfil/dados" element={<Dados />} />
          <Route path="perfil/certificados" element={<Certified />} />
      </Routes>
    </Router>
    
  );
}

export default App;
