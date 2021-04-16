// import fs from 'fs';
// import path from 'path';
// import { getResponseData } from './utils/util';
// import { Router, Request, Response, NextFunction } from 'express';
// import Crawler from './utils/crawller';
// import Analyzer from './utils/analyzer';


// // 解决问题 1：express库的类型定义文件描述不准确
// interface BodyRequest extends Request {
// 	body: {
// 		[key: string]: string | undefined;
// 	}
// }

// const checkLogin = (req: Request, res: Response, next: NextFunction) => {
// 	const isLogin = req.session ? req.session.login : false;
// 	if(isLogin){
// 		next()
// 	}else{
// 		res.json(getResponseData(null, `请先登录`));
// 	}
// };

// const router = Router();

// router.get('/', () => {});

// router.get('/logout', (req: Request, res: Response) => {
// 	if(req.session){
// 		req.session.login = undefined;
// 	}
// 	// const isLogin = req.session ? req.session.login : false;
// 	res.json(getResponseData(true));
// });

// router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
// 	const secret = 'secretKey';
// 	const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
// 	let analyzer = Analyzer.getInstance();
// 	new Crawler(url, analyzer);
// 	res.json(getResponseData(true));
// });

// router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
// 	try{
// 		const position = path.resolve(__dirname, '../data/course.json');
// 		const result = fs.readFileSync(position, 'utf8');
// 		res.json(getResponseData(JSON.parse(result)));
// 	}catch(ex){
// 		res.json(getResponseData(false,'数据不存在'));
// 	}
// });

// router.post('/login', (req: Request, res: Response) => {
// 	const { password } = req.body;
// 	const isLogin = req.session ? req.session.login : false;
// 	if(isLogin){
// 		res.json(getResponseData(false,'已经登陆过'));
// 	}else{
// 		if (password == '123' && req.session) {
// 				req.session.login = true;
// 				res.json(getResponseData(true,'已经登陆过'));
// 		} else {
// 			res.json(getResponseData(false,'登陆失败'));
// 		}
// 	}
// });

// export default router;

import {Router} from 'express';

export default Router();