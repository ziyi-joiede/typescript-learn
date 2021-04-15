let userInfo:any = undefined;

function catchError(msg: string){
	return function (target:any, key:string, descriptor: PropertyDescriptor){
		const fn = descriptor.value;
		descriptor.value = function(){
			try{
				fn()
			}catch(ex){
				console.log(msg);
			}
		}
	}
}

class Test6 {

	@catchError(`userInfo.name 不存在`)
	getName(){
		return userInfo.name;
	}

	@catchError(`userInfo.age 不存在`)
	getAge(){
		return userInfo.age;
	}
}

let t = new Test6();

console.log(t.getName());
console.log(t.getAge());
