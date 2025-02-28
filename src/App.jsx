import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Diets from "./pages/diets/Diets";
import Imcs from "./pages/imcs/Imcs";
import Workouts from "./pages/workouts/Workouts";
import Header from "./components/header/Header";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/diets" element={<Diets />} />
        <Route path="/imcs" element={<Imcs />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
