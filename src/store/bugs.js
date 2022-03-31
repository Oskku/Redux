import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import data from "./middleware/data";
import { apiCallBegan } from "./api";
import moment from "moment";
/* Simplify our action functions with Redux-ToolKit,
createAction, createReducer,
 by bulding actions and reducers in same model with slice*/

let lastId = 0;
const slice = createSlice({
  name: "bugs", // name of the state
  initialState: {
    list: [],
    loading: false /* If no data loading is true */,
    lastFetch: null /* To show last time we fetch list of bugs */,
  },
  reducers: {
    //actions: functions () (event => eventHandler)
    bugRequestFail: (state, action) => {
      state.loading = false;
    },
    bugsRequested: (state, action) => {
      state.loading = true;
    },
    bugsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    bugAdded: (state, action) => {
      state.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugResolved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);
      state.list[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      return state.list.filter((bug) => bug.id !== action.payload.id);
    },
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex((bug) => bug.id === bugId);
      state.list[index].userId = userId;
    },
  },
});

export const {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugRequestFail,
} = slice.actions;
/* Actions Creators */
const url = "/bugs";

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch),"minute")
  if(diffInMinutes < 1) return;
  

  dispatch(
    apiCallBegan({
      url: url,
      onStart: bugsRequested.type,
      onFail: bugRequestFail.type,
      onSuccess: bugsReceived.type,
    })
  );
};

/* Selector Function with no memory cost */
export const unresolvedBugsSelector = createSelector(
  (state) => state.list.entities.bugs,
  (bugs) => !bugs.filter((bug) => !bug.resolved)
);
/* Get assign bugs with userId */
export const getByUserIdSelector = (userId) =>
  createSelector(
    (state) => state.list.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
/* destructure actions object */

/* Export slice as default */
export default slice.reducer;
