import configureStore from "./store/configureStore";
import { loadBugs } from "./store/bugs";
import * as actions from "./store/api";

const store = configureStore();
store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(loadBugs());
}, 2000);

setTimeout(() => {
  store.dispatch(loadBugs());
}, 2000);