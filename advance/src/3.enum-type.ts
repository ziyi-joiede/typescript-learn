// Enum 枚举类型


// JS 语法的写法
// const Status = {
// 	OFFLINE: 0,
// 	ONLINE: 1,
// 	DELETED: 2,
// }

enum Status {
	OFFLINE = 1, // 默认从 0 开始,一次递增
	ONLINE = 9,
	DELETED = 10
}

function getResult(status){
	if(status === Status.OFFLINE){
		return 'offline';
	}else if (status === Status.ONLINE){
		return 'online';
	}else if(status === Status.DELETED){
		return 'deleted';
	}else{
		return 'error';
	}
}

console.log(Status);
console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETED);
console.log(Status[0]);
console.log(Status[1]);
console.log(Status[2]);






console.log(getResult(2));
