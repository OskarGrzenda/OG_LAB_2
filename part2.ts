//Lab 2
let myTasksArray:Array<string> = [];

//A 2
function addTask(task:string):number 
{
    myTasksArray.push(task);
    console.log("Item " + task + " Has been added to the array");
    return myTasksArray.length;
}

//B 2
function listAllTasks():void
{
  //  for(let i = 0; i < myTasksArray.length; i++){
//}
    console.log("Array contains the following items: ")
    myTasksArray.forEach(function(task){
        console.log(task);
    })
    
}

//C 2
function deleteTask (task:string):number
{
   let index:number = myTasksArray.indexOf(task);
   if(index > -1)
   {
     myTasksArray.splice(index,1);
     console.log("item " + task + " deleted from array.");
   }
   else 
   {
       console.log("item " + task + " not in array.")
   }
   return myTasksArray.length;
}

addTask("Complete Lab");
let numberOfTasks:number = addTask("Eat Breakfast");
console.log("The number of tasks to do today is " + numberOfTasks);
listAllTasks();

deleteTask("complete lab");



