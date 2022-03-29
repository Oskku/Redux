import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectReducer from "./projects";
import userReducer from "./users";

/* We use combine to take all reducers inside entities */
export default combineReducers({
  bugs: bugsReducer,
  projects: projectReducer,
  users: userReducer,
});
