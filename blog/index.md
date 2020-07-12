---
layout: page
---

# Blog

The [core team]({{ 'governance.html#core-team' | relative_url }}) uses this blog to communicate big announcements in Grin.

## List of posts
{% for post in site.posts %}
* {{ post.date | date: "%b %-d %Y" }}: [{{ post.title }}]({{ post.url }})
{% endfor %}
