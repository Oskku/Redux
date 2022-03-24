import * as actions from "./actionTypes";
/* Here we built a function to create for us actions instead of calling store.dispatch all time */
export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload:{
        description:description
    }
  };
}


export function bugRemoved (id){
    return{
        type: "bugRemoved",
        payload: {
          id:id
        },
    }
}

export const bugResolved = id => {
    return {
        type: actions.BUG_RESOLVED,
        payload:{
            id
        }
    }
}