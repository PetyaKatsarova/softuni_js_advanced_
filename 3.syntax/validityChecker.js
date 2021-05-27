function validityChecker(x_1,y_1,x_2,y_2){
   //x_1,y_1 to 0,0 if valid
    isValid = true;
    let one = Math.sqrt((x_1*x_1) + (y_1*y_1));
    let two = Math.sqrt((x_2*x_2) + (y_2*y_2));
    let three = Math.sqrt((x_2-x_1)*(x_2-x_1) + (y_2-y_1)*(y_2-y_1));
    // console.log(one + ' / ' + two + ' / ' + three);
 
    if((one % 1 != 0)){
        isValid = false;
        console.log(`{${x_1}, ${y_1}} to {0, 0} is invalid`);
    }else{
        console.log(`{${x_1}, ${y_1}} to {0, 0} is valid`);
    }
    if((two % 1 != 0)){
        isValid = false;
        console.log(`{${x_2}, ${y_2}} to {0, 0} is invalid`);
    }else{
    console.log(`{${x_2}, ${y_2}} to {0, 0} is valid`);
    }
    if((three % 1 != 0)){
        isValid = false;
        console.log(`{${x_1}, ${y_1}} to {${x_2}, ${y_2}} is invalid`);
    }else{
    console.log(`{${x_1}, ${y_1}} to {${x_2}, ${y_2}} is valid`);
    }
}
validityChecker(3,0,0,4);
//{3,0} to {0,0} is valid 
//{0,4} to {0,0} is valid 
//{3,0} to {0,4} is valid 
validityChecker(3,1,0,4);
