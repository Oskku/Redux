/* Middleware to dispatch functions with out thunk  */
/* Currying  */
const func = ({dispatch,getState}) => (next) => (action) => {
  if (typeof action === 'function') 
  next(dispatch,getState)
  else 
  next(action);
};

export default func;
