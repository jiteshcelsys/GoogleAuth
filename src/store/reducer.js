const intialState = {
  name: "",
  img: "",
  message: "", messageArray: [],
 
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
      return {
        ...state,
        messageArray: [...state.messageArray,
        {
          user: action.payload.string,
          comment: [],
          count:0
        }]
      }
    }

    case 'commentArray': {
      let updatedMessageArray = state.messageArray.map((x) => (
        (x.user === action.payload.user) ? { ...x, comment: [...x.comment, action.payload.comment] } : x
      ));
      console.log(updatedMessageArray);
      return {
        ...state,
        messageArray: updatedMessageArray
      }
    }
    case 'Like' :{
      let updateCount = state.messageArray.map((x) => (
        (x.user === action.payload.user) ? { ...x, count:action.payload.count } : x
      ));
      console.log(updateCount)
      return{
        ...state,
        count: updateCount
      }
    }
    default: return state;
  }
}
//dispatch({type:"message",payload:e.target.value}) 
export default reducer
