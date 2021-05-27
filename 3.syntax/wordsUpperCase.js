function wordsUppercase(sentence){
    const pattern = /\w+/gim;
    let found = sentence.match(pattern);
    let result = [];
    for(let line of found){
        if(line != ' '){
            line = line.trim();
            result.push(line);
        }
        
    }
    result = result.join(', ').toUpperCase();
    console.log(result);
    // return result;
}
// solution 2
function solve(text){
    let formattedWords = [];
    let words = text.split(/\W+/g);
    for(const word of words){
        if(word !== ''){
            formattedWords.push(word.toUpperCase());
        }
    }
    console.log(formattedWords.join(', '));
}


// solve('Hi, how r u?');
wordsUppercase('Hi, how r u?'); // HI, HOW, ARE, YOU

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// expected output: Array ["T", "I"]