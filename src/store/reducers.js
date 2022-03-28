import { combineReducers } from "redux";
import entitiesReducer from "./entities";

/* Combine Project reducer and Bugs inside entities array of reducers and export them as one */
export default combineReducers(
    {
      entities : entitiesReducer
    }
)