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
              <li><input type="radio" name="bread" value="white" id="whiteBread"/>
                <label for="whiteBread"><img src="/cpsc4910/student/img/breads/white" /></label>
              </li>
              <li><input type="radio" name="bread" value="wheat" id="wheatBread"/>
                <label for="wheatBread"><img src="/cpsc4910/student/img/breads/wheat" /></label>
              </li>
              <li><input type="radio" name="bread" value="sourdough" id="sourdoughBread"/>
                <label for="sourdoughBread"><img src="/cpsc4910/student/img/breads/sourdough" /></label>
              </li>
              <br>
              <li><input type="radio" name="bread" value="flour tortilla" id="flourTortilla"/>
                <label for="flourTortilla"><img src="/cpsc4910/student/img/breads/flourTortilla" /></label>
              </li>
              <li><input type="radio" name="bread" value="herb tortilla" id="herbTortilla"/>
                <label for="herbTortilla"><img src="/cpsc4910/student/img/breads/herbTortilla" /></label>
              </li>
              <li><input type="radio" name="bread" value="white sub" id="whiteSub"/>
                <label for="whiteSub"><img src="/cpsc4910/student/img/breads/whiteSub" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseMeats">
            <h3>Choose your meats:</h3>
            <ul>
              <li><input type="checkbox" value="turkey" id="turkey" />
                <label for="turkey"><img src="/cpsc4910/student/img/meats/turkey"/></label>
              </li>
              <li><input type="checkbox" value="ham" id="ham" />
                <label for="ham"><img src="/cpsc4910/student/img/meats/ham"/></label>
              </li>
              <li><input type="checkbox" value="salami" id="salami" />
                <label for="salami"><img src="/cpsc4910/student/img/meats/salami"/></label>
              </li>
              <br>
              <li><input type="checkbox" value="tuna salad" id="tunaSalad" />
                <label for="tunaSalad"><img src="/cpsc4910/student/img/meats/tunaSalad"/></label>
              </li>
              <li><input type="checkbox" value="chicken salad" id="chickenSalad" />
                <label for="chickenSalad"><img src="/cpsc4910/student/img/meats/chickenSalad"/></label>
              </li>
              <li><input type="checkbox" value="bacon" id="bacon" />
                <label for="bacon"><img src="/cpsc4910/student/img/meats/bacon"/></label>
              </li>
            </ul>
          </div>
          <div id="chooseCheeses">
            <h3>Choose your cheeses:</h3>
            <ul>
              <li><input type="checkbox" value="american" id="american" />
                <label for="american"><img src="/cpsc4910/student/img/cheeses/american" /></label>
              </li>
              <li><input type="checkbox" value="swiss" id="swiss" />
                <label for="swiss"><img src="/cpsc4910/student/img/cheeses/swiss" /></label>
              </li>
              <li><input type="checkbox" value="provolone" id="provolone" />
                <label for="provolone"><img src="/cpsc4910/student/img/cheeses/provolone" /></label>
              </li>
              <br>
              <li><input type="checkbox" value="cheddar" id="cheddar" />
                <label for="cheddar"><img src="/cpsc4910/student/img/cheeses/cheddar" /></label>
              </li>
              <li><input type="checkbox" value="pepper jack" id="pepperJack" />
                <label for="pepperJack"><img src="/cpsc4910/student/img/cheeses/pepperJack" /></label>
              </li>
              <li><input type="checkbox" value="mozzarella" id="mozzarella" />
                <label for="mozzarella"><img src="/cpsc4910/student/img/cheeses/mozzarella" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseVeggies">
            <h3>Choose your veggies:</h3>
            <ul>
              <li><input type="checkbox" value="lettuce" id="lettuce" />
                <label for="lettuce"><img src="/cpsc4910/student/img/veggies/lettuce" /></label>
              </li>
              <li><input type="checkbox" value="tomato" id="tomato" />
                <label for="tomato"><img src="/cpsc4910/student/img/veggies/tomato" /></label>
              </li>
              <li><input type="checkbox" value="onions" id="onions" />
                <label for="onions"><img src="/cpsc4910/student/img/veggies/onions" /></label>
              </li>
              <br>
              <li><input type="checkbox" value="spinach" id="spinach" />
                <label for="spinach"><img src="/cpsc4910/student/img/veggies/spinach" /></label>
              </li>
              <li><input type="checkbox" value="cucumbers" id="cucumbers" />
                <label for="cucumbers"><img src="/cpsc4910/student/img/veggies/cucumbers" /></label>
              </li>
              <li><input type="checkbox" value="black olives" id="blackOlives" />
                <label for="blackOlives"><img src="/cpsc4910/student/img/veggies/blackOlives" /></label>
              </li>
              <br>
              <li><input type="checkbox" value="green peppers" id="greenPeppers" />
                <label for="greenPeppers"><img src="/cpsc4910/student/img/veggies/greenPeppers" /></label>
              </li>
              <li><input type="checkbox" value="jalapeños" id="jalapeños" />
                <label for="jalapeños"><img src="/cpsc4910/student/img/veggies/jalapenos" /></label>
              </li>
              <li><input type="checkbox" value="pickles" id="pickles" />
                <label for="pickles"><img src="/cpsc4910/student/img/veggies/pickles" /></label>
              </li>
            </ul>
          </div>
          <div id="chooseSauces">
            <h3>Choose your sauce(s):</h3>
            <ul>
              <li><input type="checkbox" value="mayonnaise" id="mayonnaise" />
                <label for="mayonnaise"><img src="/cpsc4910/student/img/sauces/mayonnaise" /></label>
              </li>
              <li><input type="checkbox" value="ranch" id="ranch" />
                <label for="ranch"><img src="/cpsc4910/student/img/sauces/ranch" /></label>
              </li>
              <li><input type="checkbox" value="mustard" id="mustard" />
                <label for="mustard"><img src="/cpsc4910/student/img/sauces/mustard" /></label>
              </li>
              <br>
              <li><input type="checkbox" value="chipotle" id="chipotle" />
                <label for="chipotle"><img src="/cpsc4910/student/img/sauces/chipotle" /></label>
              </li>
              <li><input type="checkbox" value="oil and vinegar" id="oilAndVinegar" />
                <label for="oilAndVinegar"><img src="/cpsc4910/student/img/sauces/oilAndVinegar" /></label>
              </li>
              <li><input type="checkbox" value="caesar" id="caesar" />
                <label for="caesar"><img src="/cpsc4910/student/img/sauces/caesar" /></label>
              </li>
              <br>
              <li><input type="checkbox" value="barbecue" id="barbecue" />
                <label for="barbecue"><img src="/cpsc4910/student/img/sauces/barbecue" /></label>
              </li>
              <li><input type="checkbox" value="buffalo" id="buffalo" />
                <label for="buffalo"><img src="/cpsc4910/student/img/sauces/buffalo" /></label>
              </li>
              <li><input type="checkbox" value="honey mustard" id="honeyMustard" />
                <label for="honeyMustard"><img src="/cpsc4910/student/img/sauces/honeyMustard" /></label>
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
