---
title: Send
permalink: "/contact/send.php"
layout: default
---

{% raw %}
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    echo($name);
?>
{% endraw %}

<h1>Hello</h1>