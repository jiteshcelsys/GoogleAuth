import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { useDispatch, useSelector } from "react-redux";
import TitleComponent from "../view/TitleComponent";
import Navabar from "../view/Navabar";
import React from "react";


const Post = () => {
  const dispatch = useDispatch();
  const [string, setString] = useState<string>('');
  interface Person {
    name: string;
     img: string;
      isLoggedIn: Boolean;
      message: string; messageArray: []; counterComment: string

  }
  type value = {
    user:string,
    comment:[],
    count:number
  }
  let messageArray = useSelector((state:Person) => { return state.messageArray });

  const onsubmit = () => {
    console.log(string);
    if (string) {
      dispatch({ type: 'messageArray', payload: { string } })
      setString("");
      console.log(messageArray);
    }
    setString("");
  }
  console.log(messageArray + 'parent');
  return (
    <>
      <Navabar />
      <h1> Posts </h1>
      <div id="froala-editor">
        <FroalaEditor tag="textarea" onModelChange={(e:any) => { setString(e) }}
          model={string} />
      </div>
      <button onClick={() => {
        onsubmit()
      }}>Submit</button>

      <div className="PostComponent" >
        {(messageArray) ?
          messageArray.map((value:value) => {
            return (
              <div className="boxInput">
                <TitleComponent title={value} />
              </div>
            )
          }) : null}
      </div>
    </>
  )
}
export default Post