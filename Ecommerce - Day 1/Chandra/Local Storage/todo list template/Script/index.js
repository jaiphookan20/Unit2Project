

document.querySelector("form").addEventListener("submit", myFunction);
// var todoArr;

// // if(null) [] else JSON.parse(localStorage.getItem("todoData"))

// if (localStorage.getItem("todoData") == null) {
//   todoArr = [];
// } else {
//   todoArr = JSON.parse(localStorage.getItem("todoData"));
// }

var todoArr=JSON.parse(localStorage.getItem("todoData"))||[]


function myFunction() {
  event.preventDefault();
  console.log("inside function");
  var name = document.querySelector("#name").value;
  var qty = document.querySelector("#qty").value;
  var priority = document.querySelector("#priority").value;

  //Check:-- getting output untill this part;
  console.log(name, qty, priority) 


  //Storing the values submitted as input to the form each time in an object 
  // assigning different variables for each provided input

  var todoObj = {
    itemName: name,
    itemQty: qty,
    itemPriority: priority,
  };

  // Check: to see if your code is working
  //console.log(todoObj) 
  
  //Note: We push data into localStorage each time as an array of Objects (thus why we are pushing the object into an array first)
  todoArr.push(todoObj);
  
  // Check: to see if your code is working
  //console.log(todoArr) 
  
  //Pushing the data into localStorage
  localStorage.setItem("todoData", JSON.stringify(todoArr));

  
}
// or operator- if 1st is true will it go to second condn?
// console.log(true || false)
// console.log(false || true)
// // or - it is true even one statement is true

// console.log(true || true)

console.log(false || null)

// or- if 1st statement is false- it will retur seocnd statement even if it false or true

console.log(0 || null)

console.log(null || 0)

console.log(null || [])

console.log(localStorage.getItem("todoData") || []) // 








