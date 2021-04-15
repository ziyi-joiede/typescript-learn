// 类中方法的参数装饰器

// target：原型，methodName：装饰器装饰的方法名字， paramIndex：参数的位置
function paramDecorator(target:any, methodName:string, paramIndex:number){
	console.log(target, methodName, paramIndex);
}

class Test5{
	getInfo(@paramDecorator name:string, @paramDecorator age:number){
		console.log(name, age);
	}
}

let test5 = new Test5();

// 打印
// { getInfo: [Function (anonymous)] } getInfo 1
// { getInfo: [Function (anonymous)] } getInfo 0

test5.getInfo('lyw', 29);
