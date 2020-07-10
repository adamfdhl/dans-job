import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import "./JobPage.scss";

const JobPage = (props) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="JobPage">
				<h1>GitHub Jobs Finder!</h1>
			</div>
		</React.Fragment>
	);
};

export default JobPage;
