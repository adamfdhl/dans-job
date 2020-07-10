import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

import "./JobDetails.scss";

const JobDetails = (props) => {
	const [job, setJob] = useState({});
	const [loading, setLoading] = useState(false);
	const id = window.location.pathname.split("/")[2];

	const goBackHandler = () => {
		props.history.push("/job-page");
	};

	const getJob = () => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_API_ENDPOINT}/jobs/${id}`)
			.then((response) => {
				setLoading(false);
				setJob(response.data);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	};

	useEffect(() => {
		getJob();
		return () => {};
	}, []);
	return (
		<React.Fragment>
			<Navbar />
			{loading ? (
				<Loader />
			) : (
				<div className="JobDetails">
					<div onClick={goBackHandler} className="job-header">
						<FaArrowCircleLeft />
						<h3>Go Back</h3>
					</div>
					<div className="job-about">
						<h1>
							{job.company} is hiring for {job.title}
						</h1>
						<div className="job-venue">
							<div className="job-type">Position: {job.type}</div>
							<div className="job-location">Location: {job.location}</div>
						</div>
						<div className="job-description">
							<div dangerouslySetInnerHTML={{ __html: job.description }}></div>
						</div>
						<div className="job-apply">
							<h2>Apply Now:</h2>
							<div dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default withRouter(JobDetails);
