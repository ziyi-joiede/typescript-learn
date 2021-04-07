// inteface 概念

// 接口只是在开发中使用，
// 编译成 js 代码后，不会存在接口

// interface 只能代表对象类型
interface Person {
	name: string,  // name 必须有
	age?: number    // age 可有可无
	readonly gender, // gender 只读
	[propName: string]: any, //初 name，age，gender 之外的属性也可以
	say():string,            // 对象的方法
}

// interface 之间的继承
interface Teacher extends Person{
	teach():string
}

// 接口定义函数
interface SayHi{
	(word: string): string
} 
// 调用接口定义的函数
let say: SayHi = (word:string) => {
	return word;
}


// 类型别名
// 类型别名还可以代替基础类型，如
// type Person2 = string；
type Person2 = {
	name:string
}

// interface 优先于 type
let getPersonName = (person:Teacher):void => {
	console.log(person.name);
	person.gender = ''
};



let setPersonName = (person:Person, name:string):void => {
	person.name = name;
};

let person = {
	name:'lyw', 
	age:29, 
	gender:'male',
	sex:'male',
	say:function(){
		return this.name
	}
};
// 不报错
getPersonName(person);

// TS 会对对象字面量进行强校验
// 此时报错
getPersonName({
	name:'lyw', 
	age:29, 
	gender:'male',
	sex:'male'
})

setPersonName(person, 'LYW');

// User 必须具有 Person 中必须有的属性和方法
class User implements Person {
	name = 'lyw';
	gender='male';
	say(){
		return 'hello';
	}
}
