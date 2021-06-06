function objFactory(library,orders){
    let result = [];
   for(let i=0; i<orders.length; i++){
       let temp = {};
        temp['name'] = orders[i].template.name;
        for(let part of orders[i].parts){
            temp[part] = library[part];
        }
        result.push(temp);
   }
   console.log(result);
}

const library = {
    print: function () {
    console.log(`${this.name} is printing a page`);
    },
    scan: function () {
    console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
    console.log(`${this.name} is playing "${track}" by ${artist}`);
    },
};
const orders = [
    {
    template: { name: "ACME Printer"},
    parts: ["print"]
    },
    {
    template: { name: "Initech Scanner"},
    parts: ["scan"]
    },
    {
    template: { name: "ComTron Copier"},
    parts: ["scan", "print"]
    },
    {
    template: { name: "BoomBox Stereo"},
    parts: ["play"]
    },
];
const products = objFactory(library, orders);
// console.log(products);
// [
//     {
//     name: "ACME Printer",
//     print: [Function: print]
//     },
//     {
//     name: "Initech Scanner",
//     scan: [Function: scan]
//     },
//     {
//     name: "ComTron Copier",
//     scan: [Function: scan],
//     print: [Function: print]
//     },
//     {
//     name: "BoomBox Stereo",
//     play: [Function: play]
//     },
// ]
