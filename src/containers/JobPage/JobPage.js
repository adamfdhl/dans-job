import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

import "./JobPage.scss";

const JobPage = (props) => {
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [jobs, setJobs] = useState([]);
	// const [isFulltime, setIsFsulltime] = useState(false);

	const searchHandler = (e) => {
		e.preventDefault();
		console.log(description, location);
	};

	const getJobs = () => {
		axios
			.get("https://jobs.github.com/positions.json")
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getJobs();
	}, [getJobs]);
	return (
		<React.Fragment>
			<Navbar />
			<div className="JobPage">
				<h1>GitHub Jobs Finder!</h1>
				<form className="job-form" onSubmit={(e) => searchHandler(e)}>
					<div className="input-field">
						<label>Description</label>
						<input
							type="text"
							placeholder="Description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className="input-field">
						<label>Location</label>
						<input
							type="text"
							placeholder="Location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>
					<input
						type="checkbox"
						placeholder="FullTime"
						value="fulltime"
						name="fulltime"
					/>
					<label>Full Time Only</label>
					<button className="button-search" type="submit">
						find
					</button>
				</form>
				{/* JobList */}
			</div>
		</React.Fragment>
	);
};

export default JobPage;
