import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Doubts from "./components/Doubts/Doubts"
import Login from "./pages/Login/Login"
//import CreateAccount from './components/CreateAccount';
//<Route path="/create-account" element={<CreateAccount />} />
import Home from "./pages/Home/Home"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} /> {/* Página inicial */}
        <Route path="/doubts" element={<Doubts />} /> {/* Página inicial */}
        <Route path="/register" element={<Register />} /> {/* Outra página */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
