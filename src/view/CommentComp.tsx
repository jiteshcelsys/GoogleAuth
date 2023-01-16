import React from "react";

function CommentComp({ Comment }: any) {
  console.log(Comment);

  return (
    <>
      <div>{Comment}</div>
    </>
  );
}

export default CommentComp;
