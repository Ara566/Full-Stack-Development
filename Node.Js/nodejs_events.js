
/*
const EventEmitter = require('events');

var eventEmitter = new EventEmitter();

eventEmitter.on('sampleEvent',(msg)=>{
    console.log(msg);
});

eventEmitter.emit('sampleEvent',"My First Event.....");

*/


/*

const EventEmitter = require('events');

var eventEmitter = new EventEmitter();

var func1 = (msg)=>{
     console.log("Message from func1:" + msg);
};

var func2 = (msg)=>{
     console.log("Message from func2:" + msg);    
}

eventEmitter.on('sampleEvent',func1);
eventEmitter.on('sampleEvent',func1);
eventEmitter.on('sampleEvent',func2);

eventEmitter.removeListener('sampleEvent',func1);

eventEmitter.emit('sampleEvent',"Event is Triggered...");

eventEmitter.removeAllListeners('sampleEvent');

eventEmitter.emit("sampleEvent","Event Triggers...");



*/



/*
const EventEmitter = require('events');

var event1 = new EventEmitter();
var event2 = new EventEmitter();

console.log("Default Max Listener Value for event 1 is =:",event1.getMaxListeners());
console.log("Default Max Listener Value for event 2 is =:",event2.getMaxListeners());

EventEmitter.defaultMaxListeners=5;

console.log("Default Max Listener Value for event 1 is =:",event1.getMaxListeners());
console.log("Default Max Listener Value for event 2 is =:",event2.getMaxListeners());

event1.setMaxListeners(7);

console.log("Default Max Listener Value for event 1 is =:",event1.getMaxListeners());
console.log("Default Max Listener Value for event 2 is =:",event2.getMaxListeners());

var func1 = (msg)=>{
    console.log("Message func1: ",+msg);
};

var func2 = (msg)=>{
    console.log("Message func2: ",+msg);
};

for(var i=0;i<3;i++){
    event1.addListener('sampleevent1',func1)
}

for(var i=0;i<3;i++){
    event2.addListener('sampleevent2',func2);
}

event1.emit('sampleevent1','Hello Event 1');
event2.emit('sampleevent2','Hello Event 2');

*/


/*
const EventEmitter = require('events');
var event1 = new EventEmitter();
var func1 = (msg) =>{
    console.log("Message from func1:" + msg);
};
var func2 = (msg) =>{
    console.log("Message from func2: " + msg);
};
event1.addListener('myEvent',func1);

event1.prependListener('myEvent',func2);

console.log(event1.listeners('myEvent'));

console.log(event1.listenerCount('myEvent'));

event1.emit('myEvent','Event Occured');

*/





//Special Events:





/*
const EventEmitter = require('events');
var event1 = new EventEmitter();

event1.on('error',(err)=>{
    console.error("Sorry!!!we got error..");
});

event1.on('newListener',(event,listener)=>{
    console.log(`Listener is added to ${event}`);
});

event1.on('removeListener',(event,listener)=>{
    console.log(`Listener is removed..from ${event}`);
});

var func1 = (msg)=>{
    console.log("Message from func1:" + msg);
};

var func2 =(msg)=>{
    console.log("Message from func2:" + msg);
};

event1.on('sampleevent',func1);
event1.on('sampleevent',func2);

event1.off('sampleevent',func1);

event1.emit('sampleevent','Event Occured');
event1.emit('error',new Error());

*/



//Asynchronous Events...

const EventEmitter = require('events');

var event1 = new EventEmitter();

event1.on('sampleevent',(msg)=>{
     setImmediate(()=>{
          console.log("Message from Asynchronous.." + msg);
      });
});

var func = (msg) =>{
      console.log("Message from func:" + msg);
};

event1.on('sampleevent',func);

event1.emit('sampleevent','Event Occured');
