
<html>
  <head>
    <title>zxcvbn tests</title>

    <!-- I used jquery, mustache, and a template file called handler.js for this page
    		 the zxcvbn-async.js calls the actual password checking script, but does it without blocking page load. -->

    <script type="text/javascript" src="jquery.js">
    </script>
    <script type="text/javascript" src="mustache.js">
    </script>
    <script type="text/javascript" src="handler.js">
    </script>
    <script type="text/javascript" src="zxcvbn-async.js">
    </script>

    <link rel="stylesheet" href="bootstrap/css/bootstrap.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/main.css" type="text/css" media="all">

  </head>
  <body>

    <style type="text/css">

      body {
        font-family: monospace;
      }

      .match-sequence table {
        display: inline;
        margin-right: 30px;
      }

      .match-sequence {
        margin-bottom: 100px;
      }

      .match-sequence > table:nth-child(odd) {
        background-color: #ccc;
      }
      .match-sequence > table:nth-child(even) {
        background-color: #eee;
      }

      #examples-container {
        margin-top: 200px;
      }

    </style>
	
    <h1>SPI Password Strength Checker</h1>

    <input id="search-bar" type="text" size="50" />
    <div id="search-results">
    </div>


  </body>
</html>
