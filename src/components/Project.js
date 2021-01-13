import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import styles from "./Project.module.scss";

const Project = () => {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"] {
			title, 
			date, 
			place,
			description, 
			projectType, 
			link, 
			tags,
			mainImage{
                asset->{
                    _id,
                    url
                },
                alt
			}
		}`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	const handleTags = () => {
		return (
			projectData &&
			projectData.map((project) => {
				return (
					project.tags &&
					project.tags.map((tag, key) => (
						<div
							key={key}
							style={{
								display: "inline-block",
								padding: ".2rem",
							}}
						>
							{"#" + tag}
						</div>
					))
				);
			})
		);
	};

	return (
		<main className={styles["page"]}>
			<section className={styles["project-section"]}>
				<h2>Projects</h2>
				<section className={styles["project-container"]}>
					{projectData &&
						projectData.map((project, index) => (
							<article className={styles["card"]} key={index}>
								<div className={styles["image-data"]}>
									<div
										className={styles["background-image"]}
										style={{
											backgroundImage: `url(${project.mainImage?.asset.url})`,
										}}
									></div>
									<div
										className={
											styles["publication-details"]
										}
									>
										<span className={styles.author}>
											<h3>Matthew Rideout</h3>
										</span>
										<span className={styles.date}>
											<h3>
												{new Date(
													project.date
												).toLocaleDateString()}
											</h3>
										</span>
									</div>
								</div>
								<div className={styles["post-data"]}>
									<h1>{project.title}</h1>
									<p className={styles["description"]}>
										{project.description}
									</p>
									{handleTags()}
									<div className={styles["cta"]}>
										<a href={`${project.link}`}>
											View Project &rarr;
										</a>
									</div>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
};

export default Project;
