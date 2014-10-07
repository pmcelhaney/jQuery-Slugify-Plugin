# jQuery Slugify

A jQuery plugin to create a URL slug as you type a page title (like Django slugify())

Say you have form that looks like this:

    <label for="title">Title, e.g. "My Cool Blog Post"</label>
    <input type="text" name="title" id="title">
    ...

    <label for="slug">Slug, e.g. "my-cool-blog-post"</label>
    <input type="text" name="slug" id="slug">

Use slugify() to automatically fill out the slug field as the user types a title.

    $('#slug').slugify('#title');

More docs and live examples at http://patrickmcelhaney.com/jQuery-Slugify-Plugin

## Do you want to get your feet wet in Open Source?

Look at the [issues](https://github.com/pmcelhaney/jQuery-Slugify-Plugin/issues) list. There are a couple of small improvements waiting for your to implement them. Fork the repo, make a change, send a pull request. It's not hard. Add a comment to one of the issues or reach out to me at [@patrick_mc](https://twitter.com/patrick_mc). I'll walk you through it.

