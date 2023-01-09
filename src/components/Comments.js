import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Comments =() =>{
  const [Comment, setComment] = useState("");
  const [CommentD, setCommentDisplay] = useState([]);
  const commentD= useSelector((state)=>{return(state.commentArray)});
  const dispatch = useDispatch();

  const submitComment = () => {
    console.log('Submit is clicked')
    dispatch({type:'commentArray', payload:Comment});
    setCommentDisplay([...CommentD, Comment])
    setComment('');
  }

  return(
    <>
    <input type='text' placeholder="Enter the comments" onChange={(e)=>{setComment(e.target.value)}} value={Comment}/>
    <button onClick={()=>{submitComment()}}>Submit</button>
    {commentD.map((value,index)=>{
      return(
      <li key={index}>{value}</li>
      )
    })}

    </>
  )
}
export default Comments;