import store from "./store";
import { bugAdded ,bugRemoved,bugResolved} from "./actions";
/* The subscribe get called every time when the state of the store get change */
const unsubscribe = store.subscribe(()=>{
    console.log("Store Changed !",store.getState())
})

/* We add new bug */
store.dispatch(bugAdded("Osku"));
/* We change the bug to be resolved */
store.dispatch(bugResolved(1));
/* invoke only once we add so we dont have to invoke the subscribe all time to avoid memory leaks */
unsubscribe()
/* We delete the bug added */
store.dispatch(bugRemoved(1));
/* Here we get the current state */
console.log(store.getState());
