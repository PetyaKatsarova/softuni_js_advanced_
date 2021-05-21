function roadRadar(speed, area){
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    if(area === 'motorway'){
        console.log(speedRef(speed, motorwaySpeed));
    }else if(area === 'interstate'){
        console.log(speedRef(speed, interstateSpeed));
    }else if(area === 'city'){
        console.log(speedRef(speed, citySpeed));
    }else if(area === 'residential'){
        console.log(speedRef(speed, residentialSpeed));
    }else{
        console.log("No speed limit, U can fly :)");
    }

    function speedRef(speed, speedLimit){
        let msg = '';
        if(speedLimit >= speed){
            msg = `Driving ${speed} km/h in a ${speedLimit} zone`;
        }else{
            msg = `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - `;
            if(speedLimit + 20 >= speed) {
                msg += `speeding`
            }else if(speedLimit + 40 >= speed){
                msg += `excessive speeding`;
            }else{
                msg += `reckless driving`;
            }
        }
        return msg;
    }
}

 roadRadar(40, 'city');
roadRadar(21,'residential'); // + 1,speeding
roadRadar(120, 'interstate');//+30 excessive speeding
roadRadar(200, 'motorway');//