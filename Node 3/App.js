const EvenEmitter = require('events');
const eventEmitter = new EvenEmitter();

eventEmitter.on('tut', (num1,num2)=> {
    console.log(num1+ num2);
});

eventEmitter.emit('tut',1,3);

class Person extends EvenEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let rinoza= new Person ('Rinoza');
let john = new Person ('John');
john.on('name', () => {
    console.log("Hi, I am "+ john.name);
});
rinoza.on('name', () => {
    console.log('My name is ' + rinoza.name);
});

rinoza.emit('name');
john.emit('name');