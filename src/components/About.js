import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";
import styles from "./About.module.scss";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const About = () => {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"] {
			name,
			bio, 
			"authorImage" : image.asset->url
		}`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);

	if (!author) return <div>...Loading</div>;

	return (
		<main className={styles["container"]}>
			<div className={styles["author"]}>
				<section className={styles["section"]}>
					<h2>About</h2>
					<img
						src={urlFor(author.authorImage).url()}
						alt={author.name}
					/>
					<div className={styles["about"]}>
						<h3>
							Hey there I'm, <span>{author.name}</span>
						</h3>
						{/* <div className={styles["blockcontent"]}> */}
						<SanityBlockContent
							dataset="production"
							projectId="5q9uij05"
							blocks={author.bio}
						/>
						{/* </div> */}
					</div>
				</section>
			</div>
		</main>
	);
};

export default About;
