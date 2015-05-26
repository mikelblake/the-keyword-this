//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      dynamic functions

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      implicit: to the left of the dot at call time
      explicit: .call or .apply. or .bind allows you to specify the this keyword when calling a function
      new
      default: if nothing left of the dot...defaults to the window object

  // 3) What is the difference between call and apply?

      //Answer
      apply allows passing in an array for arguments

  // 4) What does .bind do?

      //Answer
      like .call but binds to a whole new function that you can use later

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current objects username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var getUsername = function(){
  console.log()
}
var user = {
  username: 'mikel',
  email: 'mikel.blake@gmail.com',
  getUsername: function() {
    return user.username;
  }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking move on the write object (prius vs mustang).

  //Code Here


//Continuation of previous problem
var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here


//New Problem

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  return this.username;
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.