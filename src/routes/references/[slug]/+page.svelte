
<script>
    import { onMount } from 'svelte';
    import { posts, fetchPosts } from "$lib/store";


    let fetchedPosts = [];

    onMount(async () => {
        await fetchPosts();
        posts.subscribe(value => {
            fetchedPosts = value;
        })();
    });
</script>

<h1>WordPress Posts</h1>
<ul>
    {#each fetchedPosts as post}
        <li>
            {post.excerpt}
            <!-- You can display other post details here -->
        </li>
    {/each}
</ul>
