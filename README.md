## function.php

This function will edit the wp-json API, and when you fetch the API, it will show only the following fields: id, title, content, excerpt, date, author, and slug.

```bash
// Modify REST API response to include only necessary post data
function custom_modify_rest_post_data($data, $post, $request) {
// Initialize an empty array to store modified data
$modified_data = array();

// Add necessary post data to the modified array
$modified_data['id'] = $data->data['id'];
$modified_data['title'] = $data->data['title']['rendered'];
$modified_data['content'] = $data->data['content']['rendered'];
$modified_data['excerpt'] = $data->data['excerpt']['rendered'];
$modified_data['date'] = $data->data['date'];
$modified_data['author'] = $data->data['author'];
$modified_data['slug'] = $data->data['slug'];

// Add featured image URL if available
if (isset($data->data['featured_media']) && $data->data['featured_media'] !== 0) {
$featured_image_id = $data->data['featured_media'];
$featured_image_url = wp_get_attachment_image_src($featured_image_id, 'full');
if ($featured_image_url) {
$modified_data['featured_image_url'] = $featured_image_url[0];
}
}

// Return modified data
return $modified_data;
}

add_filter('rest_prepare_post', 'custom_modify_rest_post_data', 10, 3);
```
