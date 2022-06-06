import React, { useId, useRef, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addUser } from "../store/reducers/UserReducers";
// import { addUser } from "../store/action/UserAction";
import { Paper, Box, Button, Typography, Container } from "@mui/material";
import LockResetSharpIcon from "@mui/icons-material/LockResetSharp";
import { useParams } from "react-router-dom";

function Home(props) {
	const { id } = useParams();
	console.log(id);
	// const { users } = useSelector((state) => state.users);
	// console.log(users);
	// const dispatch = useDispatch();
	// const inputRef = useRef();
	// const HandleSubmit = (e) => {
	// 	e.preventDefault();
	// 	dispatch(addUser(inputRef.current.value));
	// 	inputRef.current.value = "";
	// };
	// useEffect(() => {
	// 	dispatch(addUser());
	// }, []);
	return (
		<Container maxWidth="xs">
			<Paper square elevation={7}>
				<Box p={2} mt={24} component={"section"}>
					<Typography variant="typography" paragraph color="primary">
						Home
					</Typography>
					<Typography align="justify">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. A natus
						nesciunt iste nemo distinctio mollitia eius officia. Quo
						reprehenderit doloremque, ex facere expedita officia repellat quod
						iure, eius dolores accusantium aut nobis voluptatem aliquid et
						voluptatum? Repellat, nihil velit! Nihil, sed excepturi distinctio
						eius blanditiis laudantium! Voluptate aut totam molestias at, natus
						impedit sint, dolores in exercitationem, accusantium dignissimos?
						Veniam necessitatibus corporis vel ex amet earum unde iusto
						cupiditate illo minus sed maiores inventore eligendi nisi eos fuga
						facere, maxime at dolore nulla alias voluptates dignissimos
						voluptatem. Voluptatem aspernatur et sed esse itaque libero debitis
						corrupti recusandae. Deserunt, exercitationem id!
					</Typography>
					<Box mt={2}>
						<Button
							size="large"
							variant="contained"
							fullWidth
							color="secondary"
							startIcon={<LockResetSharpIcon />}
						>
							Hello{" "}
						</Button>
					</Box>
					{/* <form onSubmit={HandleSubmit}>
				<input type="text" placeholder="Enter your name" ref={inputRef} />
				<br />
				<br />
				<input type="submit" value="Submit" />
			</form> */}
				</Box>
			</Paper>
		</Container>
	);
}

export default Home;
