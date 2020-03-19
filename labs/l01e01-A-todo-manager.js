"use strict" ;

function Task(desc, urge, pri, deadline) {
    //Task Properties
    this.description = desc;
    this.urgency = urge;
    this.privacy = pri;
    this.deadline = deadline;
    //Task Methods
    this.printOut = () => {console.log(`${this.description} ${this.urgency} ${this.privacy} ${this.deadline}`);}
  }

  let tasks = [];
  let i = 0;

  do{
    console.log("1. Insert a new task;");
    //console.log("2. Remove a  task;");
    console.log("2.1. Remove a  task given a description;");
    console.log("2.2 Remove a  task given a date;");
    console.log("3. Show all existing tasks, in alphabetic order;");
    console.log("4. Close the program.");
    var readlineSync = require('readline-sync');
    var choise = readlineSync.question('Enter your choise: ');
    //operations
    if(choise == 1){
        let value1 = readlineSync.question('Enter description: ');
        let value2 = readlineSync.question('Enter urgency: ');
        let value3 = readlineSync.question('Enter privacy: ');
        let value4 = new Date(readlineSync.question('Enter deadline: '));
        tasks[i++] = new Task(value1, value2, value3, value4);
    }else if(choise == 21){
      let value5 = readlineSync.question('Enter description of task to delete: ');
      for (let j=0; j< tasks.length;j++){
        if(tasks[j].description == value5){
          delete tasks[j];
        }
      } 
    }else if(choise == 22){
      let value6 = new Date(readlineSync.question('Enter deadline of task to delete: '));
      for (let j=0; j< tasks.length;j++){
        if(tasks[j].deadline && tasks[j].deadline.getTime() == value6.getTime()){
          delete tasks[j];
        }
      }
    }else if(choise == 3){
      console.log("List of tasks: ");
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
    }
  }while(choise != 4);



