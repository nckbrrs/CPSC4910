<?php
session_start();
$_SESSION = array();
session_start();

echo $_POST['bread'];

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
    <div id="container">
      <div id="buildSandwichDiv">
        <p id="instructions">Tap the buttons below to choose your ingredients<br></p>
        <form id="buildSandwichForm" method="post" action="/cpsc4910/student/buildSandwich.php">
          <div id="chooseBread">
            <h3>Choose your bread:</h3>
            <ul>
              <li><input type="radio" name="bread" value="whiteBread" id="whiteBread"/>
                <label for="whiteBread"><img src="http://boulangeriestmethode.com/data/N2fZiuOP/lesgrains-bleentier-bread-slice.png" /></label>
              </li>
              <li><input type="radio" name="bread" value="wheatBread" id="wheatBread"/>
                <label for="wheatBread"><img src="http://boulangeriestmethode.com/data/WpJTN5EL/lesgrains-9grains-bread-slice.png" /></label>
              </li>
              <li><input type="radio" name="bread" value="sourdoughBread" id="sourdoughBread"/>
                <label for="sourdoughBread"><img src="http://catalog.auntmillies.com/img/Bakehouse/Sliced/07241S_2.png" /></label>
              </li>
              <br>
              <li><input type="radio" name="bread" value="flourTortilla" id="flourTortilla"/>
                <label for="flourTortilla"><img src="http://www.missionfoodservice.com/imagegen.ashx?image=%2Fmedia%2F1045%2Fheat-pressed-flourcob.png&width=205" /></label>
              </li>
              <li><input type="radio" name="bread" value="herbTortilla" id="herbTortilla"/>
                <label for="herbTortilla"><img src="http://www.missionfoodservice.com/imagegen.ashx?image=%2Fmedia%2F1052%2Fspinach-herb-wrap-20119-10251-cob.png&width=255" /></label>
              </li>
              <li><input type="radio" name="bread" value="whiteSub" id="whiteSub"/>
                <label for="whiteSub"><img src="https://www.burryfoods.com/wp-content/uploads/2016/09/70037_SubRoll_Clip.png" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseMeats">
            <h3>Choose your meats:</h3>
            <ul>
              <li><input type="checkbox" value="turkey" id="turkey" />
                <label for="turkey"><img src="http://lorempixel.com/100/100"/></label>
              </li>
              <li><input type="checkbox" value="ham" id="ham" />
                <label for="ham"><img src="http://lorempixel.com/100/100"/></label>
              </li>
              <li><input type="checkbox" value="salami" id="salami" />
                <label for="salami"><img src="http://lorempixel.com/100/100"/></label>
              </li>
              <br>
              <li><input type="checkbox" value="tunaSalad" id="tunaSalad" />
                <label for="tunaSalad"><img src="http://lorempixel.com/100/100"/></label>
              </li>
              <li><input type="checkbox" value="chickenSalad" id="chickenSalad" />
                <label for="chickenSalad"><img src="http://lorempixel.com/100/100"/></label>
              </li>
            </ul>
          </div>
          <div id="chooseCheeses">
            <h3>Choose your cheeses:</h3>
            <ul>
              <li><input type="checkbox" value="swiss" id="swiss" />
                <label for="swiss"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <li><input type="checkbox" value="swiss" id="provolone" />
                <label for="provolone"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <li><input type="checkbox" value="cheddar" id="cheddar" />
                <label for="cheddar"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <br>
              <li><input type="checkbox" value="pepperJack" id="pepperJack" />
                <label for="pepperJack"><img src="http://lorempixel.com/100/100" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseVeggies">
            <h3>Choose your veggies:</h3>
            <ul>
              <li><input type="checkbox" value="lettuce" id="lettuce" />
                <label for="lettuce"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <li><input type="checkbox" value="tomato" id="tomato" />
                <label for="tomato"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <li><input type="checkbox" value="spinach" id="spinach" />
                <label for="spinach"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <br>
              <li><input type="checkbox" value="onions" id="onions" />
                <label for="onions"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <li><input type="checkbox" value="cucumbers" id="cucumbers" />
                <label for="cucumbers"><img src="http://lorempixel.com/100/100" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseSauces">
            <h3>Choose your sauce(s):</h3>
            <ul>
              <li><input type="checkbox" value="ranch" id="ranch" />
                <label for="ranch"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <li><input type="checkbox" value="mustard" id="mustard" />
                <label for="mustard"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <li><input type="checkbox" value="chipotle" id="chipotle" />
                <label for="chipotle"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <br>
              <li><input type="checkbox" value="olive oil" id="oliveOil" />
                <label for="oliveOil"><img src="http://lorempixel.com/100/100" /></label>
              </li>
              <li><input type="checkbox" value="mayonnaise" id="mayonnaise" />
                <label for="mayonnaise"><img src="http://lorempixel.com/100/100" /></label>
              </li>
            </ul>
          </div>
          <input type="hidden" name="buildSandwichFlag" value="1">
          <button id="buildSandwichSubmit" type="submit" name="buildSandwichSubmit">Review your order</button>
        </form>
      </div>
      <div id="previewSandwichDiv">
        <h1>Live sandwich preview here</h1>
      </div>
      <div id="clear">
      </div>
    </div>
    <script type="text/javascript">var errorMessage = "<?php echo $errorMessage; ?>";</script>
    <script type="text/javascript" src="/cpsc4910/student/buildSandwich.js"></script>
  </body>
</html>
