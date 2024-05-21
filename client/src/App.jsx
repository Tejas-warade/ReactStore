import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import About from "./components/About/About";
import Brand from "./components/Brand/Brand";
import Collections from "./components/Collections/Collections";
import ContactUs from "./components/ContactUs/ContactIUs";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="brand/:id" element={<Brand />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
