// WORK IN PROGRESS: .....
// calculate how long will take the student to get to uni
function timeToWalk(steps, lengthOfStep, speedInKmPerHr){
    let distance = steps * lengthOfStep; // in meters
    //convert kms/hr into mtr/min : 5kms/hr = 5*1000 / 60
    let   speedInMtrPerSec = (speedInKmPerHr * 1000) / (60 * 60);
    let time = distance/speedInMtrPerSec;

   if(distance > 500){
       for(let i=0; i<distance; i+=500){
           time += 60;
       }
   }
   let result = ``;
   let hrs = time % (60*60);
   return time;
   let hrsStr = '';
   if(!hrs){ 
       hrsStr = '00';
    }else if(hrs <=9){
        hrsStr = `0${hrs}`
    }else{
        hrsStr = hrs;
    }
   time -= hrs * (60*60);
   let min = time % 60;
   let minStr = '';
   if(!min){
       minStr = '00'
    }else if(min <= 9){
       minStr = `0${min}`;
    }else{
        minStr = min;
    }
   time -= min;
   let secStr = '';
   if(!time){
       secStr = '00';
   }else if(time <= 9){
       secStr = `0${time}`;
   }else {
       secStr = time;
   }

   return `${hrsStr}`;
}
console.log(timeToWalk(4000, 0.60, 5)); // 00:32:48