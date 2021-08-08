// Extend the build-in String object with additional functionality. Implement the following functions ensureStart(str) – the current string doesn't start with str, returns a new string with str appended to the begining, otherwise returns the original string
//  ensureEnd(str) - the current string doesn't end with str, returns a new string with str appended to the begining, otherwise returns the original string
//  isEmpty() - return true if the string is empty, false otherwise
//  truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis (three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n. If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.
//  format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods are attached to the String object instead of it’s prototype. See the examples for more info.
// Note strings are immutable, so your functions will return new strings as a result.
// Your main code should be structured as an IIFE without input or output - it should modify the existing String prototype instead.
// Input and output of the extension functions should be as described above.
(function  wrapper() {
    String.prototype.ensureStart = function (str) {
        if(this.startsWith(str)){
            return this.toString();
        }
        return `${str}${this}`;
    }
    String.prototype.ensureEnd = function (str) {
        if(this.endsWith(str)){
            return this.toString();
        }
        return `${this}${str}`;
    }
    String.prototype.isEmpty = function () {
        return this.toString() === '';
    }
    String.prototype.truncate = function (n) {
        if(this.length <= n){
            return this.toString();
        }
       // if str includes space
        if(this.includes(' ')){
            let words = this.split(' ');
            do{
                words.pop();
            }while(words.join(' ').length+3 > n)
            return `${words.join(' ')}...`
        }

        //str no space but more than 3 chars
        if(n > 3){
            return `${this.slice(0, n - 3)}...`;
        }
        return '.'.repeat(n);
   }
   // static func
    String.format = function(string, ...params){
        let pattern = /{(\d+)}/g;
        let replacedStr = string.replace(pattern, (match, group1) => {
            let i = Number(group1);
            if(i < params.length){
                return params[i];
            }
            return match;
        });
        return replacedStr;
    }

})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');// hello my string
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
'dog');
console.log(str);

// 'my string' // 'my' already present
// 'hello my string'
// 'hello my string' // length is 15
// 'hello my...' // length is 11
// 'hello...'
// 'h...'
// '..'

// 'The quick brown fox'
//'jumps dog {1}' // no parameter at 1