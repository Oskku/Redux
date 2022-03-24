import store from "./store";

/* We add new bug */
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});
/* We delete the bug added */
store.dispatch({
  type: "bugRemoved",
  payload: {
    id:1
  },
});

console.log(store.getState());
