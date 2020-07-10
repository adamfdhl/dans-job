import React, { useState } from "react";

import "./Register.scss";

const Register = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div className="Register">
			<form onSubmit={(e) => registerHandler(e)}>
				<input
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">register</button>
			</form>
		</div>
	);
};

export default Register;
