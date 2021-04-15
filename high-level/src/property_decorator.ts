// 属性装饰器

// function nameDecorate(target:any, key:string): any{
// 	// descriptor.writable = true;
// 	console.log(target, key);
// 	// 修改 _name 原始的 descriptor
// 	const desciptor:PropertyDescriptor = {
// 		writable: false
// 	}
// 	return desciptor;
// }

function nameDecorate(target:any, key:string): any{
	target[key] = 'liyongwei';
}

class Test4{
	@nameDecorate
	public _name = 'lyw';
}

let test4 = new Test4();
// test4._name = 'liyongwei';
console.log(test4._name);
