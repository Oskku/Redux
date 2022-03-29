import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
/* Simplify our action functions with Redux-ToolKit,
createAction, createReducer,
 by bulding actions and reducers in same model with slice*/

let lastId = 0;
const slice = createSlice({
  name: "bugs", // name of the state
  initialState: [],
  reducers: {
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
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.findIndex((bug) => bug.id === bugId);
      state[index].userId = userId;
    },
  },
});

/* Selector Function with no memory cost */
export const unresolvedBugsSelector = createSelector(
  (state) => state.entities.bugs,
  (bugs) => !bugs.filter((bug) => !bug.resolved)
);
/* Get assign bugs with userId */
export const getByUserIdSelector = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
/* destructure actions object */
export const { bugAdded, bugResolved, bugRemoved, bugAssignedToUser } =
  slice.actions;
/* Export slice as default */
export default slice.reducer;
