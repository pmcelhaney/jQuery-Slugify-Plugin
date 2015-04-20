# jQuery Slugify


## Update

Please have a look at 
[Madflow's implementation of jQuery Slugify](https://github.com/madflow/jquery-slugify). 
It's a more mature and active project. In theory, you should be able to drop in and 
replace the code. Please [let us know how it goes](https://github.com/madflow/jquery-slugify/issues/3). 

## About this version

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

