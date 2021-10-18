
var pageDate = document.querySelector('#currentDay');
var timeblockEl = document.querySelector('#timeblockEl');

var toDo = {};
var tasks = [];

var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    pageDate.textContent = currentDate;


setInterval(function(){
    
    var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    pageDate.textContent = currentDate;

    
    
}, 30000);

var momentHour = moment().format('h');
// the current hour needs to reflect the status of the tasks by changing their color and updating every minute or sod
// setInterval(function() {

// function updateTasks() {

//     // if (parseInt(currentHour) === )

// }

// updateTasks();
// }, 10000)





$(".textarea").on("click", "p", function() {
    //current text
  var text = $(this).text().trim();

  //replace with a new text area
  var textInput = $('<textarea>').val(text);
  $(this).replaceWith(textInput);

  textInput.trigger('focus');
    
});

// text area was unfocused
$('.textarea').on('blur', 'textarea', function() {
    //get current value of textarea
    var text = $(this).val();

    var itemP = $('<p>').text(text);

    $(this).replaceWith(itemP);

   
});

    
// localStorage.setItem("toDo", JSON.stringify(toDo));


//function to save the item when the save button is clicked

$('.time').on("click", '.saveBtn', function(){
    // var btnParent = 

    // var taskText = $(this).parent('.time').children(".textarea").children("p").text();
    // console.log(taskText);

    // var dataTime = this.getAttribute("data-time");
    // console.log(dataTime);

    
    saveTasks();

});


function saveTasks() {

    var taskArray = $('.textarea').children($('.textarea'));
    

      
    console.log(taskArray);

    for (i = 0; i < taskArray.length; i++) {
        var currentTask = taskArray[i];

        var taskText = $(currentTask).text();
        
        tasks.push(taskText);

        
    };
    localStorage.setItem("tasks", tasks);
};
     

    // $('.time').forEach(console.log($('.time').children()));

    // $('.time').forEach(console.log($('.time').children()));



    // var taskText = 

    // tempArr = [];
    // tempArr.push({
    //     text: taskText,
    //     time: dataTime

    // });
    // console.log(tempArr);
    // localStorage.setItem("tasks", JSON.stringify(toDo));
function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("task"));

    if (!tasks) {
        tasks = {};
    }
    $.each(tasks, function() {
        
        
        for (i = 0; i < tasks.length; i++) {

            
        }


    });
};
var currentHour = $("p[data-time]");
