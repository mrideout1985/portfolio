import React, {useState, useEffect} from "react";
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url"
import SanityBlockContent from "@sanity/block-content-to-react";



const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const About = () => {

	const [author, setAuthor] = useState(null)

	useEffect(()=> {
		sanityClient.fetch(`*[_type == "author"] {
			name,
			bio, 
			"authorImage" : image.asset->url
		}`).then((data)=> setAuthor(data[0]))
		.catch(console.error)
	}, [])


	if(!author) return <div>...Loading</div>

	return (
	<main className="relative" >
		<img src="" alt=""/>
		<div className="p-10 lg:pt-48 container mx-auto relative">
			<section cn="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
				<img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded w-32 h-32 lg: w-64 lg:h-64 mr-8"/>
				<div className="text-lg flex flex-col justify-center">
					<h1>Hey there I'm,{" "}
					<span>{author.name}</span></h1>
					<div className="prose lg:prose-xl text-white">
					<SanityBlockContent dataset="production" projectId="5q9uij05" blocks={author.bio}/>						
					</div>
				</div>
			</section>
		</div>
	</main>
	);
};

export default About;

