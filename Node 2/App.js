const EvenEmitter = require('events');
const eventEmitter = new EvenEmitter();

eventEmitter.on('tut', ()=> {
    console.log('tutorial event has occured');
});

eventEmitter.emit('tut');