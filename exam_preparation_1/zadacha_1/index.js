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
                        });
            module.appendChild(ul);
            modules.appendChild(module);
        }

        // delete
        let delBtns = document.querySelectorAll('.red'); 
        
        for(let btn of delBtns){
            btn.addEventListener('click', (e) => {
                let li = e.target.parentElement;
                let ul = li.parentElement;
                let module = ul.parentElement;
                let modules = module.parentElement;
                let h3 = module.querySelector('h3');
                let h4 = li.querySelector('h4');

                if(ul.children.length == 1){
                    modules.removeChild(module);
                    delete lectures[h3.textContent];
                    console.log(lectures);
                }else{
                    ul.removeChild(li);
                    delete lectures[h3.textContent][]
                }
            })
        
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