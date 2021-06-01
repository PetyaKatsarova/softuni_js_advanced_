// Write a program that receives a worker object as a parameter and modifies its properties. Workers have the following structure:
// { weight: Number,
//   experience: Number,
//   levelOfHydrated: Number,
//   dizziness: Boolean }
// Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. If you receive a worker who’s dizziness property is set to true it means he needs to intake some water in order to be able to work correctly. The required amount is 0.1ml per kilogram per year of experience. The required amount must be added to the existing amount. Once the water is administered, change the dizziness property to false.
// Workers who do not have dizziness should not be modified in any way. Return them as they were.
function worker(obj){
    if(obj.dizziness === true){
        obj.levelOfHydrated += 0.1 * obj.experience * obj.weight;
        obj.dizziness = false;
    }

    return obj;
}

console.log(worker({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));
    // { weight: 80,
    //     experience: 1,
    //     levelOfHydrated: 8,
    //     dizziness: false }
    console.log(worker({ weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true }));
        // { weight: 120,
        //     experience: 20,
        //     levelOfHydrated: 440,
        //     dizziness: false }




