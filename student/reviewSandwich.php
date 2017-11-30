<?php
session_start();

$sandwich->bread = $_POST['bread'];
$sandwich->meats = $_POST['meats'];
$sandwich->cheeses = $_POST['cheeses'];
$sandwich->veggies = $_POST['veggies'];
$sandwich->sauces = $_POST['sauces'];
$sandwich = json_encode($sandwich);

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Sandwich Builder – Review Your Sandwich</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" type="text/css" href="/cpsc4910/student/reviewSandwich.css" />
  </head>

  <body>
    <h1>Review Your Sandwich</h1>
    <h3>Make sure your order is correct, and then click "Submit Order"</h3>
    <div id="reviewNameNumDiv">
    </div>
    <div id="reviewSandwichDiv">
    </div>
    <br>
    <form action="/cpsc4910/student/success.html">
        <input type="submit" value="Confirm Order" />
    </form>
    <script type="text/javascript" src="/cpsc4910/student/reviewSandwich.js"></script>
    <script type="text/javascript">var sandwich = <?php echo $sandwich; ?>;</script>
    <script type="text/javascript">var name = <?php echo $_SESSION['name']; ?>;</script>
    <script type="text/javascript">var phoneNum = <?php echo $_SESSION['phoneNum']; ?>;</script>
  </body>
</html>