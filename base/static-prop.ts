// getter ， setter
class Person8 {
	constructor(private _name: string){}
	get name() {
		return this._name + ' good';
	}
	set name(newVal: string){
		const realName = this._name.split(' ')[0];
		this._name = realName;
	}
}

let p8 = new Person8('lyw');

console.log(p8.name);
p8.name = 'liyongwei';
console.log(p8.name);

// 单例模式
class Demo{
	private static instance: Demo; // 存储 new 出来的 Demo 实例
	// 规避通过 new 创建实例的形式
	private constructor(public name: string){
		this.name = name;
	}

	// 把 getInstance 方法挂载到 Demo 本身，
	// 而不是在原型(实例)上
	static getInstance(){
		if(!this.instance){
			this.instance = new Demo('liyongwei');
		}
		return this.instance;
	}
}

let demo1 = Demo.getInstance();
let demo2 = Demo.getInstance();

console.log(demo1 === demo2); // true

console.log(demo1);

