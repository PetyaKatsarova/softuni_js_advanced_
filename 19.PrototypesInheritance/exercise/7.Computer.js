// You need to implement the class hierarchy for a computer business, here are the classes you should create and support:
//  Keyboard class that contains:
// o manufacturer - string property for the name of the manufacturer
// o responseTime - number property for the response time of the Keyboard
//  Monitor class that contains:
// o manufacturer - string property for the name of the manufacturer
// o width - number property for the width of the screen
// o height - number property for the height of the screen
//  Battery class that contains:
// o manufacturer - string property for the name of the manufacturer
// o expectedLife - number property for the expected years of life of the battery
//  Computer - abstract class that contains:
// o manufacturer - string property for the name of the manufacturer
// o processorSpeed - a number property containing the speed of the processor in GHz
// o ram - a number property containing the RAM of the computer in Gigabytes
// o hardDiskSpace - a number property containing the hard disk space in Terabytes
//  Laptop - class extending the Computer class that contains:
// o weight - a number property containing the weight of the Laptop in Kilograms
// o color - a string property containing the color of the Laptop
// o battery - an instance of the Battery class containing the laptop&#39;s battery. There should be a getter and a setter for the property and validation that the passed in argument is actually an
// instance of the Battery class.
//  Desktop - concrete class extending the Computer class that contains:
// o keyboard - an instance of the Keyboard class containing the Desktop 's Keyboard. There should
// be a getter and a setter for the property and validation that the passed in argument is actually
// an instance of the Keyboard class.
// o monitor - an instance of the Monitor class containing the Desktop PC&#39;s Monitor. There should be
// a getter and a setter for the property and validation that the passed in argument is an instance
// of the Monitor class.

// Attempting to instantiate an abstract class should throw an Error, attempting to pass an object that is not of the expected instance (ex. an object that is not an instance of Battery to the laptop as a battery) should throw a typeError
function createComputerHierarchy() {

    class Component{
        constructor(manufacturer){
            if(this.constructor === Component){
                throw new Error('Cannot instantiate an abstract class.');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Component{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Component{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Component{
        constructor(manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife;// years
        }
    }

    class Computer extends Component{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            super(manufacturer);
            if(this.constructor === Computer){
                throw new Error('Cannot instantiate an abstract class.');
            }
            this.processorSpeed = processorSpeed // GHz;
            this.ram = ram;// Gigaabyites
            this.hardDiskSpace = hardDiskSpace;// Terabytes
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;//kg
            this.color = color;
            this._battery = battery// instance of the battery class
        }
        get battery(){
            return this._battery;
        }
        set battery(v){
            if(!(v instanceof Battery)){
                throw new TypeError('Value is not instance of Battery');
            }
            this._battery = v;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = keyboard;
            this._monitor = monitor;
        }
        get keyboard(){
            return this._keyboard;
        }
        set keyboard(v){
            if(!(v instanceof Keyboard)){
                throw new TypeError('Value is not instance of Keyboard');
            }
            this._keyboard = v;
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(v){
            if(!(v instanceof Monitor)){
                throw new TypeError('Value is not instance of Monitor');
            }
            this._monitor = v;
        }
    }

    return {Component,Battery, Keyboard, Monitor, Computer, Laptop, Desktop}
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery("Energy", 3);
//console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);