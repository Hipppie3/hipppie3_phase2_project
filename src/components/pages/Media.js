import React from 'react'
import friend1 from "../Images/1.jpeg"
import friend2 from "../Images/2.jpeg"
import friend3 from "../Images/3.jpeg"
import friend4 from "../Images/4.jpeg"
import friend5 from "../Images/5.jpeg"

const Media = () => {
  return (
      <div className="mediaPage">
      <div id="video">
      <iframe width="450" height="300" 
      src="https://www.youtube.com/embed/Ij5hSqWWg6Y?start=0&end=185" title="The Beginning" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe id="video2" width="450" height="300" 
      src="https://www.youtube.com/embed/DVCmUX2Ozc0" title="You've got a friend" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="450" height="300" 
      src="https://www.youtube.com/embed/5hN5C9EOkKw" title="Pink " allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="imageBox">
        <img className="friends3" src={friend3}/>
        <img className="friends2" src={friend2}/>
        <img className="friends5" src={friend5}/>
        <img className="friends1" src={friend1}/>
        <img className="friends4" src={friend4}/>
      </div>
     </div>
  )
}

export default Media
