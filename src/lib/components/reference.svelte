<script lang="ts">

	import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
	const UNKNOWN_IMAGE_URL = 'https://svelte.fun/bobs-burgers/images/99.jpg';

	export let title = '';
	export let featured_image_url = UNKNOWN_IMAGE_URL;
	export let content = '';
	export let excerpt = '';


</script>
<svelte:head>
	<title>{title}</title>
</svelte:head>
<Header />
<div class="container mx-auto mt-8">
  <article class="bg-white shadow-lg overflow-hidden flex">

    <div class="p-6 w-2/3">
      <h1 class="text-2xl font-semibold mb-4">{title}</h1>
      <p class="text-gray-700 mb-4">{content}</p>
      <p class="text-gray-600">{excerpt}</p>
    </div>
		<figure class="w-1/3">
      <img alt={title} src={featured_image_url} class="w-full h-auto" loading="lazy" />
    </figure>
  </article>
</div>
<Footer />
