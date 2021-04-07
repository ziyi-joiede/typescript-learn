// TS 中的函数类型
function hello (){}

const hello1 = function(){};

const hello2 = () => {};

// 本改写成这样 function add(first: number, second: number):number
// 但是由于 TS 的类型推断功能，可以省略函数的返回值类型
function add(first: number, second: number){
	// 此时需要对 add 函数添加类型注解
	return first + second + '';
}

let total2 = add(1, 2);


// 函数的返回值类型为 void 类型
function sayHello (): void{
	console.log('hello');
	// return ''; 
}

// 函数永远不会执行到最后
function errorEmitter(): never{
	throw new Error();
	// 或者 while(true){}
	console.log(123);
}

// 函数解构的类型注解
function add1(
	{first, second}: {first: number, second: number}
): number{
	return first + second;
}

let total3 = add1({first: 1, second: 2})


function getNumber({ first }: { first: number }){
	return first;
}

let total4 = getNumber({first: 1})
