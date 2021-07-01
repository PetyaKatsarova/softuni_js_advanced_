function solve(arr){
    let result = [];
    let obj = {
        add: (str) => result.push(str),
        remove: (str) => result = result.filter(el => el !== str),
        print: () => console.log(result.join(','))
    }

    arr.forEach(el => {
        const [command, val] = el.split(' ');
        obj[command](val);
    });
    
}


solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])();// again,again
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])();// pesho,george

