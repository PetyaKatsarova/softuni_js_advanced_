// Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.
// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console

function  solve() {
    let str = '';

    return {append, removeStart, removeEnd, print};

    function append(strToAppnd){
        str += strToAppnd;
    }   
    function removeStart(n){
        str = str.substring(n);
    }
    function removeEnd(n){
        // str = str.substring(0,(str.length-n));
        str = str.slice(0, -n);
        // doesnt work: str = str.substring(-n, 0);
    }
    function print(){
        console.log(str);
    }
}

let secondZeroTest = solve(); //34

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();