import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/Loader/Loader";
import axios from "axios";

import "./JobPage.scss";

const JobPage = (props) => {
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(false);
	// const [isFulltime, setIsFsulltime] = useState(false);

	const detailsJobHandler = (jobId) => {
		props.history.push("/job-page/" + jobId);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		console.log(description, location);
	};

	const getJobs = useCallback(() => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_API_ENDPOINT}/jobs`)
			.then((response) => {
				setLoading(false);
				setJobs(response.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
			});
	});

	useEffect(() => {
		getJobs();
	}, []);
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
				{loading ? (
					<Loader />
				) : (
					<div className="job-list">
						{jobs.map((job) => {
							return (
								<div key={job.id} className="job">
									<div className="job-location">
										<b>{job.location}</b>
									</div>
									<h3 className="job-title">
										{job.company} is hiring for {job.title}
									</h3>
									<button
										className="button-details"
										onClick={() => detailsJobHandler(job.id)}
									>
										details
									</button>
									<div className="job-little-desc">
										<div className="job-type">{job.type}</div>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default JobPage;
