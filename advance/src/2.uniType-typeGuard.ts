interface Bird{
	fly:boolean;
	sing: () => {}
}

interface Dog{
	fly:boolean,
	bark: () => {}
}

// 联合类型在属性读取时只会取共有的方法
// 1.类型断言的方式
function trainAnimal(animal: Bird | Dog){
	if(animal.fly){
		// 类型保护：断言的方式
		(animal as Bird).sing();
	}else{
		// 类型保护：断言的方式
		(animal as Dog).bark();
	}
	console.log(animal.fly);
	// animal.sing();
	// animal.bark();
}

// 2.in 语法做类型保护
function trainAnimalSecond(animal:Bird|Dog){
	if('sing' in animal){
		animal.sing();
	}else{
		animal.bark();
	}
}

// 3.typeof 语法做类型保护
function add(first:number|string,second:number|string){
	if(typeof first === 'string' || typeof second === 'string'){
		return `${first}${second}`;
	}
	return first + second;
}

// 4.instanceof 语法做类型保护
// 不可以用 interface 定义数据结构
class NumberObj{
	count:number;
}
function addSecond(first:object|NumberObj, second:object|NumberObj){
	if(first instanceof NumberObj && second instanceof NumberObj){
		return first.count + second.count;
	}
	return 0;
}