import configureStore from "./store/configureStore";
import * as actions from "./store/api"

const store = configureStore();
store.dispatch(actions.apiCallBegan(
  {
    url: "/bugs",
    onSuccess: "bugs/bugsReceived",
  },
))


console.log(store.getState())