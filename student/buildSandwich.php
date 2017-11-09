<?php
session_start();

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Sandwich Builder – Build Your Sandwich</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" type="text/css" href="/cpsc4910/student/buildSandwich.css" />
  </head>

  <body>
    <h1>Build Your Own Sandwich</h1>
    <div id="errorMessage" class="errorMessage" style="visibility: hidden;"></div>
    <br>
    <p id="instructions">Use the buttons below to choose your ingredients</p>
    <div id="buildSandwichDiv">
      <h3>Choose your bread:</h3>
      <form id="buildSandwichForm" method="post" action="/cpsc4910/student/buildSandwich.php">
        <div id="chooseBread">
          <ul>
            <li><input type="radio" name="bread" id="whiteBread" />
              <label for="whiteBread"><img src="http://lorempixel.com/100/100" /></label>
            </li>
            <li><input type="radio" name="bread" id="wheatBread" />
              <label for="wheatBread"><img src="http://lorempixel.com/100/100" /></label>
            </li>
          </ul>
        </div>
        <div id="chooseMeats">
          <ul>
            <li><input type="checkbox" id="turkey" />
              <label for="turkey"><img src="http://lorempixel.com/100/100" /></label>
            </li>
            <li><input type="checkbox" id="ham" />
              <label for="ham"><img src="http://lorempixel.com/100/100" /></label>
            </li>
          </ul>
        </div>
        <input type="hidden" name="buildSandwichFlag" value="1">
        <button id="buildSandwichSubmit" type="submit" name="buildSandwichSubmit">Review your order</button>
      </form>
    </div>
    <script type="text/javascript">var errorMessage = "<?php echo $errorMessage; ?>";</script>
    <script type="text/javascript" src="/cpsc4910/student/buildSandwich.js"></script>
  </body>
</html>
