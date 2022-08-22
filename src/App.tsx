import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductsFrontend from "./pages/ProductsFrontend";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Rankings from "./pages/Rankings";
import ProductsBackend from "./pages/ProductsBackend";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<ProductsFrontend/>}/>
                  <Route path="/backend" element={<ProductsBackend/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/stats" element={<Stats/>}/>
                  <Route path="/rankings" element={<Rankings/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
