// Your task is to convert from one distance unit to another by adding a click event listener to a button.
// When it is clicked, read the value from the input field and get the selected option from the input and
// output units drop downs. Then calculate and display the converted value in the disabled output field.
// Multiply the incoming distance by the following conversion rates to convert to meter
//  Divide to convert from meters to the required output unit
//  To see which option is selected, read the properties of its parent: value gives you the value of the
// selected option (as displayed in the HTML), selectedIndex gives you the 0-based index of the
// selected option. For example, if miles are selected, inputUnits.value is &quot;mi&quot;,
// inputUnits.selectedIndex is 4. Option text is irrelevant
//  Use the following table information to do that:
// 1 km 1000 m
// 1 m 1 m
// 1 cm 0.01 m
// 1 mm 0.001 m
// 1 mi 1609.34 m
// 1 yrd 0.9144 m
// 1 ft 0.3048 m
// 1 in 0.0254 m

function attachEventsListeners() {
    let btn = document.getElementById('convert');

    convert.addEventListener('click', (e)=>{
        let distance = document.getElementById('inputDistance').value;
        let inputUnits = document.getElementById('inputUnits').value;
        let outputDistance = document.getElementById('outputDistance');
        let outputUnits = document.getElementById('outputUnits').value;
       // console.log(outputDistance + ' // ' + units);

       if(inputUnits === 'km'){
            if(outputUnits === 'km'){
                 outputDistance.value = distance * 1;
            }else if(outputUnits === 'm'){
                outputDistance.value = distance * 1000;
            }else if(outputUnits === 'cm'){
                outputDistance.value = distance * 1000 * 100; 
            }  
       }else if(inputUnits === 'm'){
            if(outputDistance === 'm'){
                outputDistance.value = distance * 1;
            }else if(outputUnits === 'km'){
                outputDistance.value = distance / 1000;
            }else if(outputUnits === 'cm'){
                outputDistance.value = distance * 100; 
            }
        }else if(inputUnits === 'cm'){
            if(outputDistance === 'cm'){
                outputDistance.value = distance * 1;
            }else if(outputUnits === 'm'){
                outputDistance.value = distance / 100;
            }else if(outputUnits === 'km'){
                outputDistance.value = (distance / 100) / 1000; 
            }
        }

    });
}