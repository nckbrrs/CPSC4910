<?php
session_start();

// if name and number already stored, redirect to sandwich-builder.php
if (isset($_SESSION['name']) && isset($_SESSION['phoneNum'])) {
  header("Location: /cpsc4910/student/buildSandwich.php", true, 302);
}

// to be written to JS later in order to decide whether to render an error
$errorMessage = "false";

// form has been submitted, so save session variables
if(isset($_POST['nameNumFlag'])) {
  $_SESSION['name'] = $_POST['name'];
  $_SESSION['phoneNum'] = $_POST['phoneNum'];
  header("Location: /cpsc4910/student/buildSandwich.php", true, 302);
}

// FOR TESTING ONLY VVV
/*$_SESSION = array();
session_destroy();*/
// FOR TESTING ONLY ^^^
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Sandwich Builder – Enter Your Name and Number</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <style type="text/css">
      html {
        display: block;
        margin: auto;
        text-align: center;
        font-family: sans-serif;
      }
    </style>
  </head>

  <body>
    <h1>Build Your Own Sandwich</h1>
    <div id="errorMessage" class="errorMessage" style="visibility: hidden;"></div>
    <br>
    <p id="instructions">Enter your name and phone number to begin:</p>
    <div id="nameNumDiv">
      <form id="nameNumForm" method="post" action="/cpsc4910/student/nameNum.php">
        <label>Name: <input type="text" name="name" id="name"></label><br>
        <label>Phone Number: <input type="tel" name="phoneNum" id="phoneNum"></label><br>
        <input type="hidden" name="nameNumFlag" value="1">
        <button id="nameNumSubmit" type="submit" name="nameNumSubmit">Build Your Sandwich</button>
      </form>
    </div>
    <script type="text/javascript">var errorMessage = "<?php echo $errorMessage; ?>";</script>
    <script type="text/javascript" src="/cpsc4910/student/nameNum.js"></script>
  </body>
</html>
