// 方法的装饰器

// 普通方法：target 对应的是类的 prototype, key 为方法的名字
// 静态方法：target 对应的是类的构造函数, key 为方法的名字
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor){
	// descriptor 和 Object.defineProperty 的最后一个参数一样
	// console.log(target, key);
	// console.log(descriptor);
	// descriptor.writable = false;
	descriptor.value = () => 'decorator';
}

class Test2{
	name: string;
	constructor(name: string){
		this.name = name;
	}
	@getNameDecorator
	getName(){
		return this.name;
	}
}

let test2 = new Test2('lyw');
// test2.getName = () => '123'
console.log(test2.getName());
