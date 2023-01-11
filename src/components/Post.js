import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { useDispatch, useSelector } from "react-redux";
import TitleComponent from "../view/TitleComponent";
import Logout from "../view/Logout";


const Post = () => {
  const dispatch = useDispatch();
  const [string, setString] = useState('');
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
    
    <Logout/>
    <h1> Posts </h1>
      <div id="froala-editor">
        <FroalaEditor tag="textarea" onModelChange={(e) => { setString(e) }}
          model={string} />
      </div>
      <button onClick={() => {
        onsubmit()
      }}>Submit</button>

       <div className="PostComponent" >
       {(messageArray)?
          messageArray.map((value, index) => {
            return(
              <div className="boxInput">
            <TitleComponent title= {value} />
            </div>
            )}):null}
       </div>
    </>
  )
}
export default Post