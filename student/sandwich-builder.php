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
    <p id="instructions">Enter your name and phone number to begin:</p>
    <div>
      <form id="name-and-number" method="post" action="/cpsc4910/student/sandwich-builder-2.php">
        <label>Name: <input type="text" name="name" id="name"></label><br>
        <label>Phone Number: <input type="tel" name="phone_num" id="phone_num"></label><br>
        <input type="hidden" name="comingBack" value="1">
        <button id="buildYourSandwich" type="submit" name="buildYourSandwich">Build Your Sandwich</button>
      </form>
    </div>
    <script type="text/javascript" src="/cpsc4910/student/sandwich-builder.js"></script>
  </body>
</html>
