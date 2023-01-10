import React from 'react'
import { useSelector } from 'react-redux'

function CommentComp({ Comment}) {

console.log(Comment);

  return (
    <>
    <div>
      {Comment}
    </div>
    </>
  )
}

export default CommentComp
