import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Diets from "./pages/diets/Diets";
import Imcs from "./pages/imcs/Imcs";
import Workouts from "./pages/workouts/Workouts";
import UsuariosList from "./components/UsuariosList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function Layout() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/" || location.pathname === "/home"; // Si es Home, ocultar

  return (
    <>
      {!hideHeaderFooter && <Header />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/diets" element={<Diets />} />
        <Route path="/imcs" element={<Imcs />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/usuarios" element={<UsuariosList />} />
      </Routes>
      {!hideHeaderFooter && <Footer />} 
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
