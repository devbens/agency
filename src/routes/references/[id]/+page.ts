import { error } from '@sveltejs/kit';

type Reference = {
	id: number;
	title: string;
	content: string;
	excerpt: string;
	featured_image_url: string;
};

export const load = async ({ fetch, params }) => {
	const response = await fetch(`https://data.xoit.ae/wp-json/wp/v2/posts/${params.id}`);

	if (!response.ok) {
		const err = await response.json();
		throw error(response.status, err.message);
	}

	return {
		reference: response.json() as Promise<Reference>
	};
};
