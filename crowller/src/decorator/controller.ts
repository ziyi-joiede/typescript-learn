
import router from '../router';
import {RequestHandler} from 'express';
import { Methods } from './request';

export function controller(root: string){
	return function (target: new (...args:any[]) => any) {
		for(let key in target.prototype){
			// console.log(Reflect.getMetadata('path', target.prototype, key));
			const path:string = Reflect.getMetadata('path', target.prototype, key);
			const method:Methods = Reflect.getMetadata('method', target.prototype, key);
			const middleware = Reflect.getMetadata('middleware', target.prototype, key);
			const handler:RequestHandler = target.prototype[key];
			if(path && method){
				const fullPath = path === '/' ? path :`${root}${path}`;
				if(middleware){
					router[method](fullPath, middleware, handler);
				}else{
					router[method](fullPath, handler);
				}
			}
		}	
	}
}