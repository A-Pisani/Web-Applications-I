"use strict" ;

function Task(desc, urge, pri, deadline) {
    //Task Properties
    this.description = desc;
    this.urgency = urge;
    this.privacy = pri;
    this.deadline = deadline;
    //Task Methods
    this.printOut = () => {console.log(`[D]: ${this.description} [U]: ${this.urgency} [P]: ${this.privacy} [D]: ${this.deadline}`);}
  }

  let tasks = [];
  let i = 0;

  const id = setInterval(
    function(){
      console.log("\n ***TASK MANAGER***\n");
      console.log("1. Insert a new task;");
    //console.log("2. Remove a  task;");
    console.log("21. Remove a  task given a description;");
    console.log("22. Remove a  task given a date;");
    console.log("3. Show all existing tasks, in alphabetic order;");
    console.log("4. Close the program.");
    var readlineSync = require('readline-sync');
    var choise = readlineSync.question('Enter your choise: ');
    //operations
    if(choise == 1){
      let now = new Date();
        //console.log(now); 
        let value1 = readlineSync.question('\nEnter description: ');
        let value2 = readlineSync.question('Enter urgency: ') || "not urgent";
        let value3 = readlineSync.question('Enter privacy: ') || "private";
        let value4 = new Date(readlineSync.question('Enter deadline: '));
        
      //automatically delete a task when it expires
      //(missing development of date without time ...)
       setTimeout( function() {
              for (let j=0; j< tasks.length;j++){
                if(tasks[j] && tasks[j].deadline.getTime() <= new Date().getTime())
                    delete tasks[j];
              }
            }, value4.getTime()-now.getTime()); 
        tasks[i++] = new Task(value1, value2, value3, value4);
    }else if(choise == 21){
      let value5 = readlineSync.question('Enter description of task to delete: ');
      for (let j=0; j< tasks.length;j++){
        if(tasks[j].description == value5){
          delete tasks[j];
        }
      } 
    }else if(choise == 22){
      //modify and delete all tasks with a given deadline
      let value6 = new Date(readlineSync.question('Enter deadline of task to delete: '));
      for (let j=0; j< tasks.length;j++){
        if(tasks[j].deadline && tasks[j].deadline.getTime() == value6.getTime()){
          delete tasks[j];
        }
      }
    }else if(choise == 3){
      console.log("\nList of tasks: ");
      tasks.sort((a, b) => {
        if(a.description < b.description) return -1;
        if(a.description > b.description) return 1;
        return 0;
      })
      for (let j=0; j< tasks.length;j++){
        if(tasks[j]){
          tasks[j].printOut();
        }
      }
    }else if(choise == 4){
      clearInterval(id);
    }
    }, 1000)

    



