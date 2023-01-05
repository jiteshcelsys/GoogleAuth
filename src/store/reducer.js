const intialState = {
  name: "",
  img: "",
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
      console.log(state);
      return {
        ...state,
        messageArray: state.messageArray.push(action.payload)
      }
    }
    default: return state;
  }
}
//dispatch({type:"message",payload:e.target.value}) 
export default reducer
