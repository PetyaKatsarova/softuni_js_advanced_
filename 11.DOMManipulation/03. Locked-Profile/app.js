// In this problem, you should create a JS functonality which shows and hides the additional
// information about users.

function lockedProfile() {
    let profile = Array.from(document.querySelectorAll('.profile'));
    
    profile.forEach(element => {
        element.addEventListener('click', (e)=>{
            let radio = element.querySelectorAll('input[type="radio"]'); 

            // for(let i=0; i<radio.length; i++){
            //     if(radio[i].checked && radio[i].value === 'lock'){
            //         e.target.setAttribute('disabled', true);
            //         e.target.style.background = "orange";
            //     }else{
            //         e.target.removeAttribute('disabled');e.target.style.background = "blue";

            //     }
            // }   
            
            if(e.target.tagName === 'BUTTON'){
                if(e.target.textContent === 'Show more'){
                    e.target.previousElementSibling.style.display = "block";
                    e.target.textContent = 'Show less';
                }else{
                    e.target.previousElementSibling.style.display = "none";
                    e.target.textContent = 'Show more';
                }
               
                // if(document.querySelector('input[type="radio"]').value === 'unlock'){
                //     console.log('THANKS G!')
                // }
              
            }
        });
    });
    
}