import React, { useState } from 'react'


function About() {
  const [sweater, setSweater] = useState(true)

  function handleSweater () {
    setSweater((sweater)=>!sweater)

  }
  return (
    <div id="abouts">
    
    <h1 id={sweater ? "about" : "notAbout"}onClick={handleSweater}></h1>
      <p id="paragraph">
      Would you like to hop in and join our journey on a road trip of a lifetime? What if we told you that you don’t have to leave your house? Come along as we drive across 49 states in our car. At the same time, we’ll raise money to help with eight great causes. 

      By purchasing any of our T-shirts and sweatshirts, you will get your name printed on the car so we can bring you along on our adventure. 
      <br></br>
      <br></br>
      <br></br>

      A percentage of the proceeds goes to the eight causes listed below:
      <br></br>

      <br></br>
       <span className="addict">
      S</span>upport Families of Addiction
      
      <br></br>
      <span className="hunger">
      S</span>tarve Away Hunger
      
      <br></br>
      <span className="vn">
      V</span>ietnam
      
      <br></br>
     <span className="mi">
      M</span>ental Illness: There’s Nothing to Be Ashamed Of
      
      <br></br>
      <span className="children">
      C </span>hildren Are The Future
     
      <br></br>
      <span className="parents">
      S </span>ingle Parents
     
      <br></br>
      <span className="animals">
      L</span>ove All Animals
      
      <br></br>
      <span className="cancer">
      C</span>ancer: You Can. We Can
      
      </p>
      </div>
  )
}

export default About
