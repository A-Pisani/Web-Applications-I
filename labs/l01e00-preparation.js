"use strict" ;
/* Create a new project that, given a series of words in an array, returns a new word made of the first two and the last two characters of the original word. 
e.g., ‘spring’ yields ‘spng’ 
If the word is shorter than two characters, return the empty string. The series of words can be directly stored in the source code. */

const array = ["spring", "a", "an", "polar"];

for(let w of array){
    if(w.length < 3)
        console.log("");
    else{
        console.log(w.slice(0,2) + w.slice(w.length-2, w.length));
    }
}

//console.log(array);

