// function solve() {
//     let text = document.getElementById('text').value;
//     const convention = document.getElementById('naming-convention').value;
//     text= text.toLowerCase().split(' ');
//     let result = '';

//     // "this is an example", "Camel Case"
//     if(convention === 'Camel Case'){
//       result = text[0];
//       for(let i=1; i<text.length; i++){
//         text[i] = text[i][0].toUpperCase()+text[i].slice(1);
//         result += text[i];
//     } 
//     }else if(convention === 'Pascal Case'){
//         for(let i=0; i<text.length; i++){
//             text[i] = text[i][0].toUpperCase()+text[i].slice(1);
//             result += text[i];
//         } 
//     }else{
//         result = 'Error!';
//     }
//     document.getElementById('result').textContent = result;
// }

//refactor
function solve() {
    let text = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;
    text= text.toLowerCase().split(' ');
    

    // "this is an example", "Camel Case"
    if(convention === 'Camel Case'){
        // can't figure out why this doesnt work......
         text = text.map((el,i) => {
            el = i !== 0 ? el[0].toUpperCase() + el.slice(1) : el;
         });
    }else if(convention === 'Pascal Case'){
        text = text.map(el => el[0].toUpperCase() + el.slice(1)); 
    }else{
        text = 'Error!';
    }
    document.getElementById('result').textContent = text.join('');
}