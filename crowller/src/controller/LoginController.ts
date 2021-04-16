import 'reflect-metadata';
import { Request, Response} from 'express';
import {controller, get, post} from '../decorator/index';
import { getResponseData } from '../utils/util';

// 解决问题 1：express库的类型定义文件描述不准确
interface BodyRequest extends Request {
	body: {
		[key: string]: string | undefined;
	}
}

@controller('/')
export class LoginController {

	static isLogin(req:BodyRequest):boolean{
		return !!(req.session ? req.session.login : false)
	}

	@get('/logout')
	logout(req: Request, res: Response):void {
			if(req.session){
				req.session.login = undefined;
			}
			// const isLogin = req.session ? req.session.login : false;
			res.json(getResponseData(true));
		
	}
	@get('/')
	home(req: BodyRequest, res: Response):void{
		const isLogin = LoginController.isLogin(req);
		if(isLogin){
			res.send(`
				<html>
					<body>
						<form method="post" action="/login">
							<a href="/getData">爬取</a>
							<a href="/logout">退出</a>
						</form>
					</body>
				</html>
			`);
		}else{
			res.send(`
				<html>
					<body>
						<form method="post" action="/login">
							<input type="password" name="password"/>
							<button>提交</button>
						</form>
					</body>
				</html>
		`);
		}
	}

	@post('/login')
	login(req: BodyRequest, res: Response):void{
		const { password } = req.body;
		const isLogin = LoginController.isLogin(req);
		if(isLogin){
			res.json(getResponseData(false,'已经登陆过'));
		}else{
			if (password == '123' && req.session) {
				req.session.login = true;
				res.json(getResponseData(true,'已经登陆过'));
			} else {
				res.json(getResponseData(false,'登陆失败'));
			}
		}
	}
}