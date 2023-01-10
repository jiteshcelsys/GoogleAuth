import React, { useEffect, useState } from 'react'
import CommentComp from './CommentComp';
import ReactHtmlParse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { useCallback } from 'react';

function TitleComponent({ title }) {
  const dispatch = useDispatch();
  let messageArray = useSelector((state) => { return state.messageArray });
  const [comment, setcomment] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    const user = title.user
    dispatch({ type: 'commentArray', payload: { user, comment } });
    setcomment('');
  }
  //  function LikeButton(user, count) {
  //   dispatch({ type: 'Like', payload: { user, count } });
  //   console.log(user)
  // console.log(messageArray);
  //   console.log(title.count);
  //   return title.count
  // }
  
  
  const LikeButton =(user, count)=>{
    dispatch({ type: 'Like', payload: { user, count } });
    console.log(user)
  console.log(messageArray);
    console.log(title.count);
    return title.count
  }
  console.log('child'+title.count);

  return (
    <>
      {ReactHtmlParse(`<h3 className="boxGap" >${title.user}
      </h3>`)}
      <button onClick={() =>  LikeButton(title.user, title.count++) 
       }>Like</button> {title.count}
      <form onSubmit={(e) => { submitForm(e) }} >
        <input type='text' onChange={(e) => { setcomment(e.target.value) }} value={comment} />
        <button className='CommentBtn'>Comment</button>
      </form>
      {title.comment.map((value, index) => {
        return (
          <>
            <CommentComp Comment={value} />
          </>
        )
      })}
    </>
  )
}

export default TitleComponent
