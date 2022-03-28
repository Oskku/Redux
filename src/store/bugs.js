import { createAction, createReducer } from "@reduxjs/toolkit";

/* Simplify our action functions with Redux-ToolKit,
 by bulding actions and reducers in same model*/

export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");


let lastId = 0;
/* Building Reducer with toolkit and immer*/
export default createReducer([], {
  //key:action
  //actions: functions () (event => eventHandler)
  bugAdded: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  bugResolved: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
  bugRemoved: (state, action) => {
     return state.filter((bug) => bug.id !== action.payload.id);
  },

});