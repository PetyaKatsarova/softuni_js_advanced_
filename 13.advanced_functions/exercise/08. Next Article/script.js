// Write a JS program that sequentially displays articles on a web page when the user clicks a button. You will receive an array of strings that will initialize the program. You need to return a function that keeps the initial array in its closure and every time it’s called, it takes the first element from the array and displays it on the web page, inside &quot;article&quot;, in div with ID &quot;content&quot;. If there are no more elements left, your function should do nothing.
// Your function will be called automatically, there is no need to attach any event listeners.
// Input You will receive and array of strings. Output Return a function that displays the array elements on the web page.

function getArticleGenerator(arr){
    let cpy = arr.slice();
    let content = document.querySelector("#content");

    return function bla(){
        let article = document.createElement('article');
        if(cpy[0] !== undefined){
            article.innerHTML = cpy.shift();        
            content.appendChild(article);
            return bla;
        }
    }
}
