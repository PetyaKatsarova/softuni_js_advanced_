function validate() {
    
    // inputs of passw and confirm - to match
    const companyInfo = document.querySelector('#companyInfo');
    const usernameField = document.querySelector('#username')
    const passwordField = document.querySelector("#password");
    const confirm_passwordField = document.querySelector('#confirm-password');
    const email = document.querySelector("#email");
    const companyNumber = document.querySelector('#companyNumber');

    document.querySelector('#company').addEventListener('change', ()=>{
        if(document.querySelector('#company').checked){
            companyInfo.style.display = 'block';
        }else{
            companyInfo.style.display = 'none';
        }
    });

    document.querySelector('button').addEventListener('click', (e)=>{
        e.preventDefault();
        validateField('username', usernameField);
        validateField('password', passwordField);
        validateField('confirm_password', confirm_passwordField);
        validateField('email', email);
        if(companyInfo.style.display == 'block'){
            validateField('companyNumber', companyNumber);
        }
        // display valid div
        let arr = [usernameField, passwordField, confirm_passwordField, email, companyNumber]; 
        let flag = true;
        Array.from(arr).forEach(el => {
            // document.querySelector("#valid").style.display = 'none';
            if(el.style.borderColor == 'red'){
                flag = false;
                // return;
            }
        });
        if(flag === true){
            document.querySelector("#valid").style.display = 'block';
        }else{
            document.querySelector("#valid").style.display = 'none';
        }
    });
    // username between 3-20 symbols incl, only letters and nums
    // passw and confirm-p 5-15 symbols word chars (letters nums _)
    // email field: contains @ and at least one dot(.) after
    //The Company Number field must be a number between 1000 and 9999.
    function validateField(name, field){
        field.style.removeProperty('border');

        let obj = {
            username: () => /^[a-zA-Z0-9]{3,20}$/g.test(field.value),
            password: () => /^\w{5,15}$/g.test(field.value),
            confirm_password: () => /^\w{5,15}$/g.test(field.value),
            email: () => /^.+@.+\.+.+$/g.test(field.value),
            companyNumber: () => /^([1-9]\d\d\d)$/g.test(field.value)
        }

        if(obj[name]() === false){
            field.style.borderColor = 'red';
        }else{
            field.style.border = 'none';     

            if(passwordField.value !== confirm_passwordField.value ||  passwordField.value.length == 0){
                passwordField.style.removeProperty('border');
                confirm_passwordField.style.removeProperty('border');
                passwordField.style.borderColor = 'red';   
                confirm_passwordField.style.borderColor = 'red';
            }
        } 
    }    

}

// //REFACTOR
// function validate () {
//     const html = {
//         companyCheck: document.getElementById(`company`),
//         submit: document.getElementById(`submit`),
//         validDiv: document.getElementById(`valid`),
//         companyInfo: document.getElementById(`companyInfo`)
//     }

//     const inputFields = {
//         username: document.getElementById(`username`),
//         email: document.getElementById(`email`),
//         password: document.getElementById(`password`),
//         'confirm-password': document.getElementById(`confirm-password`),
//         companyNumber: document.getElementById(`companyNumber`),

//     }

//     const checkLength = (v, s, e) => v.length >= s && v.length <= e
//     const checkPassword = (v, s, e, f) =>
//         checkLength(v, s, e) && /^\w+$/g.test(v) && v === inputFields[f].value

//     const validate = {
//         username: (v) => checkLength(v, 3, 20) && /^[a-zA-Z0-9]*$/g.test(v),
//         password: (v) => checkPassword(v, 5, 15, 'confirm-password'),
//         'confirm-password': (v) => checkPassword(v, 5, 15, 'password'),
//         email: (v) => /^.*@.*\..*$/g.test(v),
//         companyNumber: (v, c) => c ? v >= 1000 && v <= 9999 : true
//     }

//     const changeBorder = (c, e) => {
//         const style = c ? 'border: none' : 'border-color: red'

//         e.style = style
//     }

//     html.companyCheck.addEventListener('change', (e) => {
//         if (e.target.checked === true) {
//             html.companyInfo.style.display = 'block'
//         } else {
//             html.companyInfo.style.display = 'none'
//         }
//     })

//     html.submit.addEventListener('click', (e) => {
//         e.preventDefault()
//         const checked = html.companyCheck.checked
//         let oneInvalid = false

//         Object.entries(inputFields).forEach(([name, valueField]) => {
//             const valid = validate[name](valueField.value, checked)

//             changeBorder(valid, inputFields[name])

//             if (! valid) oneInvalid = true
//         })

//         if (oneInvalid) {
//             html.validDiv.style.display = 'none'
//         } else {
//             html.validDiv.style.display = 'block'
//         }
//     })
// }


