import { useState } from "react";

const Comments =() =>{
  const [Comment, setComment] = useState("");
  const [CommentD, setCommentDisplay] = useState([]);
  const submitComment = () => {
    console.log('Submit is clicked')
    setCommentDisplay([...CommentD, Comment])
    setComment('');
  }
  

  return(
    <>
    <input type='text' placeholder="Enter the comments" onChange={(e)=>{setComment(e.target.value)}} value={Comment}/>
    <button onClick={()=>{submitComment()}}>Submit</button>

    </>
  )
}
export default Comments;