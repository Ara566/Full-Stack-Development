/*
const chalk = import('chalk')

// Printing the text in blue color
console.log(chalk.blue('Hello Geek!'));

// Printing the text in red color
console.log(chalk.red('This is an Error! '));

// Printing the text in green color
console.log(chalk.rgb(100, 150, 70)
		('This is in custom color'));

*/
/*
let http=require('http');

http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(`
	<h2>welcome to our comapny</h1>
	<button>click</button>
	`)
	res.end("bye.....")
}).listen(3000);
*/

console.log("atart")

setTimeout(() => {
	console.log("its settimeout callback code entered into event queue")
},0)

console.log("end")