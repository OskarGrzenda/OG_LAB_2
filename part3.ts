import {tasksInterface} from './interface';

class Todos implements tasksInterface{
    myTasksArray: Array<string> = [];

     addTask(task: string): number {
        this.myTasksArray.push(task);
        console.log("Item " + task + " Has been added to the array");
        return this.myTasksArray.length;
    }

     listAllTasks():void{
  //  for(let i = 0; i < myTasksArray.length; i++){
//}
    console.log("Array contains the following items: ");
    this.myTasksArray.forEach(function(task){
        console.log(task);
    })
    
}

//C 2
 deleteTask (task:string):number{
   let index:number = this.myTasksArray.indexOf(task);
   if(index > -1)
   {
    this.myTasksArray.splice(index,1);
     console.log("item " + task + " deleted from array.");
   }
   else 
   {
       console.log("item " + task + " not in array.")
   }
   return this.myTasksArray.length;
}


}

let todo = new Todos();
todo.addTask("Complete Lab");

todo.listAllTasks();
todo.deleteTask("Complete Lab");