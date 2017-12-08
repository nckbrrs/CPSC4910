<?php
session_start();
$_SESSION = array();
$_POST = array();
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Sandwich Builder – Success!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <style type="text/css">
      html {
        background-color: #F66733;
        color: black;
        margin: auto;
        text-align: center;
        font-family: sans-serif;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <h1>Success!</h1>
    <p>Your order has been sent to the dining hall employee.</p>
    <p>You will be notified when your sandwich is ready to be picked up.</p>
    <form action="/cpsc4910/student/nameNum.php">
        <input type="submit" value="Start a new order" />
    </form>
  </body>
</html>
 
