import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import JobPage from "./containers/JobPage/JobPage";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route path="/JobPage" exact component={JobPage} />
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<Route path="/" exact component={Home} />
			</div>
		</BrowserRouter>
	);
}

export default App;
