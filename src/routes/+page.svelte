<script lang='ts'>
	import Header from '$lib/components/header.svelte'
  import Main from '$lib/components/main.svelte'
  import Footer from '$lib/components/footer.svelte'

	export let data;
</script>

<svelte:head>
	<title>XO IT</title>
</svelte:head>

<Header />
<Main />


<div class="container mx-auto mt-20">
<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-black text-left">References<hr class="mt-5 my-5 s-cPitp4j5PmCE"></h1>  <div class="grid grid-cols-2 gap-4">
    {#each data.references as { id, featured_image_url, title, content, excerpt }}
      <div class="flex-shrink-0">
        <a href={`/references/${id}`} class="block">
          <img src={featured_image_url} alt={title} class="w-full h-48 object-cover mb-2" />
        </a>
        <div>
          <a href={`/references/${id}`} class="font-semibold text-lg">{title}</a>
          <p class="text-gray-600 mt-1">{excerpt ? excerpt : 'Unknown'}</p>
        </div>
      </div>
    {/each}
  </div>
</div>



<Footer />



