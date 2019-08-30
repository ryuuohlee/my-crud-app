/*
### Basic Requirements
 - [ ] Where will data be stored?(localStorage)
 - [ ] How to update data (add and delete actions)
*/

//Jquery functions
$("#add").on("click",function(){
  $(".add_task").addClass("active");
  var start = $("#start").val('');
  var priority = $("#priority").val('');
  var assignment = $("#assignment").val('');
  var due = $("#due").val('');
} )

$("#cancel").on("click",function(){
  $(".add_task").removeClass("active");
} )

$("#submit").on("click", function(){
  var start = $("#start").val();
  var priority = $("#priority").val();
  var assignment = $("#assignment").val();
  var due = $("#due").val();
  var obj = {};
  obj['start'] = start;
  obj['priority'] = priority;
  obj['assignment'] = assignment;
  obj['due'] = due;
  $(".list").append(`<tr>
  <td>${start}</td>
  <td>${priority}</td>
  <td>${assignment}</td>
  <td>${due}</td>
</tr>`)
  $(".add_task").removeClass("active");
})

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

var getKeyTask = function(key){
  return JSON.parse(window.localStorage.getItem(key));
}


