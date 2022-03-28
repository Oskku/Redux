import configureStore from "./store/configureStore";
import { bugAdded ,bugRemoved,bugResolved,unresolvedBugsSelector} from "./store/bugs";
import { addProject } from "./store/projects";

const store = configureStore();
/* The subscribe get called every time when the state of the store get change */
const unsubscribe = store.subscribe(()=>{
    console.log("Store Changed !",store.getState())
})
/* Add New name Project */
store.dispatch(addProject({name:"Osku"}));
/* We add new bug */
store.dispatch(bugAdded({description:"Osku"}));
store.dispatch(bugAdded({description:"Osamah"}));
store.dispatch(bugAdded({description:"Amer"}));
/* We change the bug to be resolved */
store.dispatch(bugResolved({id:1}));
/* invoke only once we add so we dont have to invoke the subscribe all time to avoid memory leaks */
unsubscribe()
/* We delete the bug added */
store.dispatch(bugRemoved({id:1}));
/* Here we get the current state in console log*/
console.log("Select Uresolved Bugs",unresolvedBugsSelector(store.getState()));
