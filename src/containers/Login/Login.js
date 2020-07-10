import React, { useState } from "react";

import "./Login.scss";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginHandler = (e) => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<div className="Login">
			<form onSubmit={(e) => loginHandler(e)}>
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
				<button type="submit">login</button>
			</form>
		</div>
	);
};

export default Login;
