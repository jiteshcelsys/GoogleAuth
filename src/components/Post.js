import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import ReactHtmlParse from 'html-react-parser';
import Comments from "./Comments";

const Post = () => {
  const [string, setString] = useState("");
  const [input, setInput] = useState([]);
  const [CommentCounter, setCommentRender] = useState(0);

  // const [Comment, setComment] = useState("");
  // const [CommentD, setCommentDisplay] = useState([]);
  // console.log(input);
  // console.log(parse);

  const onsubmit = () => {
    setInput([...input, string]);
    setString("");
  }

  // const submitComment = () => {
  //   setCommentDisplay([...CommentD, Comment])
  //   setComment('');
  // }

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
        {input ?
          input.map((value, index) => {
            return (
              <div className="boxInput">
                {ReactHtmlParse(`       <h3 className="boxGap" key=${index}>${value}
                  </h3>`)}
                <button onClick={() => { setCommentRender(CommentCounter + 1); }} onDoubleClick={() => { setCommentRender(0) }}>Comment</button>
                { /*If the value of commentCounter is increased the only the next part will render*/}
                {CommentCounter ? <Comments /> : null}
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