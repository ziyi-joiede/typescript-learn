interface Person{
	name: string;
	age: number;
	gender: string
}

class Teacher{
	constructor(private info:Person){}
	// <T extends keyof Person> 等价于
	// type T = 'name';
	// key: 'name';
	// Person['name']

	// type T = 'age';
	// key: 'age';
	// Person['age']

	// type T = 'male';
	// key: 'male';
	// Person['male']
	getInfo<T extends keyof Person>(key: T): Person[T]{
			return this.info[key];
	}
}

let t = new Teacher({name:'lyw', age:29, gender:'male'});
let test = t.getInfo('age');
console.log(test);


type NAME = 'name';
let a: NAME = 'name';
let b: NAME = 'abc';