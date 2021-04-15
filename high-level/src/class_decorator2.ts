// 类的装饰器
// 对类修饰的工具，本身是一个函数
// 类装饰器接收的是构造函数
// 通过 @ 来使用
// 不是在类实例化时执行，而是在类定义好之后立即执行


// 装饰器定义
// 工厂类型的包装:解决test1.getName()报错
// function testDecoratorFactory(){
// 	return function <T extends new (...args: any[]) => {}>(constructor: T){
// 		// constructor.prototype.getName = () => {
// 		// 	console.log('testDecorator1');
// 		// }
// 		return class extends constructor {
// 			name = 'lyw';
// 			getName(){
// 				return this.name;
// 			}
// 		}
// 	}
// }

// const Test1 = testDecoratorFactory()(class {
// 	name:string;
// 	constructor(name: string){
// 		this.name = name;
// 	}
// });

// let test1 = new Test1('test1');
// test1.getName();



function testDecorator1<T extends new (...args: any[]) => {}>(constructor: T){
	// constructor.prototype.getName = () => {
	// 	console.log('testDecorator1');
	// }
	return class extends constructor {
		name = 'lyw';
		getName(){
			console.log(this.name);
			return this.name;
		}
	}
}

// 装饰器使用
@testDecorator1
class Test1{
	name:string;
	constructor(name: string){
		this.name = name;
	}
}
console.log(Test1.prototype);

let test1 = new Test1('test1');
(test1 as any).getName();

