import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";

const App = () => {
 return (
   <BrowserRouter>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/accordion" element={<Accordion />} />
         <Route path="/randomColor" element={<RandomColor />} />
         <Route path="/starRating" element={<StarRating />} />
       </Routes>
     </main>
   </BrowserRouter>
 );
};

export default App;