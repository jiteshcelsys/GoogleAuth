const intialState = {
  name: "",
  img: "",
  isLoggedIn:false,
  message: "", messageArray: [],
  counterComment:''
 
}

function reducer(state = intialState, action) {

  switch (action.type) {
    case 'isLoggedIn':
      return{
        ...state,
        isLoggedIn:action.payload
      }

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
      let updatedMessageArray = state.messageArray.map((value) => (
        (value.user === action.payload.user) ? { ...value, 
          count: action.payload.count} : value
      ));
      console.log(updatedMessageArray)
      console.log(state.messageArray);
      return{
        ...state,

        messageArray: updatedMessageArray
      }
    }
    case 'CounterComment' :
      console.log(state.counterComment)
      return{
        ...state,
        
        
      }
    default: return state;
  }
}

export default reducer
