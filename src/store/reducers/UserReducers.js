import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "../action/UserAction";

const UserReducers = createSlice({
	name: "users",
	initialState: {
		users: [],
		loading: false,
		errors: {},
	},
	reducers: {
		// addUser: (state, action) => {
		// 	console.log(action);
		// 	state.users = [...state.users, action.payload];
		// },
	},
	extraReducers: {
		[addUser.pending]: (state, action) => {
			state.loading = true;
		},
		[addUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.users = action.payload;
		},
		[addUser.rejected]: (state, action) => {
			state.loading = false;
			state.errors = action.payload;
		},
	},
});

// export const { addUser } = UserReducers.actions;
export default UserReducers.reducer;
