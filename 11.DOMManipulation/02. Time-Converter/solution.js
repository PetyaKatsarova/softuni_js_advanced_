function attachEventsListeners() {
    let secondsInput = document.getElementById('seconds');
    let minutesInput = document.getElementById('minutes');
    let hoursInput = document.getElementById('hours');
    let daysInput = document.getElementById('days');

    let secondsBtn = document.getElementById('secondsBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let daysBtn = document.getElementById('daysBtn');

    secondsBtn.addEventListener('click', (e)=>{
        secondsInput.value = Number(secondsInput.value);
        minutesInput.value = secondsInput.value / 60;
        hoursInput.value = minutesInput.value /60;
        daysInput.value = hoursInput.value / 24; 
    });     

    minutesBtn.addEventListener('click', (e)=>{
        minutesInput.value = Number(minutesInput.value);
        secondsInput.value = minutesInput.value * 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24; 
    });

    hoursBtn.addEventListener('click', (e)=>{
        hoursInput.value = Number(hoursInput.value);
        daysInput.value = hoursInput.value / 24;  
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    });

    daysBtn.addEventListener('click', (e)=>{
        daysInput.value = Number(daysInput.value);  
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    });
 
}   
 