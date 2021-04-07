// class 类

// 1.定义类
class Person3{
	name = 'lyw';
	getName(){
		return this.name;
	}
}
let person3 = new Person3()

// console.log(person3.getName());

// 2.类的继承
class Teacher extends Person3{
	// 重写父类方法
	getName(){
		// super 的关键应用：重写父类方法时，仍然想调用父类的该方法，
		return super.getName() + 'teacher getName'
	}
	getTeacherName(){
		return 'teacher getTeacherName'
	}
}

let teacher1 = new Teacher()

// console.log(teacher1.getTeacherName());
// console.log(teacher1.getName());


// 3.类的访问类型
// private, protected, public
// public 允许属性或者方法在类内外访问或调用，不写默认为 public
// private 只允许属性或者方法在类内访问或调用
// protected 只允许属性或者方法在类内及继承的子类中访问或调用
class Person5{
	protected name: undefined|string = undefined;
	public sayHi(){                            // 隐藏 public
		this.name;                        // 类内调用
		console.log('hi');
	} 
}

let person5 = new Person5();
// console.log(person5.name);            // 类外调用
// person5.name = 'lyw'

// console.log(person5.name);
person5.sayHi()

class Teacher2 extends Person5{
	public sayBye(){
		this.name // 访问父类的 name 属性 
	}
}

// 4.constructor
class Person6{
	// 传统写法
	// public name:string;
	// constructor(name: string){
	// 	this.name = name;
	// }

	// ts 的简化写法
	constructor(public name:string){}
}

let person6 = new Person6('lyw');
console.log(person6.name);

class Person7{
	constructor(public name:string){}
}

class Teacher7 extends Person7{
	constructor(public age:number){
		// 此处必须调用 super
		super('LYW');
	}
	sayHi(){
		console.log(this.name);
		
	}
}

let teacher7 = new Teacher7(29);

console.log(teacher7.age);
console.log(teacher7.name);

