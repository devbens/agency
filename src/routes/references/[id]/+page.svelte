<script lang="ts">
	import Reference from '$lib/components/reference.svelte';
	export let data;

	$: reference = data.reference;
</script>

<svelte:head>
	<title>{reference.name} | References</title>
</svelte:head>

<Reference {...reference} />

<a href="/">Back</a>
