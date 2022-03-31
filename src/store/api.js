import { createAction } from "@reduxjs/toolkit";

/* Create api action names to avoid hardcoded  */
export const apiCallBegan = createAction("api/CallBegan");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallFailed = createAction("api/CallFailed");
