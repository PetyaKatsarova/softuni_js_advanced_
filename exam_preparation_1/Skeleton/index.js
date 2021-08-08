//const { doc } = require("prettier");

function solve() {
    const btn = document.querySelector('form button');
    const userViewSection = document.querySelector('.user-view');
    let objModules = {};

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const lectureModule = document.querySelector('select[name="lecture-module"]');
        const lectureDate = document.querySelector('input[name="lecture-date"]');
        const lectureName = document.querySelector('input[name="lecture-name"]');
        let d = lectureDate.value;

        if(!lectureName || lectureName.value === '') return; 
        if(lectureDate.value === 'dd/mm/yyyy,' && lectureDate.value === '') return;
        if(lectureModule.value === 'Select module' && lectureModule.value !== '' )return;

        let date = formatDate(lectureDate.value);
        // -------------------------- NB ------------------------------------------------
        if(!objModules[lectureModule.value]){
            objModules[lectureModule.value] = [];
        }
        let currObjLecture = {name: lectureName.value, date: date}
        objModules[lectureModule.value].push(currObjLecture);
        
        // ------------------- NB ends ---------------------------------------------------         

        createTraining(objModules);
    });
    
    function createTraining(objModules){
        const modules = userViewSection.querySelector('.modules');
        modules.innerHTML = '';

        for(const m in objModules){
            let module = createModule(m);
            let ul = document.createElement('ul');

            let lectures = objModules[m];
            lectures
                   .sort((a,b) => a.date.localeCompare(b.date))
                   .forEach(({name,date}) => {
                       let li = createLecture(name,date);
                        ul.appendChild(li);
                        let delBtn = li.querySelector('.red');
 
                        delBtn.addEventListener('click', (e) => {
                            e.target.parentElement.remove();
                            objModules[m] = objModules[m].filter( el => !(el.name === name && el.date === date));

                            if(ul.children.length == 0){
                                ul.parentElement.remove();
                                delete objModules[m];
                            }
                        });
                    });
            module.appendChild(ul);
            modules.appendChild(module);
    
        }
    }

    function createModule(name){
        let module = document.createElement('div');
        module.classList.add('module');

        let h3 = document.createElement('h3');
        h3.textContent = `${name.toUpperCase()}-MODULE`;

        module.appendChild(h3);

        return module;
    }
    
    function createLecture(name, date){
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let delBtn = document.createElement('button');
        
        li.classList.add('flex');

        h4.textContent = `${name} - ${date}`;
        delBtn.classList.add('red');
        delBtn.textContent = 'Del';
 
        li.appendChild(h4);
        li.appendChild(delBtn);

        return li;
    }

    function formatDate(dateInput){
        let[date,time] = dateInput.split('T');
        date = date.replace(/-/g, '/');
        return `${date} - ${time}`;
    }

}
