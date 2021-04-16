import express from 'express';
import './controller/LoginController';
import './controller/CrawlerController';
// import router from './router';
import router from './router';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';

// 问题 1：express库的类型定义文件描述不准确
// 问题 2：当使用中间件的时候，对 req，res 做修改后，但是类型并不能改变

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(
	cookieSession({
		maxAge: 20 * 60 * 60 * 1000,
		name: 'session',
		keys: ['teacher dell']
	})
);
// 自定义中间件
// app.use((req: Request, res: Response, next: NextFunction) => {
// 	req.teacherName = 'lyw';
// 	next();
// });

app.use(router);

app.listen(7001, () => {
	console.log('server is running');
});
