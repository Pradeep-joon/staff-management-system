import Header from "./components/Header";
import { useState } from "react";
import Banner from "./components/Banner";
import Registration from "./components/Registration";
import Bflogin from "./components/Bflogin";
import Login from "./components/Login";
import About from "./components/About";




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    

    <>

    
    <Router>
      <Routes>
      <Route exact path="" element={
            <>
               <Header/>
               <Bflogin/>
               
            </>
          }>
          </Route> &&
          <Route exact path="/home" element={
            <>
               <Header/>
               <Bflogin/>
               
            </>
          }>
          </Route> && <Route exact path="/registration" element={
           <>
               <Header/>
               <Registration />
           </>
           }>
           </Route> && <Route exact path="/about" element={
              <>
                  <Header/>
                  <About />
              </>
              }>
              </Route> &&
          <Route exact path="/LLogin" element={
            <>
               <Header/>
               <Login/>
               
            </>
          }>
          </Route> &&
          <Route exact path="/banner" element={
            <>
               <Header/>
               <Banner/>
               
            </>
          }>
          </Route>

          
        </Routes>

      </Router> 

    </>
  );
}

export default App;
