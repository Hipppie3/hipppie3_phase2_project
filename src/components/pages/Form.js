import React, { useState } from 'react'

function Form ({searchCause, setSearchCause, onHandleComment}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  function randomColor(){
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "DeepPink", "turquoise"]
    let num = Math.floor(Math.random() * colors.length)
    return colors[num]
  }
  function handleSubmit() {
    let color=randomColor()
  
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        color : color
    })
  })
  .then((r)=>r.json())
  .then((newComments)=>onHandleComment(newComments))
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input className="formTitle" placeholder="Cause Title" value={title} 
        onChange={(e)=>setTitle(e.target.value)}>
        </input>
        <textarea className="formComment" placeholder="Fill me up" value={description}
        onChange={(e)=>setDescription(e.target.value)}>
        </textarea>
        <div>
        <button className="button">MOTIVATE</button>
         <input type="text" placeholder="search" className="search" value={searchCause} onChange={(e)=>setSearchCause(e.target.value)}></input>
         </div>
      </form>
    </div>
  )
}

export default Form;
