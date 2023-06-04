import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Pages
import Home from "../src/pages/Home"
import ProductDetails from "../src/pages/ProductDetails"
// import components 
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Sidebar from "../src/components/Sidebar"
const App = () => {
  return(
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>}  />
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
    </>
    );
};

export default App;
