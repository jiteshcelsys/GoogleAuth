import React, { useState } from "react";
import CommentComp from "./CommentComp";
import ReactHtmlParse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
type value = {
  user:string,
  comment:[],
  count:number
}

function TitleComponent({title}:any) {
  interface Person {
    name: string;
    img: string;
    isLoggedIn: Boolean;
    message: string;
    messageArray: [];
    counterComment: string;
  }

  const dispatch = useDispatch();
  const name = useSelector((state: Person) => {
    return state.name;
  });
  const imageUrl = useSelector((state: Person) => {
    return state.img;
  });
  let messageArray = useSelector((state: Person) => {
    return state.messageArray;
  });
  const [comment, setcomment] = useState("");
  const submitForm = (e: any) => {
    e.preventDefault();
    const user = title.user;
    if (comment) {
      dispatch({ type: "commentArray", payload: { user, comment } });
      setcomment("");
    } else {
      alert("Enter the Comment");
    }
  };

  function LikeButton(user: string, count: number) {
    dispatch({ type: "Like", payload: { user, count } });
    console.log(user);
    console.log(title.count);
    console.log(messageArray);
  }

  return (
    <>
      <div className="wrapp">
        <h5>
          <img src={imageUrl} height="15px" width="20px" alt="pic" />-{name}{" "}
        </h5>
        {ReactHtmlParse(`<h3  >${title.user}
      </h3>`)}
        <button
          onClick={() => {
            LikeButton(title.user, title.count + 1);
          }}
        >
          Like
        </button>{" "}
        {title.count}
        <form
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setcomment(e.target.value);
            }}
            value={comment}
          />
          <button className="CommentBtn">Comment</button>
        </form>
        {title.comment.map((value: string) => {
          return (
            <>
              <CommentComp Comment={value} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default TitleComponent;
