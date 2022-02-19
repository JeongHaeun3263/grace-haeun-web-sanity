// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		{
			name: 'works',
			type: 'document',
			title: 'Works',
			fields: [
				{
					name: 'title',
					title: 'Title',
					type: 'string',
				},
				{
					name: 'description',
					title: 'Description',
					type: 'string',
				},
				{
					name: 'projectImage',
					title: 'Image',
					type: 'image',
				},
				{
					name: 'githubUrl',
					title: 'Github URL',
					type: 'string',
				},
				{
					name: 'liveUrl',
					title: 'Live URL',
					type: 'string',
				},
			],
		},
		{
			name: 'author',
			type: 'document',
			title: 'Author',
			fields: [
				{
					name: 'fullname',
					title: 'Full Name',
					type: 'string',
				},
				{
					name: 'avatar',
					title: 'Avatar',
					type: 'image',
				},
			],
		},
		{
			name: 'blog',
			type: 'document',
			title: 'Blog',
			fields: [
				{
					name: 'title',
					title: 'Title',
					type: 'string',
				},
				{
					name: 'subtitle',
					title: 'Subtitle',
					type: 'string',
				},
				{
					name: 'coverImage',
					title: 'Cover Image',
					type: 'image',
					options: {
						hotspot: true,
					},
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Description',
						},
					],
				},
				{
					name: 'content',
					title: 'Content',
					type: 'array',
					of: [
						{
							type: 'block',
						},
						{
							type: 'image',
							fields: [
								{
									type: 'text',
									name: 'alt',
									title: 'Description',
									options: {
										isHighlighted: true,
									},
								},
								{
									type: 'string',
									name: 'position',
									title: 'Position',
									options: {
										list: [
											{
												title: 'Center',
												value: 'center',
											},
											{
												title: 'Left',
												value: 'left',
											},
											{
												title: 'Right',
												value: 'right',
											},
										],
										layout: 'radio',
										isHighlighted: true,
									},
								},
							],
							options: {
								hotspot: true,
							},
						},
						{
							type: 'code',
							options: {
								withFilename: true,
							},
						},
					],
				},
				{
					name: 'date',
					title: 'Date',
					type: 'date',
					validation: (Rule) => {
						return Rule.required();
					},
				},
				{
					name: 'author',
					title: 'Author',
					type: 'reference',
					to: [{ type: 'author' }],
				},
				{
					name: 'slug',
					title: 'Slug',
					type: 'slug',
					validation: (Rule) => {
						return Rule.required();
					},
				},
			],
		},
	]),
});
