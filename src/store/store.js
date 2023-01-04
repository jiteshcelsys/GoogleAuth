import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./postslice";
const reducer = combineReducers({
  reducers
})

const store = configureStore({
  reducer : reducer

})
export default store;