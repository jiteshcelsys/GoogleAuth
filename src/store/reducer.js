const intialState = {
  name: "",
  img: "",
  // data: [],
  message: "", messageArray: [],
  comment: "", commentArray: [],
}

function reducer(state = intialState, action) {
  
  switch (action.type) {
  
    case 'UserDetails':
      return {
        ...state,
        name: action.payload,
      };
    case 'Image':
      return {
        ...state,
        img: action.payload

      };
    case 'messageArray': {
      console.log(typeof (state.messageArray))
      console.log(state.messageArray)
      return {
        ...state,
        messageArray: [...state.messageArray, action.payload]
      }
    }
    case 'commentArray': {

      return {
        ...state,
        commentArray: [...state.commentArray, action.payload]
      }
    }
    default: return state;
  }
}
//dispatch({type:"message",payload:e.target.value}) 
export default reducer
