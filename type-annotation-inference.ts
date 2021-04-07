// 类型注解 type-annotation
// 类型推断 type-inference

// 如果 TS 能够自动分析变量类型，我们就什么也不需要做
// 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

// 类型注解：我们告诉 TS 变量是什么类型
// let countAnnotation: number;
// countAnnotation = 123;

// 类型推断：TS会自动的尝试分析变量的类型
// let countInference = 123;

// 此处没有必要添加“类型注解”
const firstNumber = 1;
const secondNumber = 2;
// TS 能够推断出 total 的类型，total: number 可写成 total
const total = firstNumber + secondNumber;

// 此处参数需要添加"类型注解",函数返回值不需要添加类型注解
function getTotal1(firstNumber: number, secondNumber: number){
	return firstNumber + secondNumber;
}
// 此处 result 不需要类型注解
const result = getTotal1(1, 2);