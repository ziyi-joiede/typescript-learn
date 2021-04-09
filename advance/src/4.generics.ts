// 泛型：generics
// 泛指的类型

function join(first: string|number, second: string|number){
	return `${first}${second}`;
}

join(1, 2);
join(1, '2');

// 现在要求两个参数的类型必须一致
// T 为一个泛型
function join1<T>(first: T, second: T){}

join1<string>('1', '2'); // first 必须为 string 类型，second 也必须为 string 类型
join1<number>(1, 2);


function map<T>(params:T[]){
	return params;
}
// 或者
// function map<T>(params:Array<T>){
// 	return params;
// }

map<string>(['123','a','b']);

// 两个参数类型不一致
function map1<T, P>(first:T, second:P){}

map1<number, string>(1, '3');
map1(1, '');