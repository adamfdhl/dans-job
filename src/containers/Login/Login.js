import React, { useState } from "react";
import { GoBriefcase } from "react-icons/go";
import { Link } from "react-router-dom";
import axios from "axios";

import Loader from "../../components/Loader/Loader";

import "./Login.scss";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const loginHandler = (e) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			email,
			password,
			returnSecureToken: true,
		};
		axios
			.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
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
		<div className="LoginPage">
			<form className="login-form" onSubmit={(e) => loginHandler(e)}>
				<GoBriefcase className="icon-brief" />
				<h3 className="login-title">Login Account</h3>
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
					login
				</button>
				{loading && <Loader />}
				{}
				<p>
					Don't have any account yet? Click <Link to="/register">here!</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
