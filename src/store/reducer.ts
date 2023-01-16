type UpdateIntialstate ={
  name:string,
  img:string,
  isLoggedIn:Boolean,
  message:string,
  messageArray:any[],
  counterComment:string

}

const intialState:UpdateIntialstate = {
  name: "",
  img: "",
  isLoggedIn: false,
  message: "",
  messageArray: [],
  counterComment: "",
};

function reducer(state = intialState, action:any) {
  switch (action.type) {
    case "isLoggedIn":
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case "UserDetails":
      return {
        ...state,
        name: action.payload,
      };
    case "Image":
      return {
        ...state,
        img: action.payload,
      };

    case "messageArray": {
      return {
        ...state,
        messageArray: [
          ...state.messageArray,
          {
            user: action.payload.string,
            comment: [],
            count: 0,
          },
        ],
      };
    }

    case "commentArray": {
      type update ={
        user:string,
        comment:string[],
        count:number
      }
     
      let updatedMessageArray = state.messageArray.map((x:update) =>
        x.user === action.payload.user
          ? { ...x, comment: [...x.comment, action.payload.comment] }
          : x
      );
      console.log(updatedMessageArray);
      return {
        ...state,
        messageArray: updatedMessageArray,
      };
    }
    case "Like": {
      type update ={
        user:string,
        comment:string[],
        count:number
      }

      let updatedMessageArray = state.messageArray.map((value:update) =>
        value.user === action.payload.user
          ? { ...value, count: action.payload.count }
          : value
      );
      console.log(updatedMessageArray);
      console.log(state.messageArray);
      return {
        ...state,

        messageArray: updatedMessageArray,
      };
    }
    case "CounterComment":
      console.log(state.counterComment);
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;
