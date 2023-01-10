import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import ReactHtmlParse from 'html-react-parser';
import { useDispatch, useSelector } from "react-redux";
import TitleComponent from "../view/TitleComponent";


const Post = () => {
  const dispatch = useDispatch();
  const [string, setString] = useState('');
  const[comment, setComment] = useState('');

  const [counter, setCounter] = useState(0);

  // const [count, setcount] = useState(0);

  let messageArray = useSelector((state) => { return state.messageArray });


 

// console.log(messageArray);
const name= useSelector((state)=>{return state.name});

  const imageurl = useSelector((state)=>{
    return state.img
  })
  //string to an object and then try to put it their in the payload while dispatching

  const onsubmit = () => {
console.log(string);
   if(string){
    dispatch({ type: 'messageArray', payload: {string} })
    setString("");
    console.log(messageArray);
   }
   setString("");
  }

  const CommentButton = (index)=>{
    setCounter(index + 1);

  }
  
  const AddComment =(user) =>{
  
 if(comment){
  dispatch({type:'commentArray',payload:{user,comment}});
  setComment('');
 }
  }
  const LikeButton=(user,count)=>{
 count++;
  
    
    dispatch({type:'Like', payload:{user,count}});
   

  }

  //Comment
  return (
    <>
      <div id="froala-editor">
        <FroalaEditor tag="textarea" onModelChange={(e) => { setString(e) }}
          model={string} />
      </div>
      <button onClick={() => {
        onsubmit()
      }}>Submit</button>
      <div >

        {(messageArray)?
          messageArray.map((value, index) => {
            return(
              <div className="boxInput">
            <TitleComponent title= {value} />
            </div>
            )}):null}
          {/* //   return (
          //     <div className="boxInput" key={index}>
          //       <img src={imageurl} alt='pic' width='13px' height='13px'/>
          //       <h4>--{name}</h4>
          //       {ReactHtmlParse(`<h3 className="boxGap" >${value.user}
          //         </h3>`)}
          //       <button onClick={(index)=>{CommentButton(index)}} onDoubleClick={() => { setCounter(0) }}>Comment</button>
          //       <button onClick={()=>{LikeButton(value.user,index)}}>Like<span >{value.count}</span>
          //      </button>
          //       {counter? <>
          //       <input type='text' onChange={(e)=>{setComment(e.target.value)}} value={comment}/>
          //       <button onClick={()=>{AddComment(value.user)}}>addComment</button>
          //       {value.comment.map((value,index)=>{
          //         return(
          //           <>
          //           <li key = {value.toString()}>{value}</li>
          //           </>
          //         )
          //       })}
          //       </>
          //         : null}
          //     </div>
          //   )
          // }) */}
        <div>
        </div>
      </div>
    </>
  )
}
export default Post