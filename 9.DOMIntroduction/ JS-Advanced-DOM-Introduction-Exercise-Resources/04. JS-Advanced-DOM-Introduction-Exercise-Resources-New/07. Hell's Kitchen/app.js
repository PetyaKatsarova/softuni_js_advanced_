// function solve() {
//       document.querySelector('#btnSend').addEventListener('click', onClick);

//       function onClick () {
//             let textArea = document.querySelector('#inputs textarea');
//             let text = textArea.value;
//             let inputArr = JSON.parse(text);
//             let restaurants = {}
            
//             for(let i=0; i<inputArr.length; i++){
//                   let [restaurantName, workerInfo] = inputArr[i].split(' - ');
//                   let workersInput = workerInfo.split(', ').map(w => {
//                            let [name, salary] = w.split(' ');
//                            return { name, salary: Number(salary) };
//                   });
//                   if(!restaurants[restaurantName]){
//                         restaurants[restaurantName] = {
//                              workers: [],
//                              getAverageSalary(){ return this.workers.reduce((acc,el) =>  acc + el.salary, 0) / this.workers.length}
//                         }
//                   }
//                   restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(workersInput);

//             }

//             let sortedRestaurants = Object.entries(restaurants).sort((a,b)=>b[1].getAverageSalary() - a[1].getAverageSalary());
//             let bestRestaurant = sortedRestaurants[0];
//             let sortedWorkers = bestRestaurant[1].workers.sort((a,b) => b.salary - a.salary);
//             let bestRStr = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].getAverageSalary().toFixed(2)} Best Salary: ${sortedWorkers[0].salary.toFixed(2)}`;
//             let workers = ``;
//             for(let row of sortedWorkers){
//                 workers += `Name: ${row['name']} With Salary: ${row['salary']} `
//             //     'Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With Salary: 660'
//             }
//             document.querySelector('#bestRestaurant p').textContent = bestRStr;
//             document.querySelector('#workers p').textContent = workers;
//            // console.log(bestRStr);
//       }
// }


function solve(){
      document.querySelector('#btnSend').addEventListener('click', onClick);

      function onClick () {
            let textarea = document.querySelector('#inputs textarea').value;
            textarea = JSON.parse(textarea);
            let restaurants = {}

            for(let row of textarea){
                  let [restaurant, workersInfo] = row.split(' - ');
                  let allworkers = workersInfo.split(', ').map((el)=>{
                        let [name, salary]  = el.split(' ');
                        salary = Number(salary);
                        return {  name, salary };
                  });

                  if(!restaurants[restaurant]){
                        restaurants[restaurant] = {
                              workers: [],
                              getAvgSalary(){ return this.workers.reduce((acc,item)=>  acc + item.salary, 0) / this.workers.length;
                              }
                        }
                  }
                  restaurants[restaurant].workers = restaurants[restaurant].workers.concat(allworkers);
            }            

            let p = document.querySelector("#bestRestaurant p");
            let result = ``;
            let sortedRestaurants = Object.entries(restaurants).sort((a,b) => b[1].getAvgSalary() - a[1].getAvgSalary());
            let bestRestaurant = sortedRestaurants[0];
            let bestSalary = bestRestaurant[1].workers.sort((a,b)=> b.salary - a.salary);
             let bestestSalary = bestSalary[0].salary;
             result = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].getAvgSalary().toFixed(2)} Best Salary: ${bestestSalary.toFixed(2)}`;
            document.querySelector('#bestRestaurant p').textContent = result;

            let p2 = document.querySelector("#workers p");
            bestSalary.map(el => p2.textContent += `Name: ${el.name} With Salary: ${el.salary} `);
           
      }
}


// input:  
// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]

//output
// Name: TheLake Average Salary:
// 913.33 Best Salary: 1300.00
// Name: Bob With Salary: 1300 Name:
// Joe With Salary: 780 Name: Jane With
// Salary: 660