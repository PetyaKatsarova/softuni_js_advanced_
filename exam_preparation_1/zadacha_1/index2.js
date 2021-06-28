// The Module field is a dropdown menu.
// When the Add button is clicked, first you need to validate the inputs. If any of the input fields is invalid (empty or default value), the function doesn’t make anything. Be careful with the validation of the Module dropdown (it's default value is NOT an empty string).

// After validating the input fields, you need to add the new lecture in the Trainings section.
// The HTML structure after adding new lecture looks like this: 
// <div class="module"><h3>module Name</h3><ul><li class='flex'><h4>DOM-2020/09/28</h4><button class="red">Del</button></li></ul></div> 
// The added lecture should have button with text 'Del'. The date and the lecture name must be formatted as shown on the screenshots. Be careful with the HTML-Structure and with the class names! Duplicated names of the lectures are allowed.

// If there is another Lecture with the same Module:
// The lectures should be sorted by DATE! The date is separated with slashes (/) and the separator between the date
// and time is a minus sign.
// Hint: The format of the date allows alphabetical sort.
// When the “Delete” button is clicked, the Lecture (whole list element) should be removed from the HTML.If there are NO Lectures left in the module (after delete) the whole module should be also deleted.

function solve() {
    let lectures = [];

    document.querySelector("form div button").addEventListener('click', (e)=>{
        e.preventDefault();

        let courseName = document.querySelector('input[name="lecture-name"]');
        let courseDate = document.querySelector('input[name="lecture-date"]');
        let courseModule = document.querySelector('select[name="lecture-module"]');
    
        if(!courseName.value || !courseDate.value || courseModule.value == 'Select module'){
            return;
        }
        if(!lectures[courseModule.value]){
                lectures[courseModule.value] = [];
        }
        
        let currentLecture = {name: courseName.value, date: formatDateTime(courseDate.value)};
        lectures[courseModule.value].push(currentLecture);
        

        courseName.value = '';
        courseDate.value = '';
        courseModule.value = 'Select module';

        createTrainings(lectures);        
    });
 
    function createTrainings(lectures){
        let modules = document.querySelector('.modules');
        modules.innerHTML = '';
   
        for(const key in lectures){
            let module = createModule(key);
            let  ul = document.createElement('ul');

            lectures[key].sort((a,b) => a.date.localeCompare(b.date))
                        .forEach(({name, date}) => {
                            let li = createLi(name,date);
                            ul.appendChild(li);

                            let deleteBtn = li.querySelector('button');
                            deleteBtn.addEventListener('click', (e) => {
                                lectures[key] = lectures[key]
                                    .filter(el => !(el.name !== name && el.date != date));
                                if(lectures[key].length == 0){
                                    delete lectures[key];
                                    e.currentTarget.closest('.module').remove();
                                }else{
                                    e.currentTarget.parentNode.remove();
                                }
                                
                            });
                        });
            module.appendChild(ul);
            modules.appendChild(module);
        }
    }

   function formatDateTime(input){
       let [date,time] = input.split('T');
       date = date.replaceAll('-', '/');
       return `${date} - ${time}`;
   }

   function createLi(name, date){
        let li = document.createElement('li');
        li.classList.add('flex');
        let h4 = document.createElement('h4');

        h4.textContent = `${name} - ${date}`;
        let btn = document.createElement('button');
        btn.classList.add('red');
        btn.textContent = 'Del';
        li.appendChild(h4);
        li.appendChild(btn);
        return li;
    } 

    function createModule(module){
        let div = document.createElement('div');
        div.classList.add('module');
        let h3 = document.createElement('h3');
        h3.textContent = `${module.toUpperCase()}-MODULE`;      
        div.appendChild(h3);
        return div;
    }

};