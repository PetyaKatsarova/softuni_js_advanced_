// function solve() {
//     let inputVal = document.querySelector("#input").value;
//     let output = document.querySelector("#output");

//     inputVal = inputVal.split('. ');
//     for(let i=0; i<inputVal.length; i+=3){
//         let p = document.createElement('p');
//         if(inputVal[i].length > 0){
//             p.innerHTML= `${inputVal[i]}.`;
//         }
//         if(inputVal[i+1] && inputVal[i+1].length > 0){
//             p.innerHTML+= `${inputVal[i+1]}.`;
//         } 
//         if(inputVal[i+2] && inputVal[i].length > 0){
//           p.innerHTML+= `${inputVal[i+2]}`;
//         }
//         output.appendChild(p);
//     }
// }

// solution2: 
function solve() {
    let sentences = document.querySelector("#input").value;
    let output = document.querySelector("#output");

    sentences = sentences.split('.').filter(el => el != '').map(el => el + '.');
    const numParagraphs = Math.ceil(sentences.length / 3);

    for(let i = 0; i < numParagraphs; i++){
        output.innerHTML += `<p>${sentences.splice(0,3).join('')}</p>`; 
    }  
}



// JavaScript, often abbreviated as JS, is a high-level,
// interpreted programming language. It is a language
// which is also characterized as dynamic, weakly typed,
// prototype-based and multi-paradigm. Alongside HTML
// and CSS, JavaScript is one of the three core
// technologies of the World Wide Web. JavaScript
// enables interactive web pages and thus is an essential
// part of web applications. The vast majority of websites
// use it, and all major web browsers have a dedicated
// JavaScript engine to execute it. As a multi-paradigm
// language, JavaScript supports event-driven, functional,
// and imperative (including object-oriented and
// prototype-based) programming styles. It has an API
// for working with text, arrays, dates, regular
// expressions, and basic manipulation of the DOM, but
// the language itself does not include any I/O, such as
// networking, storage, or graphics facilities, relying for
// these upon the host environment in which it is
// embedded.