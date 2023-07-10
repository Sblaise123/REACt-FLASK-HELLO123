import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";



export const Login = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const {email, setEmail} = useState("");
	const {password, setPassword} = useState("");
	

	const loginUser = async () => {
		const response = await fetch("https://sblaise123-curly-couscous-rjgwqj9xj5rf4p5-3000.preview.app.github.dev/login",
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
		localStorage.setItem("token", data.token)
		if (response.ok) {
			navigate("/private");

		} else {
			console.log("Error:", data.repsonse)
		}
	};

	return (
		<div className="text-center mt-5">
			<h1>Login Page</h1>
			<Form>
				<input type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
				<input type="text" placeholder="Password"value={password} onChange={(e) => {setPassword(e.target.value)}} ></input>
				<button type="login">Login</button>
			</Form>
			
		</div>
	);
};
