import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>AUTH PROJECT</h1>
			<div>
				<Link to={"./register"}><button>Register Page</button></Link>
				<Link to={"./login"}><button>Login Page</button></Link>
				<Link to={"./private"}><button>Private Page</button></Link>
			</div>
		</div>
	);
};
