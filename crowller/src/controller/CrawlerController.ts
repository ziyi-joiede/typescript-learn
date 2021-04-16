import 'reflect-metadata';
import { Request, Response, NextFunction} from 'express';
import { get, controller, use } from '../decorator/index';
import { getResponseData } from '../utils/util';
import Crawler from '../utils/crawller';
import Analyzer from '../utils/analyzer';
import fs from 'fs';
import path from 'path';

// 解决问题 1：express库的类型定义文件描述不准确
interface BodyRequest extends Request {
	body: {
		[key: string]: string | undefined;
	}
}

const checkLogin = (req: Request, res: Response, next: NextFunction):void => {
	const isLogin = !!(req.session ? req.session.login : false);
	if(isLogin){
		next()
	}else{
		res.json(getResponseData(null, `请先登录`));
	}
};

@controller('/')
export class CrawlerController {
	@get('/getData')
	@use(checkLogin)
	getData(req: BodyRequest, res: Response):void{
		const secret = 'secretKey';
		const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
		let analyzer = Analyzer.getInstance();
		new Crawler(url, analyzer);
		res.json(getResponseData(true));
	}

	@get('/showData')
	@use(checkLogin)
	showData(req: BodyRequest, res: Response):void{
		try{
			const position = path.resolve(__dirname, '../../data/course.json');
			const result = fs.readFileSync(position, 'utf8');
			res.json(getResponseData(JSON.parse(result)));
		}catch(ex){
			res.json(getResponseData(false,'数据不存在'));
		}
	}
}