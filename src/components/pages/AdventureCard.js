import React, {useState} from 'react'

const AdventureCard = ({id, name, image, description}) => {

const [showFront, setShowFront] = useState(true)
function updateCard () {
 setShowFront((showFront)=>!showFront)
}

return(
<div className="card" onClick={updateCard}>
{showFront ? <div className="container">
 <h3 className="card-title"><b>{name}</b></h3>
 <img className="parkImage" src={image}/>
 </div> 
: 
<div className="container">
<p className="description">{description}</p>
</div> }
</div>
)
}

export default AdventureCard
