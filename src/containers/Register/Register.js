import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoBriefcase } from "react-icons/go";
import axios from "axios";

import Loader from "../../components/Loader/Loader";

import "./Register.scss";

const Register = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const registerHandler = (e) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			email,
			password,
			returnSecureToken: true,
		};
		axios
			.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
				data
			)
			.then((response) => {
				setLoading(false);
				localStorage.setItem("token", response.data.idToken);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("expiresIn", response.data.expiresIn);
				props.history.push("/job-page");
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	};
	return (
		<div className="RegisterPage">
			<form className="register-form" onSubmit={(e) => registerHandler(e)}>
				<GoBriefcase className="icon-brief" />
				<h3 className="register-title">Register Account</h3>
				<label>Email</label>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="button-submit" type="submit">
					register
				</button>
				{loading && <Loader />}
				<p>
					Already have an account? Click <Link to="/login">here!</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
