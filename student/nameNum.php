<?php
session_start();
$_SESSION = array();

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Sandwich Builder – Enter Your Name and Number</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" type="text/css" href="/cpsc4910/student/nameNum.css" />
  </head>

  <body>
    <h1>Build Your Own Sandwich</h1>
    <h3 id="instructions">Enter your name and phone number to begin:</h3>
    <div id="errorMessage" class="errorMessage" style="visibility: hidden;"></div>
    <br>
    <div id="nameNumDiv">
      <form id="nameNumForm" method="post" action="/cpsc4910/student/buildSandwich.php">
        <label>Name:<br><input type="text" name="name" id="name"></label><br><br>
        <label>Phone Number:<br><input type="tel" name="phoneNum" id="phoneNum"></label><br><br>
        <button id="nameNumSubmit" type="submit" name="nameNumSubmit">Build Your Sandwich</button>
      </form>
    </div>
    <script type="text/javascript">var errorMessage = "<?php echo $errorMessage; ?>";</script>
    <script type="text/javascript" src="/cpsc4910/student/nameNum.js"></script>
  </body>
</html> 
