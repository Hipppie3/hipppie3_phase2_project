import React, { useEffect, useState } from 'react'

const UserComments = ({id, title, description, color, onDelete, comment}) => {
  const [commentStyle, setCommentStyle] = useState("")
  useEffect(() => {
    setCommentStyle(`color: ${color}`)
  }, [])
  console.log(color)

  const yea = () => {
  alert("DON'T TRIP CHOCOLATE CHIP, YOUR COMMENT MEANS A LOT TO SOMEONE! BUT... IF YOU MUST DELETE, JUST EAT ;)")}
  
    function handleDelete () {
    fetch(`http://localhost:3000/comments/${id}`, 
    {
      method: "DELETE",
    })
    .then((r)=>r.json())
    .then(()=>onDelete(comment))
  }

  return (
    
    <div className="childComment">
    <h2 className="commentCause" style={{color: `${color}`}} >{title}</h2>
    <p style={{color: `${color}`}} id="main-text" className="commentDescription">"{description}"<br></br><br></br>
    <button style={{backgroundColor: `${color}`}} id="main-texts" onClick={yea}>Delete....</button></p>
    <p onClick={handleDelete} id="eat">EAT</p>
    </div>
  )
}

export default UserComments
