---
layout: page
---

# Blog

Used for communicating project announcements.

## List of posts
{% for post in site.posts %}
* {{ post.date | date: "%b %-d %Y" }}: [{{ post.title }}]({{ post.url }})
{% endfor %}
