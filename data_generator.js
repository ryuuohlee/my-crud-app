/*
### Basic Requirements
 - [ ] Where will data be stored?(localStorage)
 - [ ] How to update data (add and delete actions)
*/

//Jquery functions
$("#add").on("click",function(){
  $(".add_task").addClass("active");
} )

$("#cancel").on("click",function(){
  $(".add_task").removeClass("active");
} )

$(function(){
$(".datepicker").datepicker();
})

//localStorage functions
var addTask = function(key, value){
  value = JSON.stringify(value);
  return window.localStorage.setItem(key, value);
}

var deleteTask = function(key){
  return window.localStorage.removeItem(key);
}

