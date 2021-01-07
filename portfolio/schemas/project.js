// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
		},

		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},

		{
			name: "date",
			type: "datetime",
		},
		{
			name: "place",
			type: "string",
		},
		{
			name: "description",
			type: "text",
		},
		{
			name: "projectType",
			title: "Project type",
			type: "string",
			options: {
				list: [
					{ value: "personal", title: "Personal" },
					{ value: "client", title: "Client" },
					{ value: "learning", title: "Learning" },
				],
			},
		},
		{
			name: "link",
			type: "url",
		},
		{
			name: "repo",
			type: "url",
		},
		{
			name: "tags",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
			options: {
				layout: "tags",
			},
		},
	],
};
