"use strict";

const scores = [ 21, 28, 18, 25, 27, 24, 20, 30, 28];
const betterScores = [...scores];        //Array.from(scores);

/* Note: by default always think of declaring variables with the CONST keyword
Only if the variable is expected to change during the course of the program use LET. */

/* if we persorm the below operation it will work fine even if we declare variable "scores" as CONST.
it is so because we defined as CONST the REFERENCE not the VALUE of the OBJECT REFERENCED by that variable.

scores[0] = 26;     //works fine!!
scores = [3];       // returns an error since we are referencing another array!! */

//find and eliminate the two lowest scores  [ C way]
/*let minscore = 100;
 for(let i = 0; i < scores.length; i++){
    if(scores[i] < minscore){
        minscore = scores[i];
    }
} */

//find and eliminate the two lowest scores  [ JS way]
/* for(let score of scores){           //score can be CONST because for each iteration we create a new variable...
    if(score < minscore){
        minscore = score;
    }
} */

/* let minscore = Math.min(scores);        //returns NaN ! :(
Math.min(3, 2, 5);      //It works, it doesn't work if I pass an array to it...
Math.min([3, 2, 5]);    // from specs: returns the number with the lowest value passed to it. THE NUMBER */

//find two lowest scores  
let minscore = Math.min(...betterScores);     //HINT: use the spread operator :)
//eliminate the two lowest scores  
let pos = betterScores.indexOf(minscore);     //Returns the index of the first occurrence of a value in an array.
betterScores.splice(pos, 1)                   //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(scores)
console.log(minscore)

minscore = Math.min(...betterScores);     
pos = betterScores.indexOf(minscore);     
betterScores.splice(pos, 1)                   

console.log(minscore)

//compute the avg of the bestScorses
let avg = 0;
for(const s of betterScores){
    avg += s;
}
avg /= betterScores.length;     
avg = Math.round(avg);      //rounded to the nearest integer

//add the avg to the list of scores (PUSH method)
betterScores.push(avg, avg);
console.log(betterScores);
