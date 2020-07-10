import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import JobPage from "./containers/JobPage/JobPage";
import JobDetails from "./containers/JobDetails/JobDetails";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route path="/job-page/:id" exact>
					<JobDetails />
				</Route>
				<Route path="/job-page" exact component={JobPage} />
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<Route path="/" exact component={Home} />
			</div>
		</BrowserRouter>
	);
}

export default App;
