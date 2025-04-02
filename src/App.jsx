import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Diets from "./pages/diets/Diets";
import Imcs from "./pages/imcs/Imcs";
import Workouts from "./pages/workouts/Workouts";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Questionnaire from "./pages/questionnaire/Questionnaire";
import RSSPage from "./pages/rss/RSSPage";

function Layout() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/" || location.pathname === "/home"; 

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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/rss" element={<RSSPage />} />
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
