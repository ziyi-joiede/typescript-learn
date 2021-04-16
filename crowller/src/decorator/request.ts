import {CrawlerController, LoginController} from '../controller/index';
export enum Methods {
	get = 'get',
	post = 'post'
}

export function getRequestDecorator(type: Methods) {
	return function (path:string){
		return function(target: CrawlerController|LoginController, key:string){
			Reflect.defineMetadata('path', path, target, key);
			Reflect.defineMetadata('method', type, target, key);
		}
	}
}

export const get = getRequestDecorator(Methods.get);

export const post = getRequestDecorator(Methods.post);



