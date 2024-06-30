import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Cakes from "./pages/cakes";
import CakeDetails from "./pages/CakeDetails";
import Designcakes from "./pages/designcakes";
import DesignDetails from "./pages/designDetails";
import Foods from "./pages/foods";
import FoodsDetails from "./pages/FoodDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/cakes/:cakeId" element={<CakeDetails/>} />
          <Route path="/designcakes" element={<Designcakes />} />
          <Route path="/designCakes/:cakeId" element={<DesignDetails/>} />
          <Route path="/foods" element={<Foods/>} />
          <Route path="/foods/:cakeId" element={<FoodsDetails/>} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
