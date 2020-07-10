import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = (props) => {
	return (
		<div className="Home">
			<Slide left>
				<h1>Welcome to Github Jobs Finder!</h1>
				<h3>The right place to find your dream job</h3>
				<p>Do you want to look for a job?</p>
				<div className="auth-links">
					<Link to="/login">Yes, go to login</Link>
					<Link to="/register">Create an account</Link>
				</div>
			</Slide>
		</div>
	);
};

export default Home;
