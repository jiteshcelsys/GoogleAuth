import React, { useState } from 'react'
import CommentComp from './CommentComp';
import ReactHtmlParse from 'html-react-parser';
import { useDispatch } from 'react-redux';

function TitleComponent({title}) {
  // console.log(title);
  const dispatch = useDispatch();



  const [comment, setcomment] = useState('');
  const submitForm = (e) =>{
    e.preventDefault();
    if(comment){
      const user = title.user
      dispatch({type:'commentArray',payload:{user,comment}});
    // console.log('comment is clicked');
    setcomment('');
    }
  }
  return (
    <>
 {ReactHtmlParse(`<h3 className="boxGap" >${title.user}
      </h3>`)}
    <form onSubmit={(e)=>{submitForm(e)}} >
    <input type='text' onChange={(e)=>{setcomment(e.target.value)}} value={comment} />
   <button >Comment</button>
   
    {title.comment.map((value,index)=>{
      return(
        <>
        <CommentComp Comment={value}/>
        </>
      )
    })}
     </form>
    </>
  )
}

export default TitleComponent
