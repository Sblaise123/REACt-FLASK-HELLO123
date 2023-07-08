import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>AUTH PROJECT</h1>
			<div>
				<link to={"./register"}><button>Register Page</button></link>
				<link to={"./login"}><button>Login Page</button></link>
				<link to={"./private"}><button>Private Page</button></link>
			</div>
		</div>
	);
};
