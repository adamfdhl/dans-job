import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoBriefcase } from "react-icons/go";
import axios from "axios";

import "./Register.scss";

const Register = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerHandler = (e) => {
		e.preventDefault();
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
				<p>
					Already have an account? Click <Link to="/login">here!</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
