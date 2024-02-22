import { writable } from "svelte/store";
import { client } from "./graphql";

export const posts = writable([]);

export async function fetchPosts() {
  const query = `
        query {
            posts {
                nodes {
                    slug
                    title
                    excerpt
                    # Add other fields you need
                }
            }
        }
    `;

  try {
    const data = await client.request(query);
    posts.set(data.posts.nodes);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
