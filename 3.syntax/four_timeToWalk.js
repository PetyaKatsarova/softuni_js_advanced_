// WORK IN PROGRESS: .....
// calculate how long will take the student to get to uni
function timeToWalk(steps, lengthOfStep, speedInKmPerHr){
    let distance = steps * lengthOfStep; // in meters

    //convert kms/hr into mtr/min : 5kms/hr = 5*1000 / 60
    let   speedInMtrPerSec = (speedInKmPerHr * 1000) / (60 * 60);
    let time = distance/speedInMtrPerSec;
    for(let i=500; i<=distance; i+=500){
        time += 60;
        // console.log(time)
    }
    let hrs = Math.floor(time / 3600);
    let min = Math.floor((time % 3600) / 60);
    let sec = Math.ceil(time % 60);

    let result = '';
    if(hrs < 10){
        result += '0' + hrs; 
    }else result += '' + hrs;
    min < 10 ? result += ':0' + min : result += ':' + min;
    sec < 10 ? result += ':0' + sec : result += ':' + sec;
    console.log(result); 
}
timeToWalk(4000, 0.60, 5); // 00:32:48

// function format(time) {   
//     // Hours, minutes and seconds
//     var hrs = ~~(time / 3600);
//     var mins = ~~((time % 3600) / 60);
//     var secs = ~~time % 60;

//     // Output like "1:01" or "4:03:59" or "123:03:59"
//     var ret = "";
//     if (hrs > 0) {
//         ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
//     }
//     ret += "" + mins + ":" + (secs < 10 ? "0" : "");
//     ret += "" + secs;
//     return ret;
// }

// console.log(format(34322));