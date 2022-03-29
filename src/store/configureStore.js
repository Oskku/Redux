import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "./middleware/logger";

/* With toolkit we just import confiureStore and thats it :D */
export default function configureAppStore() {
  return configureStore({ reducer, middleware: [logger({destination:"Console"})]

});
}
