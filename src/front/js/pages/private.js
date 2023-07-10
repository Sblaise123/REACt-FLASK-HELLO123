import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Private = () => {
	const navigate = useNagivate();
	const { store, actions } = useContext(Context);

	const token = localStorage.getItem("token")

	return (
		<div className="text-center mt-5">
			{token ? <h1>private Page</h1> : <h1>Please Login</h1>}
			
			
		</div>
	);
};
