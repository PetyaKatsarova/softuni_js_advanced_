// When the Add button is clicked, first you need to validate the inputs. If any of the input fields is invalid (empty or default value), the function doesn’t make anything. Be careful with the validation of the Module dropdown (it's default value is NOT an empty string).
// After validating the input fields, you need to add the new lecture in the Trainings section.
// The added lecture should have button with text "Del". The date and the lecture name must be formatted as shown on the screenshots. Be careful with the HTML-Structure and with the class names! Duplicated names of the lectures are allowed.
// The lectures should be sorted by DATE! The date is separated with slashes (/) and the separator between the date and time is a minus sign.Hint: The format of the date allows alphabetical sort.
// When the “Delete” button is clicked, the Lecture (whole list element) should be removed from the HTML.if there are NO Lectures left in the module (after delete) the whole module should be also deleted.
// Duplicated names of the lectures are allowed.

function solve() {
    const btn = document.querySelector('button');
    const lectureInput = document.querySelector('input[name="lecture-name"]');
    const dateInput = document.querySelector('input[type="datetime-local"]');
    const moduleSelect = document.querySelector('select[name="lecture-module"]');
    // let modules = []; // like assoc arr: aka obj but arr
    let modules = {};

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        //validate the 3 input values:
        if(lectureInput.value == '' || lectureInput.value == undefined
           || dateInput.value == '' || moduleSelect.value == 'Select module') return;

        let m = moduleSelect.value.toLowerCase();

        // modules = [module: [{},{},{}], module_2: [{},{},{}]];
        if(!modules[m]){ modules[m] = []; }
        // let temp = [lecture: lectureInput.value, date: formatDateTime(dateInput.value)];
        let temp = {lecture: lectureInput.value, date: formatDateTime(dateInput.value)};
        modules[m].push(temp);

        createModule(modules);
        document.querySelectorAll('.red').forEach(delBtn => {
            delBtn.addEventListener('click', (e) => {
                deleteLection(e, modules);
            });
        });
    });

    function deleteLection(e, modules){
        let li = e.currentTarget.parentElement;
        let h4Text = e.currentTarget.previousElementSibling.textContent.split(' - ');
        let lectureName = h4Text[0];
        let lectureDate = h4Text[1];
        let lectureTime = h4Text[2];
        let ul = li.parentElement;
        let module = ul.parentElement;
        let moduleName = module.querySelector('h3').textContent.toLowerCase().split('-')[0];
        console.log(moduleName);

        if(ul.children.length == 1){
            module.remove();
            delete modules[moduleName];
        }
        else{
            li.remove();
            let sth = modules[moduleName];
            for(let i=0; i<sth.length; i++){
                let d = sth[i]['date'].split(' - ')[0];
    
                if(sth[i].lecture == lectureName && d == lectureDate){
                    delete modules[moduleName][i];
                }
            }
            console.log(modules[moduleName]);
        }
    }


    function createModule(modules){
        let divModules = document.querySelector('.modules');
        divModules.innerHTML = '';

        for(const key in modules){
            // console.log(key);
            let module = createEl('div', undefined, ['class=module']);
            let h3 = createEl('h3', key.toUpperCase()+'-MODULE');
            let ul = createEl('ul');
            modules[key].sort((a,b) => a.date.localeCompare(b.date))            
                        .forEach(el => {
                            ul.appendChild(createLi(el['lecture'], el['date']));
                        });
            module.appendChild(h3);
            module.appendChild(ul);
            divModules.appendChild(module);
        }
    }

    function createLi(l,d){
        let li = createEl('li', undefined, ['class=flex']);
        let h4 = createEl('h4', `${l} - ${d}`);
        let delBtn = createEl('button', 'Del', ['class=red']);
        li.appendChild(h4);
        li.appendChild(delBtn);
        return li;
    }

    function createEl(el, text, attr=[]){
        let element = document.createElement(el);
        if(text){
            element.textContent = text;
        }
        attr.map(el => {
            let [k, v] = el.split('=');
            element.setAttribute(k, v);
        });
        return element;
    }
    function formatDateTime(val){
        let formatted = val.split('T');
        let date = formatted[0].split('-').join('/');
        return `${date} - ${formatted[1]}`;
    }
};

