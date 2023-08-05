import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from './components/Header';
import { Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <>
      {/* <Header /> */}
      <ResponsiveAppBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
