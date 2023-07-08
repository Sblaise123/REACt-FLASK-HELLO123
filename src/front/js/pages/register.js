import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Register Page</h1>
			
		</div>
	);
};
