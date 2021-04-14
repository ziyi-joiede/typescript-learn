
// 解决问题 2：当使用中间件的时候，对 req，res 做修改后，但是类型并不能改变
declare namespace Express {
	interface Request {
		teacherName:string
	}
}