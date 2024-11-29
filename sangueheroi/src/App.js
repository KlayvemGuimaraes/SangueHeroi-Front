import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Doubts from "./components/Doubts/Doubts";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";

import Quiz from './pages/Quiz/Quiz';
import ResultQuiz from './pages/ResultQuiz/ResultQuiz';
import Comunity from "./pages/Comunity/Community"
import Profile from "./pages/Profile/Profile"
import Dados from "./pages/Profile/DataUser/DataUser"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} /> {/* Página inicial */}
        <Route path="/doubts" element={<Doubts />} />
        <Route path="/register" element={<Register />} />
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
          <Route path="/dados" element={<Dados />} />
      </Routes>
    </Router>
    
  );
}

export default App;
