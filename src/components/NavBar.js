import React from "react";
import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	return (
		<header className={styles["container"]}>
			<div className={styles["container__header"]}>
				<nav className={styles["container__header-nav"]}>
					<NavLink
						to="/about"
						activeClassName={styles["logo--active"]}
						className={styles["logo"]}
					>
						<h1>Matt Rideout</h1>
					</NavLink>

					<div className={styles["menu"]}>
						<NavLink
							to="/about"
							activeClassName={styles["navlink--active"]}
							className={styles["navlink"]}
						>
							About{" "}
						</NavLink>
						<NavLink
							to="/post"
							activeClassName={styles["navlink--active"]}
							className={styles["navlink"]}
						>
							Blog
						</NavLink>
						<NavLink
							to="/project"
							activeClassName={styles["navlink--active"]}
							className={styles["navlink"]}
						>
							Projects
						</NavLink>
					</div>
				</nav>

				{/* <div className="inline-flex py-3 px-3 my-4">
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
				</div> */}
			</div>
		</header>
	);
};

export default NavBar;
