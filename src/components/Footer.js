import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles["footer"]}>
			<h1>Matthew Rideout</h1>
			<div className={styles["icons"]}>
				<SocialIcon
					url="https://www.linkedin.com/in/matthew-rideout-6b184a19b/"
					className={styles["sm-icons"]}
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://github.com/mrideout1985"
					className={styles["sm-icons"]}
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="mailto:mrideout.dev5@gmail.com"
					className={styles["sm-icons"]}
					target="_blank"
					fgColor="#fff"
					bgColor=""
					style={{ height: 35, width: 35 }}
				/>
			</div>
		</footer>
	);
};

export default Footer;
