const data = (store) => (next) => (action) => {
  if ((action.type === "error")) console.log("Invalid", action.payload.message);
  else next(action);
};

export default data;
