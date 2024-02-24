type Reference = {
	id: number;
	title: string;
	content: string;
	excerpt: string;
	featured_image_url: string;
};

export const load = async ({ fetch }) => {
	const response = await fetch('https://data.xoit.ae/wp-json/wp/v2/posts');

	return {
		references: response.json() as Promise<Reference[]>
	};
};
