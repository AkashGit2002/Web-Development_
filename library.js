// function


function greet(name, callback) {
	console.log('Hi' + ' ' + name);
	callback();
}

const obj=new  Object({
	
})

// callback function
function callMe() {
	console.log(`I am callback function ${a}`);
}

// passing function as an argument
greet('Peter', callMe);

console.log(a);
const a=10;