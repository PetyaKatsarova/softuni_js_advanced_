// Implement a class List, which keeps a list of numbers, sorted in ascending order. It must support the following functionality:
//  add(elemenent) - adds a new element to the collection
//  remove(index) - removes the element at position index
//  get(index) - returns the value of the element at position index
//  size - number of elements stored in the collection
// The correct order of the elements must be kept at all times, regardless of which operation is called. Removing and retrieving elements shouldn’t work if the provided index points outside the length of the collection (either throw an error or do nothing). Note the size of the collection is not a function. Input / Output
// All function that expect input will receive data as parameters. Functions that have validation will be tested with both valid and invalid data. Any result expected from a function should be returned as it’s result. Your add and remove functions should return an class instance with the required functionality as it’s result. Submit the class definition as is, without wrapping it in any function.
class List{
    constructor(){
        this.list = [];
        this.size = this.list.length;
    }
    updateSize = () => this.size = this.list.length;
    sortList = () => this.list.sort((a,b) => a - b);

    add(el){ 
        this.list.push(el)
        this.updateSize()
        this.sortList()    
    }
    remove(index){ 
        if(this.list[index] !== undefined){
            this.list.splice(index,1)
            this.updateSize()
            this.sortList()    
            return this.list
        }
    }
    get(index){
        if(this.list[index] !== undefined){return this.list[index]}}
}

class List {
    constructor () {
        this.list = []
        this.size = this.list.length
    }

    updateSize = () => this.size = this.list.length
    orderList = () => this.list.sort((a, b) => a - b)

    add (e) {
        this.list.push(e)
        this.updateSize()
        this.orderList()
    }
    remove (i) {
        if (this.list[i] !== undefined) {
            this.list.splice(i, 1)
            this.updateSize()
            this.orderList()
        }
    }
    get (i) {
        if (this.list[i] !== undefined) {
            this.updateSize()
            this.orderList()
            return this.list[i]
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));//6
list.remove(1);
console.log(list.get(1));//7