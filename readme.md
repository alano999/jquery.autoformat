jquery.autoformat.js
====================
Format numeric input fields into thousands and decimals
=======================================================

A zero-configuration plugin that will format the value field of all html input elements (including select, text and textarea) having an auto-format class.

Format is currently fixed to UK format of comma (",") for thousands seperators, and fullstop (".") fo seperate decimal fraction.

1. Download the .js file into your web app's folder
2. Add a reference to the .js in the page from which you wish to use it, typically by use of a `<script>` tag positioned in the `<head>` of document immediately before the `</head>`.
3. Add "auto-format" class to all input, select, text and textarea fields where you wish the value attribute to be auto-formatted.

Example:-

	<!-- add these two lines just above </head> tag -->
	<script type="text/javascript" src="scripts/jquery.min.js"></script>
	<script type="text/javascript" src="scripts/jquery.autoformat.js"></script>

	<!-- an example input field, in <body> which will be auto-formatted -->
	<input type="number" class="auto-format" />

This file will be enhanced soon.