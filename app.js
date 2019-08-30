/*
### Basic Requirements
 - [ ] Where will data be stored?(localStorage)
 - [ ] How to update data (add and delete actions)
*/

//Jquery functions
//add button
$("#add").on("click",function(){
  $(".add_task").addClass("active");
  clearData();
} )

//cancel button
$("#cancel").on("click",function(){
  $(".add_task").removeClass("active");
} )

//submit button
$("#submit").on("click", function(){
  var start = $("#start").val();
  var priority = $("#priority").val();
  var assignment = $("#assignment").val();
  var due = $("#due").val();
  var obj = {}
  obj['start'] = start;
  obj['priority'] = priority;
  obj['assignment'] = assignment;
  obj['due'] = due;
  obj['id'] = taskNum();
  //getData();
  var task = JSON.stringify(obj);
  $(".list").append(`<tr class="assignment">
  <td><input type="checkbox" class="selector"></td>
  <td>${start}</td>
  <td>${priority}</td>
  <td>${assignment}</td>
  <td>${due}</td>
  </tr>`)
  addTask(obj.id, obj);
  $(".add_task").removeClass("active");
})

//delete button
$("#delete").on("click", function(){
  $(".assignment").remove()
})


//the date picker input
$(function(){
$(".datepicker").datepicker();
})

//localStorage functions
var addTask = function(key, value){
  value = JSON.stringify(value);
  return window.localStorage.setItem(key, value);
}

var getTask = function(key){
  return JSON.parse(window.localStorage.getItem(key));
}

var updateTask = function(key, value) {
  value = JSON.stringify(value);
  return window.localStorage.setItem(key, value);
};


//pop-up window functions
var clearData = function(){
  var start = $("#start").val('');
  var priority = $("#priority").val('');
  var assignment = $("#assignment").val('');
  var due = $("#due").val('');
}

var createId = function(){
  var taskCount = 0;
  if(getTask('taskCount') !== null){
    taskCount = getTask('taskCount');
  } else {
    taskCount = 0;
    addTask('taskCount', 0);
  }
  return function(){
    var taskNumber = 'task' + taskCount;
    taskCount++;
    updateTask('taskCount', taskCount);
    return taskNumber;
  }
}

var taskNum = createId()

var getData = function(){
  var start = $("#start").val();
  var priority = $("#priority").val();
  var assignment = $("#assignment").val();
  var due = $("#due").val();
  var task = {};
}


