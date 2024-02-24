<script lang="ts">

	import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
	export let data;

</script>

<svelte:head>
	<title>References</title>
</svelte:head>

<Header />
<div class="container mx-auto mt-8">
  {#each data.references as { id, featured_image_url, title, content, excerpt }}
		<a href={`/references/${id}`}>

			<article class="bg-white shadow-lg overflow-hidden flex mb-8">
				<figure class="w-1/3">
					<img alt={title} src={featured_image_url} class="w-full h-auto" loading="lazy" />
				</figure>
				<div class="p-6 w-2/3">
					<h1 class="text-2xl font-semibold mb-4">{title}</h1>
					<p class="text-gray-700 mb-4">{content}</p>
					<p class="text-gray-600">{excerpt ? excerpt : 'Unknown'}</p>
				</div>
			</article>
		</a>
  {/each}
</div>
<Footer />