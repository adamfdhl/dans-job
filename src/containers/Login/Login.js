import React, { useState } from "react";
import { GoBriefcase } from "react-icons/go";
import { Link } from "react-router-dom";

import "./Login.scss";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginHandler = (e) => {
		e.preventDefault();
		console.log(email, password);
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
				<p>
					Don't have any account yet? Click <Link to="/register">here!</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
