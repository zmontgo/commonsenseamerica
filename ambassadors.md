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
    text-align: center;
  }

  .ambassador {
    max-width: 250px;
    display: relative;
    margin: 2em;
  }
</style>

<div class="topnav-spacer"></div>
<div class="content section">
  <h2 class="red-header">Meet Our Ambassadors</h2>
  <p>Something about what ambassadors do.</p>
</div>
<div class="ambassadors-list index-sections content section wide">
  {% for ambassador in site.ambassadors %}
    <div class="ambassador">
      <img src="{{ ambassador.image }}" style="border-radius: 50%;max-width: 150px;border: 2px #000 solid;padding: 2px;">
      <h2>{{ ambassador.name }}</h2>
      <p>Age {{ ambassador.age }} from {{ ambassador.state }}.</p>
      <p>Favorite quote: "<i>{{ ambassador.quote }}</i>"</p>
    </div>
  {% endfor %}
</div>