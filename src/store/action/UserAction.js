import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("users", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/users",
	);
	// respmse.pending
	// respmse.fulfilled
	// respmse.rejected
	return response.data;
});

export const fetchAllStudent = createAsyncThunk(
	"student/fectAllStudent",
	async (student, thunkApi) => {
		if (thunkApi.getState().student.students.length > 0) {
			return thunkApi.getState().student.students;
		}
		const { data } = await axios.get("/student");
		return data;
	},
);
