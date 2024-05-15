//  ANALALYZING AND REPAIRING MEMORY ISSUES:
 
 
//  analyze and fix memory issues for the following code.
 
//  HTML: 
{/* <button id="one">Button 1</button> 
<button id="two">Button 2</button> */}

// JavaScript:

var one = document.querySelector("#one");
var two = document.querySelector("#two");

function callBackExample () {

 one.removeEventListener("",callBackExample);
 two.removeEventListener("",callBackExample);
}

one.addEventListener('hover', function callBackExample(){
  one.removeEventListener();
 console.log(one); // should not print the html even after deletion
});


two.addEventListener('hover', function callBackExample(){
 two.removeEventListener();
 console.log(two); // should not print the html even after deletion
});

//  Problem: this is the “leaking DoM” issue discussed earlier. 
//  When elements are removed, they are still referenced by the callback function. 
//  to address this, put the one and two variables into a callback’s scope and remove the eventlistener after.

//  I tried to remove the event listener, so it wont retain the event nor keep printing the html.
