function solve() {
    const modules = document.querySelector(".user-view div.modules");
    let h4texts = {};

    //{moduleName: [{name, date}, {name2, date2}], moduleName: {[name: date]}}

    document.querySelector('.form-control button').addEventListener('click', (e) => {
        e.preventDefault();

        const lecturename = document.querySelector('input[name="lecture-name"]');
        const lecturedate = document.querySelector('input[name="lecture-date"]');
        const lecturemodule = document.querySelector('select[name="lecture-module"]');

      //  if(!lecturename.value || lecturename == ''
        //    || !lecturedate.value || lecturedate == 'mm/dd/yyyy, -' ||
        //    !lecturemodule.value || lecturemodule == 'Select module') return;

            if(!h4texts[lecturemodule.value.toUpperCase()]){
                h4texts[lecturemodule.value.toUpperCase()] = [];
            }
            h4texts[lecturemodule.value.toUpperCase()].push({name: lecturename.value, date:formatDate(lecturedate.value)});

        //    //create modules div and h3 with module name : lecturemodule.value.toUpperCase() + '-MODULE'
        modules.innerHTML = '';
        modules.appendChild(createModule(h4texts));
        
    });

    function  createLi(name, date) {
        let li = createEl('li');
        li.classList.add('flex');
        let h4 = createEl('h4', name + ' - ' + date);
        let delBtn = createEl('button', 'Del');
        delBtn.classList.add('red');

        li.appendChild(h4);
        li.appendChild(delBtn);

        return li;
    }
    
    function createModule(h4texts) {
        let module;

        for(const key in h4texts){
            module = createEl('div');
            module.className = 'module';
            let h3 = createEl('h3', key);
            let ul = createEl('ul');

            let sorted = h4texts[key].sort((a,b) => {
                a.date.localeCompare(b.date);
            }).forEach(({name,date}) => {
                let li = createLi(name, date);
                ul.appendChild(li);
            });
            module.appendChild(h3);
            module.appendChild(ul);
        }
        return module;
    }
    
    function  createEl(el, text, attributes = []) {
        let elem = document.createElement(el);
        if(text) elem.textContent = text;
        attributes.map(attr =>  attr.split('=')).forEach(({name,val}) => {
            elem.setAttribute(name, val);
        })

        return elem;
    }

    function formatDate(date){
        date = date.split('T');
        date = date.replace(/-/g, '/')
        
        return `${date[0]} - ${date[1]}`;
    }


   
};