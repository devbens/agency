<script lang="ts">
	import { page } from '$app/stores';
	import Reference from '$lib/components/reference.svelte';
</script>

<Reference name={`${$page.status}: ${$page.error?.message}`} />

<a href="/">Back</a>
