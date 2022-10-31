import './css/app.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Adventure from "./pages/Adventure"
import Comments from "./pages/Comments"
import Media from "./pages/Media"

function App() {
  const [parks, setParks] = useState([])
 useEffect(()=>{
    fetch("https://developer.nps.gov/api/v1/parks?start=50parkCode=&api_key=uVXhhbPTnYO2bCwaqefTPynK7GIh8krjLQfeBbIQ")
    .then((r)=>r.json())
    .then((data)=>setParks(data.data))
  }, [] );

return (
  <div className="App">
 <BrowserRouter>
 <NavBar></NavBar>
 <Routes>
 <Route path="/home" element={<Home></Home>}/>
 <Route path="/about" element={<About></About>}/>
 <Route path="/adventure" element={<Adventure parks={parks}></Adventure>}/>
 <Route path="/comments" element={<Comments></Comments>}/>
 <Route path="/media" element={<Media></Media>}/>
 </Routes>
 </BrowserRouter>
 <div className="homeImages">
 </div> 
 </div>
  );
}


export default App;
