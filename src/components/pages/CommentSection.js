import React from 'react'
import UserComments from './UserComments'

const CommentSection = ({comments, onDelete}) => {
     const userComment = comments.map((comment)=>
      <UserComments
      key={comment.id}
      id={comment.id}
      title={comment.title}
      description={comment.description}
      color={comment.color}
      onDelete={onDelete}
      />
 )
  return (
    <div className="commentArea">
    {userComment}
    </div>
  )
}

export default CommentSection
