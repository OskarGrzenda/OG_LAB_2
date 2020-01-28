//Lab 2
var myTasksArray = [];
//A 2
function addTask(task) {
    myTasksArray.push(task);
    console.log("Item " + task + " Has been added to the array");
    return myTasksArray.length;
}
//B 2
function listAllTasks() {
    //  for(let i = 0; i < myTasksArray.length; i++){
    //}
    console.log("Array contains the following items: ");
    myTasksArray.forEach(function (task) {
        console.log(task);
    });
}
//C 2
function deleteTask(task) {
    var index = myTasksArray.indexOf(task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("item " + task + " deleted from array.");
    }
    else {
        console.log("item " + task + " not in array.");
    }
    return myTasksArray.length;
}
addTask("Complete Lab");
var numberOfTasks = addTask("Eat Breakfast");
console.log("The number of tasks to do today is " + numberOfTasks);
listAllTasks();
deleteTask("complete lab");
