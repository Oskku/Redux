import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  unresolvedBugsSelector,
  getByUserIdSelector,
} from "./store/bugs";
import { addUser } from "./store/users";
import { addProject } from "./store/projects";

const store = configureStore();

/* The subscribe get called every time when the state of the store get change */
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed !", store.getState());
});
/* Send middleware  */
store.dispatch(()=>{
store.dispatch({type:"Received"})
})
/* Add New name Project */
store.dispatch(addProject({ name: "Osku" }));
/* We add new bug */
store.dispatch(bugAdded({ description: "Osku" }));
store.dispatch(bugAdded({ description: "Osamah" }));
store.dispatch(bugAdded({ description: "Amer" }));
store.dispatch(addUser({ username: "User1" }));
store.dispatch(addUser({ username: "User2" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
const bugs = getByUserIdSelector(1)(store.getState())
console.log("Select Assign Bugs", bugs);
/* We change the bug to be resolved */
store.dispatch(bugResolved({ id: 1 }));
/* invoke only once we add so we dont have to invoke the subscribe all time to avoid memory leaks */
unsubscribe();
/* We delete the bug added */
store.dispatch(bugRemoved({ id: 1 }));
/* Here we get the current state in console log*/
unresolvedBugsSelector(store.getState());
/* Here we see that filter copy all the time new array and it take memory */
const x = unresolvedBugsSelector(store.getState());
const y = unresolvedBugsSelector(store.getState());
console.log(
  x === y
); /* It will return true because the filter function it will not make new copy */