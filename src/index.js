import store from "./store";
/* The subscribe get called every time when the state of the store get change */
const unsubscribe = store.subscribe(()=>{
    console.log("Store Changed !",store.getState())
})

/* We add new bug */
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});
/* invoke only once we add so we dont have to invoke the subscribe all time to avoid memory leaks */
unsubscribe()
/* We delete the bug added */
store.dispatch({
  type: "bugRemoved",
  payload: {
    id:1
  },
});

console.log(store.getState());
