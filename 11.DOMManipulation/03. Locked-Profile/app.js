// In this problem, you should create a JS functonality which shows and hides the additional
// information about users.
//works but didnt pass the judge tests
function lockedProfile() {
    let btns = Array.from(document.querySelectorAll('.profile button'));
    
    btns.forEach(el => {
        el.addEventListener('click', (e)=>{
            let profile = e.target.parentElement;
            let radio = profile.querySelector(`input:checked`);
            let hidden = e.target.previousElementSibling;

            if(radio.value === 'unlock'){
                hidden.style.display = hidden.style.display === 'block' ? 'none' : 'block';

                e.target.textContent = e.target.textContent === 'Show more' ? 'Hide it' : 'Show more';
            } 
        });
    });  
}

// new solution for judge
// function lockedProfile() {
//     let btns = Array.from(document.querySelectorAll('.profile button'));
    
//     for(let i=0; i<btns.length; i++){
//         btns[i].addEventListener('click', (e)=>{
//             let radioBtnName = `user${i+1}Locked`;
//             let radioBtn = document.querySelector(`input[name=${radioBtnName}]:checked`);
//             let hiddenDiv = document.getElementsById(`user${i+1}HiddenField`);

//             if(radioBtn.value === 'unlock'){
//                 hiddenDiv.style.display = hiddenDiv.style.display === 'block' ? 'none' : 'block';

//                 e.target.textContent = e.target.textContent === 'Show more' ? 'Hide it' : 'Show more';
//             } 
//         });
//     }
// }

