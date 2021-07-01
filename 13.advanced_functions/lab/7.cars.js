// function cars(arr){
//     let objects = {};

//     let inner = {
//         create: (name, inherits, name2) => {
//             objects[name] = inherits ? Object.create(objects[name2]) : {};
//         },
//         set: (name, key, val) => {
//             objects[name][key] = val;
//         },
//         print: (name) => {
//             const entry = [];
//             for(const key in objects[name]){
//                 entry.push(`${key}:${objects[name][key]}`)
//             }
//             console.log(entry.join(', '));
//         }
//     }

//     arr.forEach(el => {
//         const [command, name, key, val] = el.split(' ');
//         inner[command](name,key,val);
//     });
   
// }



function cars(arr){
    let objects = {};

    let inner = {
        create: (name, inherits, name2) => {
            objects[name] = inherits ? Object.create(objects[name2]) : {};
        },
        set: (name, key, val) => {
            objects[name][key] = val;
        },
        print: (name) => {
            let bla = [];
            for(const key in objects[name]){
                bla.push(`${key}:${objects[name][key]}`);
            }
           console.log(bla.join(','));
        }
    }
    arr.forEach(el => {
        const [command, name, key, val] = el.split(' ');
        inner[command](name, key, val);
    });
    // console.log(objects);
    // i not getting it: we have objects that is made of objects[name]
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
