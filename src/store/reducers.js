import { combineReducers } from "redux";
import bugsReducer from "./bugs"
import projectReducer from "./projects"

export default combineReducers(
    {
        bugs:bugsReducer,
        projects:projectReducer
    }
)