import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { useDispatch, useSelector } from "react-redux";
import TitleComponent from "../view/TitleComponent";


const Post = () => {
  const dispatch = useDispatch();
  const [string, setString] = useState('');
  // const [count, setcount] = useState(0);
  let messageArray = useSelector((state) => { return state.messageArray });

  const onsubmit = () => {
console.log(string);
   if(string){
    dispatch({ type: 'messageArray', payload: {string} })
    setString("");
    console.log(messageArray);
   }
   setString("");
  }
  console.log(messageArray+'parent');
  return (
    <>
    <h1> Posts </h1>
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