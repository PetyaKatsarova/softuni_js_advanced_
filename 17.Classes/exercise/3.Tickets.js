// Write a program that manages a database of tickets. A ticket has a destination, a price and a status. Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string,representing a sorting criterion. The ticket descriptions have the following format:'destinationName'|'price'|'status'
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination,price or status, depending on the second parameter that your program received. Always sort in ascending order (default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples
// for more information.
// function solve(arr, criteria){
//     let tickets = []; 
//     for(let row of arr){
//         let [destination,price, status] = row.split('|');
//         price = Number(price);
//         let temp = {destination, price, status}
//         tickets.push(temp);  
//     } 

//     let sorted;
//     if(criteria !== 'price'){
//         sorted = tickets.sort((a,b) => a[criteria].localeCompare(b[criteria]));
//     }else{
//         sorted = tickets.sort((a,b) => Number(a['price']) - Number(b['price']) )
//     }
//     return sorted;
// }
// refactored
function solve(arr, criteria){
    class Ticket{
        constructor(d,p,s){
            this.destination = d;
            this.price = Number(p);
            this.status = s;
        }
    }
    return arr.slice().map(el => el.split('|')).map(([d,p,s]) => new Ticket(d,p,s)).sort((a,b) => {
        return typeof a === Number ? a[p] - b[p] : a[criteria].localeCompare(b[criteria]);
    })
}


console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))

    // [ Ticket { destination: 'Boston',
    //     price: 126.20,
    //     status: 'departed' },
    //     Ticket { destination: 'New York City',
    //     price: 95.99,
    //     status: 'available' },
    //     Ticket { destination: 'New York City',
    //     price: 95.99,
    //     status: 'sold' },
    //     Ticket { destination: 'Philadelphia',       
    //     price: 94.20,
    //     status: 'available' } ]
    
    