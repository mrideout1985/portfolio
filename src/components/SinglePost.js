import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./SinglePost.module.scss";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const SinglePost = () => {
	const [singlePost, setSinglePost] = useState(null);

	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
			title,
			id,
			slug,
			mainImage {
				asset->{
					_id,
					url
				}
			},
			body,
			"name": author->name,
			"authorImage" : author->image
		}`
			)
			.then((data) => setSinglePost(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!singlePost) return <div>Loading...</div>;

	return (
		<main className={styles["page"]}>
			<article className={styles["post"]}>
				<header className={styles["header"]}>
					<div className={styles["post-info-container"]}>
						<div className={styles["post-info"]}>
							<h2 className={styles["title"]}>
								{singlePost.title}
							</h2>
							<div className={styles["author"]}>
								<img
									src={urlFor(singlePost.authorImage).url()}
									alt={singlePost.name}
								/>
								<p className={styles["author-name"]}>
									{singlePost.name}
								</p>
							</div>
						</div>
					</div>
					<img
						src={singlePost.mainImage.asset.url}
						alt={singlePost.title}
					/>
				</header>
				<div className={styles["block-container"]}>
					<BlockContent
						dataset="production"
						projectId="5q9uij05"
						blocks={singlePost.body}
					/>
				</div>
			</article>
		</main>
	);
};

export default SinglePost;
