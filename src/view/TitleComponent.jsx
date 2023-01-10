import React, { useEffect, useState } from 'react'
import CommentComp from './CommentComp';
import ReactHtmlParse from 'html-react-parser';
import { useDispatch } from 'react-redux';

function TitleComponent({ title }) {
  const[render,ReRender]= useState('');
  useEffect(()=>{
    console.log('Like button is re render')
  },[render])
  const dispatch = useDispatch();
  const [comment, setcomment] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    if (comment) {
      const user = title.user
      dispatch({ type: 'commentArray', payload: { user, comment } });
      setcomment('');
    }
  }
  const LikeButton = (user, count) => {
    ReRender(user);
    dispatch({ type: 'Like', payload: { user, count } });
  console.log(user)
   
  }
  return (
    <>
      {ReactHtmlParse(`<h3 className="boxGap" >${title.user}
      </h3>`)}
      <button onClick={() => { LikeButton(title.user, title.count++) }}>Like</button> {title.count}
      <form onSubmit={(e) => { submitForm(e) }} >
        <input type='text' onChange={(e) => { setcomment(e.target.value) }} value={comment} />
        <button >Comment</button>
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
