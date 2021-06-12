// shows in judge wrong
function createSortedList(){
    let arr = [];

    return {
        add(el){
                arr.push(el);
                this.size++;
                arr = arr.sort((a,b) => a - b);
        },
        remove(i){
            if(i < 0 || i >= arr.length){
                throw new RangeError('Index is outside the arr range');
            } 
            this.size --;
            arr.splice(i,1);
        },
        get(i){
            if(i < 0 || i >= arr.length){
                throw new RangeError('Index is outside the arr length.');
            }
            return arr[i];             
        },
        size: 0
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
// 6 7