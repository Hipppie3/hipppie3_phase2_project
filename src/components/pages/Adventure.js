import React from 'react'
import AdventureCard from './AdventureCard'


function Adventure({parks}) {
  console.log(parks)
  const parkInfo = parks.map((park)=> 
      <AdventureCard
      key={park.id}
      id={park.id}
      name={park.fullName}
      image={park.images[0].url}
      description={park.description}/>
  )
  return (
    <div>
     <h1 className="adventureTitle">WHERE SHOULD WE VISIT ?</h1>
    <div id="adventure">
     {parkInfo}
    </div>
    </div>
  )
}
export default Adventure;
