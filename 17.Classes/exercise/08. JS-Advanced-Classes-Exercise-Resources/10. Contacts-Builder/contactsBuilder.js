// Write a JS class that generates a contact info box. You will receive a person's first name, last name, phone and email. Compose the markup for the contact box, attach all the needed events and when the render function is called, append the newly created element to the document.
// A contact info box is composed of first name, last name, phone, email (all strings) and a property which indicates if the contact is online or not. Clicking a button on the box toggles the visibility of the person's contact information (phone and email). See the examples for more details.

// The constructor of your class needs to take four string arguments - first name, last name, phone, email. Additionally,the class should also contain the following functionality:
//  Property online – Boolean value, initially set to false

// Function render(id) – appends the Contact's HTML element representation to the DOM element with Id equal to the argument
// When the value of the online property is changed, the corresponding HTML should be updated – if it’s set to true,add the class "online" to the div with class "title" (containing the name). If it’s false, remove the class "online".

// A contact info box should have the following HTML structure: Contact
/* <article>;
    <div class="title">;{firstName lastName}<button>;&#8505;</button>;</div>;
    <div class="info">;
    <span>&phone; {phone}</span>;
    <span>&#9993; {email}</span>;
   </div>;
</article>; */
// When the box is initiallity created, the div with class "info" must be hidden. Clicking the button toggles its visibility.
// You can use the HTML skeleton to test your functionality.
// Hint: Use https://www.toptal.com/designers/htmlarrows/symbols/ to get Unicode escapes. (Example: Phone -&gt;'\u260E').
class Contact {
    constructor(fn, ln, ph, em) {
        this.first_name = fn;
        this.last_name = ln;
        this.phone = ph;
        this.email = em;
        this._online = false;
    }
    get online() {
        return this._online;
    }

    set online(v) {
        this._online = v;

        if (this.divTitle) {
            this.divTitle.className = this._online ? 'title online' : 'title';
        }
    }

    elFactory(el, content = '') {
        const element = document.createElement(el);
        element.innerHTML = content;
        return element;
    }


    render(id) {
        // const article = document.createElement('article');
        this.article = this.elFactory('article');
        this.divTitle = this.elFactory('div', `${this.first_name} ${this.last_name}`);
        this.btn = this.elFactory('button', '&#8505;');
        this.divInfo = this.elFactory('div');
        this.spanPhone = this.elFactory('span', `&phone; ${this.phone}`);
        this.spanEmail = this.elFactory('span', `&#9993; ${this.email}`);

        this.divTitle.classList = this.online ? 'title online' : 'title';
        this.divInfo.classList.add('info');
        this.divInfo.style.display = 'none';

        this.divTitle.appendChild(this.btn);
        this.article.appendChild(this.divTitle);

        this.divInfo.appendChild(this.spanPhone);
        this.divInfo.appendChild(this.spanEmail);

        this.article.appendChild(this.divInfo);
        document.getElementById(id).appendChild(this.article);

        this.btn.addEventListener('click', (e) => {
            this.divInfo.style.display = this.divInfo.style.display === 'none' ? 'block' : 'none';
        });
    }
}
let contacts = [
    new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
    new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
    new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com')
    ];
    contacts.forEach(c => {
        c.render('main')
    });
    // After 1 second, change the online status to true
    setTimeout(() => contacts[2].online = true, 2000);























class Contact1 {
	constructor (f, l, p, e) {
		this.firstName = f
		this.lastName = l
		this.phone = p
		this.email = e
		this._online = false
	}

	get online () {
		return this._online
	}

	set online (v) {
		this._online = v

		if (this.onlineDiv) {
			this.onlineDiv.className = this._online ? 'title online' : 'title'
		}
	}

	eFactory (tag, content = '') {
		const e = document.createElement(tag)
		e.innerHTML = content

		return e
	}

	render (id) {
		this.templ = this.eFactory('article')
		this.onlineDiv = this.eFactory('div', `${this.firstName} ${this.lastName}`)
		this.infoBtn = this.eFactory('button', '&#8505;')
		this.infoDiv =
			this.eFactory(
				'div',
				`<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
			)


		this.onlineDiv.className = this.online ? 'title online' : 'title'
		this.infoDiv.className = 'info'
		this.infoDiv.style.display = 'none'

		this.onlineDiv.appendChild(this.infoBtn)
		this.templ.appendChild(this.onlineDiv)
		this.templ.appendChild(this.infoDiv)

		document.getElementById(id).appendChild(this.templ)

		this.infoBtn.addEventListener('click', () => {
			this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none'
		})
	}
}