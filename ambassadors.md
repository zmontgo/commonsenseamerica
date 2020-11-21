---
title: Ambassadors
permalink: "/ambassadors/"
layout: default
---

<style>
  .ambassadors-list {
    display: flex;
    justify-content: space-around;
    max-width: 100%;
    flex-wrap: wrap;
  }

  .ambassador {
    display: relative;
    margin: 2em;
  }
</style>

<div class="ambassadors-list index-sections content">
  {% for ambassador in site.ambassadors %}
    <div class="ambassador">
      <img src="{{ ambassador.image }}" style="border-radius: 50%">
      <h2>{{ ambassador.name }}</h2>
      <p>
    </div>
  {% endfor %}
</div>