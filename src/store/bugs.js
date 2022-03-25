/* Here we define the actions type so it will only be changed from here to make less bugs */

 const BUG_ADDED = "bugAdded";
 const BUG_REMOVED = "bugRemoved";
 const BUG_RESOLVED = "bugResolved";


/* Here we built a function to create for us actions instead of calling store.dispatch all time */
export function bugAdded(description) {
  return {
    type: BUG_ADDED,
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
        type: BUG_RESOLVED,
        payload:{
            id
        }
    }
}

/* Reducer of bugs */

/* Building Reducer */
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
}