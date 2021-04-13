// 类中的泛型

// interface Item{
// 	name: string;
// }

class DataManager<T extends number | string>{
	constructor(private data: T[]){}
	getItem(index: number): T{
		return this.data[index];
	}
}

// let data = new DataManager([
// 	{
// 		name: 'lyw'
// 	}
// ]);


// interface Test {
// 	name: string
// }

let data = new DataManager<number>([1]);

// 使用泛型作为一个具体的类型注解
function hello<T>(params: T){
	return params;
}

const func: <T>(param: T) => T = hello;