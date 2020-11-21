---
title: Contact
permalink: "/contact/"
layout: default
---

<style>
  label {
    display:block;
    margin-top:20px;
    letter-spacing:2px;
  }

  /* Centre the form within the page */
  form {
      margin:0 auto;
      width:459px;
  }

  /* Style the text boxes */
  input, textarea {
    width:439px;
    height:27px;
    background:#efefef;
    border:1px solid #dedede;
    padding:10px;
    margin-top:3px;
    font-size:0.9em;
    color:#3a3a3a;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
    border-radius:5px;
    outline: none;
  }

  input:focus, textarea:focus {
    border: 2px solid #97d6eb;
  }

  textarea {
    resize: vertical;
    height:213px;
    background: #efefef;
  }

  #submit {
    height:38px;
    border:none;
    margin-top:20px;
    cursor:pointer;
}

	#submit:hover {
	    opacity:.9;
	}
</style>

<div class="topnav-spacer"></div>
<form action="send.php" method="post">
  <label for="name">First and Last Name</label>
  <input name="name" placeholder="Type Here" id="name">
          
  <label for="email">Email</label>
  <input name="email" type="email" placeholder="Type Here" id="email">
          
  <label for="message">Message</label>
  <textarea name="message" placeholder="Type Here" id="message"></textarea>
          
  <input id="submit" name="submit" type="submit" value="Submit">
        
</form>