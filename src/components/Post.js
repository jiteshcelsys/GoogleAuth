import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import ReactHtmlParse from 'html-react-parser';
import { useDispatch, useSelector } from "react-redux";


const Post = () => {
  const dispatch = useDispatch();
  const [count, setCounter] = useState(0);

  let messageArray = useSelector((state) => { return state.messageArray });
  const UserDetails = useSelector((state)=>{
    return state.UserDetails
  })
  const imageurl = useSelector((state)=>{
    return state.Image
  })

  const [string, setString] = useState("");
  const onsubmit = () => {
    dispatch({ type: 'messageArray', payload: string })
    setString("");
    console.log(messageArray);

  }

  console.log(messageArray)
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
            return (
              <div className="boxInput" key={index}>
                {ReactHtmlParse(`<h3 className="boxGap" >${value}
                  </h3>`)}
                <button onClick={() => { setCounter(count + 1) }} onDoubleClick={() => { setCounter(0) }}>Comment</button>
                {/* {count ? <Comments/>
                  : null} */}
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