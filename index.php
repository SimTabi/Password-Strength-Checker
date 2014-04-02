
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
  <body class="center_div">

    <h1>SPI Password Strength Checker</h1>


    <div class="field">
    <input class="password_style" type="text" name="password_input" id="password_input"/>
    </div>

    <div id="password_results">
    </div>


  </body>
</html>
