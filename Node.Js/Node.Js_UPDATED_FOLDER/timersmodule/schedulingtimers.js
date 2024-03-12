/*
Timers module in Node.js contains various functions
that allow us to execute a block of code or a function after a set period of time.
The Timers module is global, we do not need to use require() to import it.

2 functions
1)scheduling timers
2)canceling timers

*/


/*
Node.js Immediate Timer Class:------>
Immediate Class has an object (setImmediate())---> which is created internally to scheduled actions
                              (clearImmediate())--> can be passed in order to cancel those scheduled actions.


setImmediate() fun return Immediate object and
 immediate.ref()----->method is used for activate the immediate object

 immediate.unref()---> to allow the event loop to exit even if the Immediate object is still active.


 */


 const immediate = setImmediate(() => {
    console.log('Immediate function running');
  });

  //immediate.unref(); 
  //or
  
  clearImmediate(immediate)
  immediate.ref() //even its running again fun canceled
  console.log("immedate fun canceled")
  



  

  let intervel=setInterval(()=>{
        console.log("setintervel fun executing....")
  },1000)

  intervel.unref() 
  //or clearIntervel
  console.log("setintervel canceled....")




  let timeout=setTimeout(()=>{
    console.log("after 3secs executed....")
  },3000)

  timeout.unref()
