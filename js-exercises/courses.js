"use strict";

const courseList = "Web applications I, Computer architectures, Data science and database technology, Computer network technologies and services, Information systems security, Software engineering, System and device programming";

const courses = courseList.split(",");

/* for(let i=0; i< courses.length; i++){
    //Strings are immutable! -> String methods do not modify strings in place.
    //TRIM -> Removes leading and trailing white space and line terminator characters from a string.
    courses[i] = courses[i].trim();      
} */

for(let [i,c] of courses.entries() ){   //Returns an iterable of key, value pairs for every entry in the array
    courses[i] = c.trim(); 
}

//create acronyms for the course

const acronyms = [];

for(const c of courses){
    const words = c.split(" ");
    let acronym = '';
    for(const w of words){
        acronym += w[0].toUpperCase();
    }
    acronyms.push(acronym)
}

const output = [];
for( let [i,a] of acronyms.entries()){
    //output.push(a + ' - ' + courses[i]);
    output.push(`${a} - ${courses[i]}`);
}

output.sort();
console.log(output);

/* console.log(courses);
console.log(acronyms); */