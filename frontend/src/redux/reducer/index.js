import postReducer from "./post.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  post: postReducer,
});

export default rootReducer;
