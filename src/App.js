import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
  <Navbar/>

      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products/:id" element={<Products/>}/>
       <Route path="/product/:id" element={<Product/>}/>
       
        
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
