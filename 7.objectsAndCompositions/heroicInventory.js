// In the era of heroes, every hero has his own items which make him unique. Create a function which creates a register for the heroes, with their names, level, and items, if they have such. The register should accept data in a specified format, and return it presented in a specified format. 
// Input
// The input comes as array of strings. Each element holds data for a hero, in the following format:
// “{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 
// You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
function heroInventory(arr){
    let heroes = [];

    for(const row of arr){
        let [name,level,items] = row.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        heroes.push({name,level,items});
    }
    heroes = JSON.stringify(heroes);
    console.log(heroes);
}
heroInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]