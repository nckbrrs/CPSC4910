<?php
session_start();

if (!isset($_SESSION['name']) || !isset($_SESSION['phoneNum'])) {
  echo "session vars not set";
  if (!isset($_POST['name']) || !isset($_POST['phoneNum'])) {
    echo "post vars not set";
    header("Location: /cpsc4910/student/index.html", true, 302);
    return;
  } else {
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['phoneNum'] = $_POST['phoneNum'];
  }
}

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
    <h3 id="instructions">Tap the buttons below to choose your ingredients</h3>
    <div id="errorMessage" class="errorMessage" style="visibility: hidden;"></div>
    <br>
    <div id="container">
      <div id="leftHalfDiv">
        <form id="buildSandwichForm" method="post" action="/cpsc4910/student/reviewSandwich.php">
          <div id="chooseBread">
            <h3>Choose your bread:</h3>
            <ul>
              <li><input type="radio" name="bread" value="white" id="whiteBread"/>
                <label for="whiteBread"><img src="/cpsc4910/student/img/breads/white.png" /></label>
              </li>
              <li><input type="radio" name="bread" value="wheat" id="wheatBread"/>
                <label for="wheatBread"><img src="/cpsc4910/student/img/breads/wheat.png" /></label>
              </li>
              <li><input type="radio" name="bread" value="sourdough" id="sourdoughBread"/>
                <label for="sourdoughBread"><img src="/cpsc4910/student/img/breads/sourdough.png" /></label>
              </li>
              <br>
              <li><input type="radio" name="bread" value="flour tortilla" id="flourTortilla"/>
                <label for="flourTortilla"><img src="/cpsc4910/student/img/breads/flourTortilla.png" /></label>
              </li>
              <li><input type="radio" name="bread" value="herb tortilla" id="herbTortilla"/>
                <label for="herbTortilla"><img src="/cpsc4910/student/img/breads/herbTortilla.png" /></label>
              </li>
              <li><input type="radio" name="bread" value="white sub" id="whiteSub"/>
                <label for="whiteSub"><img src="/cpsc4910/student/img/breads/whiteSub.png" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseMeats">
            <h3>Choose your meats:</h3>
            <ul>
              <li><input type="checkbox" name="meats[]" value="turkey" id="turkey" />
                <label for="turkey"><img src="/cpsc4910/student/img/meats/turkey.png"/></label>
              </li>
              <li><input type="checkbox" name="meats[]" value="ham" id="ham" />
                <label for="ham"><img src="/cpsc4910/student/img/meats/ham.png"/></label>
              </li>
              <li><input type="checkbox" name="meats[]" value="salami" id="salami" />
                <label for="salami"><img src="/cpsc4910/student/img/meats/salami.png"/></label>
              </li>
              <br>
              <li><input type="checkbox" name="meats[]" value="tuna salad" id="tunaSalad" />
                <label for="tunaSalad"><img src="/cpsc4910/student/img/meats/tunaSalad.png"/></label>
              </li>
              <li><input type="checkbox" name="meats[]" value="chicken salad" id="chickenSalad" />
                <label for="chickenSalad"><img src="/cpsc4910/student/img/meats/chickenSalad.png"/></label>
              </li>
              <li><input type="checkbox" name="meats[]" value="bacon" id="bacon" />
                <label for="bacon"><img src="/cpsc4910/student/img/meats/bacon.png"/></label>
              </li>
            </ul>
          </div>
          <div id="chooseCheeses">
            <h3>Choose your cheeses:</h3>
            <ul>
              <li><input type="checkbox" name="cheeses[]" value="american" id="american" />
                <label for="american"><img src="/cpsc4910/student/img/cheeses/american.png" /></label>
              </li>
              <li><input type="checkbox" name="cheeses[]" value="swiss" id="swiss" />
                <label for="swiss"><img src="/cpsc4910/student/img/cheeses/swiss.png" /></label>
              </li>
              <li><input type="checkbox" name="cheeses[]" value="provolone" id="provolone" />
                <label for="provolone"><img src="/cpsc4910/student/img/cheeses/provolone.png" /></label>
              </li>
              <br>
              <li><input type="checkbox" name="cheeses[]" value="cheddar" id="cheddar" />
                <label for="cheddar"><img src="/cpsc4910/student/img/cheeses/cheddar.png" /></label>
              </li>
              <li><input type="checkbox" name="cheeses[]" value="pepper jack" id="pepperJack" />
                <label for="pepperJack"><img src="/cpsc4910/student/img/cheeses/pepperJack.png" /></label>
              </li>
              <li><input type="checkbox" name="cheeses[]" value="mozzarella" id="mozzarella" />
                <label for="mozzarella"><img src="/cpsc4910/student/img/cheeses/mozzarella.png" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseVeggies">
            <h3>Choose your veggies:</h3>
            <ul>
              <li><input type="checkbox" name="veggies[]" value="lettuce" id="lettuce" />
                <label for="lettuce"><img src="/cpsc4910/student/img/veggies/lettuce.png" /></label>
              </li>
              <li><input type="checkbox" name="veggies[]" value="tomato" id="tomato" />
                <label for="tomato"><img src="/cpsc4910/student/img/veggies/tomato.png" /></label>
              </li>
              <li><input type="checkbox" name="veggies[]" value="onions" id="onions" />
                <label for="onions"><img src="/cpsc4910/student/img/veggies/onions.png" /></label>
              </li>
              <br>
              <li><input type="checkbox" name="veggies[]" value="spinach" id="spinach" />
                <label for="spinach"><img src="/cpsc4910/student/img/veggies/spinach.png" /></label>
              </li>
              <li><input type="checkbox" name="veggies[]" value="cucumbers" id="cucumbers" />
                <label for="cucumbers"><img src="/cpsc4910/student/img/veggies/cucumbers.png" /></label>
              </li>
              <li><input type="checkbox" name="veggies[]" value="black olives" id="blackOlives" />
                <label for="blackOlives"><img src="/cpsc4910/student/img/veggies/blackOlives.png" /></label>
              </li>
              <br>
              <li><input type="checkbox" name="veggies[]" value="green peppers" id="greenPeppers" />
                <label for="greenPeppers"><img src="/cpsc4910/student/img/veggies/greenPeppers.png" /></label>
              </li>
              <li><input type="checkbox" name="veggies[]" value="jalapeños" id="jalapeños" />
                <label for="jalapeños"><img src="/cpsc4910/student/img/veggies/jalapenos.png" /></label>
              </li>
              <li><input type="checkbox" name="veggies[]" value="pickles" id="pickles" />
                <label for="pickles"><img src="/cpsc4910/student/img/veggies/pickles.png" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseSauces">
            <h3>Choose your sauce(s):</h3>
            <ul>
              <li><input type="checkbox" name="sauces[]" value="mayonnaise" id="mayonnaise" />
                <label for="mayonnaise"><img src="/cpsc4910/student/img/sauces/mayonnaise.png" /></label>
              </li>
              <li><input type="checkbox" name="sauces[]" value="ranch" id="ranch" />
                <label for="ranch"><img src="/cpsc4910/student/img/sauces/ranch.png" /></label>
              </li>
              <li><input type="checkbox" name="sauces[]" value="mustard" id="mustard" />
                <label for="mustard"><img src="/cpsc4910/student/img/sauces/mustard.png" /></label>
              </li>
              <br>
              <li><input type="checkbox" name="sauces[]" value="chipotle" id="chipotle" />
                <label for="chipotle"><img src="/cpsc4910/student/img/sauces/chipotle.png" /></label>
              </li>
              <li><input type="checkbox" name="sauces[]" value="oil and vinegar" id="oilAndVinegar" />
                <label for="oilAndVinegar"><img src="/cpsc4910/student/img/sauces/oilAndVinegar.png" /></label>
              </li>
              <li><input type="checkbox" name="sauces[]" value="caesar" id="caesar" />
                <label for="caesar"><img src="/cpsc4910/student/img/sauces/caesar.png" /></label>
              </li>
              <br>
              <li><input type="checkbox" name="sauces[]" value="barbecue" id="barbecue" />
                <label for="barbecue"><img src="/cpsc4910/student/img/sauces/barbecue.png" /></label>
              </li>
              <li><input type="checkbox" name="sauces[]" value="buffalo" id="buffalo" />
                <label for="buffalo"><img src="/cpsc4910/student/img/sauces/buffalo.png" /></label>
              </li>
              <li><input type="checkbox" name="sauces[]" value="honey mustard" id="honeyMustard" />
                <label for="honeyMustard"><img src="/cpsc4910/student/img/sauces/honeyMustard.png" /></label>
              </li>
            </ul>
          </div>
          <button id="buildSandwichSubmit" onsubmit="false" type="submit" name="buildSandwichSubmit">Review your order</button>
        </form>
      </div>
      <div id="rightHalfDiv">
        <h3>Your current sandwich:</h3>
        <div id="previewSandwichDiv">
        </div>
      </div>
      <div id="clear">
      </div>
    </div>
    <script type="text/javascript">var errorMessage = "<?php echo $errorMessage; ?>";</script>
    <script type="text/javascript" src="/cpsc4910/student/buildSandwich.js"></script>
  </body>
</html>
