import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "./reducers/UserReducers";

export default configureStore({
	reducer: {
		users: UserReducers,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
