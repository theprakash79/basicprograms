
/*
    Take input from the user, install third party library 
    by following this : 'prompt-sync' into your working directory.
*/
let prompt = require("prompt-sync");
let sc = prompt();

function main(){
    let firstname = sc("Enter your first name : ")
    let surname = sc("Enter your surname : ")
    let greet = `Hello mr/miss ${firstname} ${surname}`;
    console.log(greet);
}
main();
/*
    output
    -----------
    Enter your first name : Prakash
    Enter your surname : Behera
    Hello mr/miss Prakash Behera
*/