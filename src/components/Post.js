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
  // const [count, setcount] = useState(0);
  let messageArray = useSelector((state) => { return state.messageArray });

// console.log(messageArray);
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
        <div>
        </div>
      </div>
    </>
  )
}
export default Post