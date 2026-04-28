// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import Home from "./components/Pages/Home";
// import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import OurWork from "./components/Pages/OurWork";
import Pricing from "./components/Pages/Pricing";
import Contact from "./components/Pages/Contact";
import NotFound from "./components/Pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="services" element={<Services />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;