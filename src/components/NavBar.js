import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
	return (
		<header className="bg-red-600">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-400 text-4xl font-bold cursive uppercase tracking-widest"
					>
						Rideout
					</NavLink>
					<NavLink
						to="/post"
						activeClassName="text-red-100 bg-red-700"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
					>
						Blog Posts
					</NavLink>
					<NavLink
						to="/project"
						activeClassName="text-red-100 bg-red-700"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						activeClassName="text-red-100 bg-red-700"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
					>
						About Me
					</NavLink>
				</nav>

				<div className="inline-flex py-3 px-3 my-4">
					<SocialIcon
						url="https://twitter.com/Rideoutmaffoo"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://github.com/mrideout1985"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://www.instagram.com/mattr1985/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
