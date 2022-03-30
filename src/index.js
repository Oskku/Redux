import configureStore from "./store/configureStore";


const store = configureStore();

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    data: {},
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
})