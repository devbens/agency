<script>
    import { onMount } from 'svelte';
    import { posts, fetchPosts } from '$lib/store';

    export let params;
    let post = {};

    onMount(async () => {
        await fetchPosts(); // Ensure posts are fetched
        posts.subscribe(value => {
            post = value.find(p => p.slug === params.slug) || {};
        })();
    });
</script>

<h1>{post.title}</h1>
<div>{@html post.content}</div>