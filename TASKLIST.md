# Task List
CPSC 4910 / Seminar in Professional Issues II / Clemson University / Herzog / Fall 2017

Student-side front-end
- page where student enters name and phone number (DONE)
- page where student builds sandwich (DONE)
- - graphical buttons corresponding to each individual ingredient (DONE)
- - "live preview" of current sandwich ingredients as it is being built (DONE)
- page where student reviews and confirms sandwich order (DONE)
- page with "success" message that redirects to new order page (DONE)

Employee-side front-end
- page where employee views currently waiting-to-be-made sandwich orders
- - display sandwiches as individual simple text descriptions that shows student's name and phone number
- - includes a button at bottom of each order that sends SMS to student and removes order from page

Back-end
- function to create new sandwich object in database (called after student submits order)
function to get list of all existing sandwich orders (also called after every sandwich submission)
function to delete sandwich object from database (called after employee notifies student that sandwich is ready)
