// 类的装饰器
// 对类修饰的工具，本身是一个函数
// 类装饰器接收的是构造函数
// 通过 @ 来使用
// 不是在类实例化时执行，而是在类定义好之后立即执行


// 装饰器定义
// 工厂类型的包装
function testDecorator(flag: boolean){
	if(flag){
		return function (constructor: any){
			constructor.prototype.getName = () => {
				console.log('testDecorator1');
			}
			// console.log('testDecorator1');
		}
	}else{
		return function (constructor: any){}
	}
}

// function testDecorator2(constructor: any){
// 	// constructor.prototype.getName = () => {
// 	// 	console.log('lyw');
// 	// }
// 	console.log('testDecorator2');
// }

// 装饰器使用
// 装饰器执行时是从下到上，从左到右的执行
@testDecorator(true) 
// @testDecorator2 
class Test{
	
}
console.log(Test.prototype);

let test = new Test();
(test as any).getName();

