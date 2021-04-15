// 访问器的装饰器
// 访问器属性只能对 get 或者 set 访问器进行装饰

function visitDecorator(target:any, key:string, descriptor:PropertyDescriptor){
	// descriptor.writable = true;
}

class Test3{
	private _name: string;
	constructor(name: string){
		this._name = name;
	}

	get name(){
		return this._name;
	}
	@visitDecorator	
	set name(val: string){
		this._name = val;
	}
}

let test3 = new Test3('lyw');
// test3.name = 'liyongwei';
console.log(test3.name);
