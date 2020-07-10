import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Navbar.scss";

const Navbar = (props) => {
	const logoutHandler = () => {
		localStorage.clear();
		props.history.push("/");
	};
	return (
		<ul className="Navbar">
			<li>
				<Link to="/">GitHub Jobs Finder</Link>
			</li>
			<li onClick={logoutHandler} className="right-link">
				logout
			</li>
			<li className="right-link">Hi, blabla!</li>
		</ul>
	);
};

export default withRouter(Navbar);
