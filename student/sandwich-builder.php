<?php
session_start();

$errorMessage = "false";

function nameNumValidate() {
  if ((!isset($_POST['name'])) || (!isset($_POST['phoneNum']))) {
    return "You must provide a name and a phone number.";
  }
  return true;
}


if(isset($_POST['nameNumFlag'])) {
  $valid = nameNumValidate();
  echo $valid;

  if (is_bool($valid) && $valid) {
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['phoneNum'] = $_POST['phoneNum'];
  } else {
    if (is_string($valid)) {
      $errorMessage = $valid;
    }
  }
  return;
}

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Build Your Own Sandwich</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" type="text/css" href="/cpsc4910/student/sandwich-builder.css"/>
  </head>

  <body>
    <h1>Build Your Own Sandwich</h1>
    <div id="errorMessage" class="errorMessage" style="visibility: hidden;"></div>
    <br>
    <p id="instructions">Enter your name and phone number to begin:</p>
    <div id="nameNumDiv">
      <form id="nameNumForm" method="post" action="/cpsc4910/student/sandwich-builder.php">
        <label>Name: <input type="text" name="name" id="name"></label><br>
        <label>Phone Number: <input type="tel" name="phoneNum" id="phoneNum"></label><br>
        <input type="hidden" name="nameNumFlag" value="1">
        <button id="nameNumSubmit" type="submit" name="nameNumSubmit">Build Your Sandwich</button>
      </form>
    </div>
    <script type="text/javascript">var errorMessage = "<?php echo $errorMessage; ?>";</script>
    <script type="text/javascript" src="/cpsc4910/student/sandwich-builder.js"></script>
  </body>
</html>
