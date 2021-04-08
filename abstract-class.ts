// readonly 

// class Person9 {
// 	public readonly name: string;
// 	constructor(public name1: string){
// 		this.name = name1
// 	}
// }

// let p9 = new Person9('lyw');
// console.log(p9.name);
// p9.name = 'hello';


// 抽象类

// 只能被继承，不能实例化
abstract class Geom{
	constructor(public width: number){}
	getType(){
		return  'Geom'
	}
	abstract getArea():number
}

// new Geom();

class Circle extends Geom{
	// 实现 Geom 的 getArea 方法
	getArea(){
		return 123
	}

}

class Squre extends Geom {
	// 实现 Geom 的 getArea 方法
	getArea(){
		return 1
	}
}

class Triangle {
	// getArea(){}
}

interface Person10 {
	name: string
}

interface Teacher3 extends Person10{
	// name: string
	teachingAge: number
}

interface Student10 extends Person10{
	// name: string,
	age: number
}

let teacher10 = {
	name: 'dell',
	teachingAge: 3
}
let student10 = {
	name: 'lee',
	age: 10
}
let getUserInfo = (user: Person10) => {
	console.log(user.name);
}

getUserInfo(teacher10);
getUserInfo(student10);