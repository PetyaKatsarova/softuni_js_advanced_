function validate() {
    const valid = /^[a-z]+@[a-z]+\.[a-z]+/g;
    let inputText = document.querySelector('#email');

    inputText.addEventListener('change',()=>{
        if(!valid.test(inputText.value)){
            inputText.classList.add('error');
       }else{
           inputText.classList.remove('error');
       }
    })
    
}
//refactor
// function validate() {
//     const input = document.getElementById("email")

//     function isValidEmail(str) {
//         if (/^[a-z]+@[a-z]+\.[a-z]+/g.test(str)) return true

//         return false
//     }

//     function applyStyle(e, email) {
//         e.className = isValidEmail(email) ? "" : "error"
//     }
//     input.addEventListener("change", e => applyStyle(e.target, e.target.value))
// }
