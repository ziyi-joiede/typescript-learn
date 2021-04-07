// 静态类型
// 更直观的判断对象的属性或者类型

const count: number = 2021;

// count = ''; 报错

count.toExponential // 会有 number 类型的方法提示

interface Point {
	x: number,
	y: number
}

const point: Point = { 
	x: 3,
	y: 4
};

point.x;

// 基础静态类型
const num: number = 123;
const nameStr: string = 'lyw';
// null, undefined, symbol, boolean, void

// 对象类型
const teacher: {
	name:string,
	age:number
} = {
	name: 'lyw',
	age: 29
};

// 数组类型
const nums: number[] = [1, 2, 3];

// 类类型
class Person {}
const dell: Person = new Person();

// 函数类型
const getTotal: () => number = () => {
	return 123;
};



