import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "./middleware/logger";
import data from "./middleware/data";
import api from "./middleware/api";
/* With toolkit we just import confiureStore and thats it :D */
export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "Console" }),
      data,
      api
      
    ],
  });
}
