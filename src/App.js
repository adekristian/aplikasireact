import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Fungsional/Home';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import Beranda from './Component/Class/Beranda';
import Parent from './Component/Class/CSS/Parent';
import Bootstrap from './Component/Class/Bootstrap';
import { Navbar, NavbarBrand } from 'reactstrap';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const App =() => {
  return (
    <BrowserRouter>
     <NavbarComp/>
   <Switch>
     <Route exact path="/" component ={HomePage} />
     <Route exact path="/about" component ={About} />

   </Switch>
  
    
    
    </BrowserRouter>
     
     
 
  );
}

export default App;
