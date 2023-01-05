import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import ReactHtmlParse from 'html-react-parser';
import Comments from "./Comments";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  let string1= useSelector((state)=>{return state});
  let comment = useSelector((state)=>{return state.comment});
  let messageArray = useSelector((state)=>{return state.messageArray});



  const [string, setString] = useState("");
  const [input, setInput] = useState([]);
  const onsubmit = () => {
    dispatch({type:'messageArray',payload:string})
    setInput([...input, string]);
    setString("");
    console.log(messageArray);

  }

  return (
    <>
      <div id="froala-editor">
        <FroalaEditor tag="textarea" onModelChange={(e) =>  {setString(e)}}
          model={string} />
      </div>
      <button onClick={() => {
        onsubmit()
      }}>Submit</button>
      <div >
        {input ?
          input.map((value, index) => {
            return (
              <div className="boxInput" key={index}>
                {ReactHtmlParse(`<h3 className="boxGap" >${value}
                  </h3>`)}
                <button >Comment</button>
              </div>
            )
          })
          : null}
        <div>
        </div>
      </div>
    </>
  )
}
export default Post