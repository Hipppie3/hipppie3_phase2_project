import React, { useEffect, useState } from 'react'
import Form from './Form';
import CommentSection from './CommentSection'

function Comments() {
  const [comments, setComments] = useState([])
  const [searchCause, setSearchCause] = useState("")
  useEffect(()=>{
    fetch("http://localhost:3000/comments")
    .then((r)=>r.json())
    .then((data)=>setComments(data))
  }, [])

  function handleAddComment(newComments) {
      setComments([...comments, newComments])
  }
  const displayComments = comments.filter(comment=> {
    return comment.title.toLowerCase().includes(searchCause.toLowerCase())
  })

   function handleOnDelete(id){
    const deleteComments = comments.filter((comment)=> comment.id !== id)
    setComments(deleteComments);
  }

return (
    <div className="commentBox">
      <Form searchCause={searchCause} setSearchCause={setSearchCause} onHandleComment={handleAddComment}/>
      <div className="commentSection">
      <CommentSection comments={displayComments} itemsPerRow={4} onDelete={handleOnDelete}/>
      </div>
      </div>
  )
}

export default Comments
