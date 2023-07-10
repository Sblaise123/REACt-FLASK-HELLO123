import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const {email, setEmail} = useState("");
	const {password, setPassword} = useState("");

	const registerUser = () => {
		const response = fetch("https://sblaise123-curly-couscous-rjgwqj9xj5rf4p5-3000.preview.app.github.dev/register",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		}
		
		
		)

		const data = respone.json();
		if (response.ok) {
			navigate("/login");

		} else {
			console.log("Error:", data.repsonse)
		}
	};

	return (
		<div className="text-center mt-5">
			<h1>Register Page</h1>
			<Form>
				<input type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
				<input type="text" placeholder="Password"value={password} onChange={(e) => {setPassword(e.target.value)}} ></input>
				<button type="sumbit">Sumbit</button>
			</Form>
		</div>
	);
};
