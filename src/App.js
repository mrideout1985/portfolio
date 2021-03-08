import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className="content">
				<Switch>
					<NavBar />
					<Route component={About} path="/" exact />
					<Route component={About} path="/about" />
					<Route component={SinglePost} path="/posts/:slug" />
					<Route component={Post} path="/post" />
					<Route component={Project} path="/project" />
				</Switch>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
