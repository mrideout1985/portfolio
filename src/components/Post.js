import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import styles from "./Post.module.scss";

export default function Post() {
	const [postData, setPost] = useState(null);

	// fetching groq data from sanity
	useEffect(() => {
		//looking for all types that are equal to post - and returning the title, slug, mainImage
		sanityClient
			.fetch(
				`*[_type == "post"]{
			title,
			publishedAt,
			overview,
			slug,
			mainImage{
                asset->{
                    _id,
                    url
                },
                alt
			}
			,tags
        }`
			)
			.then((data) => setPost(data))
			.catch(console.error);
	}, []);

	return (
		<main className={styles["page"]}>
			<section className={styles["post-section"]}>
				<h2>Blog Posts</h2>
				<div className={styles["post-container"]}>
					{postData &&
						postData.map((post, index) => (
							<article className={styles["card"]} key={index}>
								{console.log(post)}
								<div className={styles["image-data"]}>
									<div
										className={styles["background-image"]}
										style={{
											backgroundImage: `url(${post.mainImage?.asset.url})`,
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
													post.publishedAt
												).toLocaleDateString()}
											</h3>
										</span>
									</div>
								</div>
								<div className={styles["post-data"]}>
									<h1>{post.title}</h1>
									<p className={styles["description"]}>
										{" "}
										{post.overview}
									</p>
									{/* {handleTags()} */}
									<div className={styles["cta"]}>
										<Link
											to={"/posts/" + post.slug.current}
											key={post.slug.current}
										>
											Read More &rarr;
										</Link>
									</div>
								</div>
							</article>
						))}
				</div>
			</section>
		</main>
	);
}
