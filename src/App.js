import React from "react"
import Footer from './components/Footer';
import Home from './components/Home';
import Products from "./components/Products"
import Product from "./components/Product"
import Navbar from './components/Navbar';
import About from './components/About';
import Login from "./components/Login"
import { Routes, Route } from 'react-router-dom'

function App() {
  
  
  
  return (

        <div className="container-fluid">
      
          <Navbar/>
      
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Products" index element={<Products/>} />
              <Route path="/product/:id" element={<Product/>} />
              <Route path="/login" element={<Login/>} />
          </Routes>
          <Footer/>   
            
          </div>
    
  );
}

export default App;
