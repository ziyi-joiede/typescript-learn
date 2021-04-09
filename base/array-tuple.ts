// 数组和元组

import { mainModule } from 'process';

// 数组类型注解
// 1. 存储基础类型注解
let numArr: (number | string)[] = [1, 2, 3];

let strArr: string[] = [''];

let undefinedArr:undefined[] = [undefined];

// 2. 存储对象类型注解
let objectArr:{name:string}[] = [{name:'lyw'}];
// 或者
// interface Person {name:string}
// let objectArr:Person[] = [{name:'lyw'}];

// 类型别名
type User = {name:string, age:number};

class Teacher {
	name:string;
	age:number;
}


let userArr: Teacher[] = [
	new Teacher(),
	{
		name:'lyw',
		age:29,
		// gender:'male'
	} // 可以不是 Teacher 的实例
]


// 元组 tuple

let teacherInfo:(number|string)[] = ['lyw', 'male', 29];
// 现要求数组的第一项必须为字符串，第二项也必须为字符串，第三项必须为数字
// 利用元组
let teacherInfo1:[string, string|number, number] = ['lyw', 1, 29]

// 1.数组的长度固定；
// 2.数组的每项的类型也固定；
// 此时可以用元组

// 应用场景
// csv
// [
// 	['lyw', 'male', 29],
// 	['yw', 'male', 29]
// ]

const personList: [string, string, number][] = [
		['lyw', 'male', 29],
		['yw', 'male', 29]
	]