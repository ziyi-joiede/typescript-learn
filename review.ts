// 基础类型：boolean, number, string, void, undefined, symbol, null

// 此时 TS 的类型推断失效
let  count2: number;
count2 = 123;


// 对象类型：{}, class, function, []

const func = (str:string):number => {
	return parseInt(str, 10);
}
// TS 断言 func 函数返回 number 类型
// const func = (str:string) => {
// 	return parseInt(str, 10);
// }



// func1: (str: string) => number 
// ：后面跟类型，
// = 后面跟具体函数实现
// 此处的 number 不可省略
const func1: (str: string) => number = (str) => {
	return parseInt(str, 10)
}


// Date 类型
const date = new Date();

// 其他的 case
interface Person {
	name:string
}
const rawData = '{"name":"lyw"}';
const newData:Person = JSON.parse(rawData);

let tmp:number|string = 123;
tmp = '456';


// let fun: (str:string) => string = (str) => {
// 	return '' + str
// }