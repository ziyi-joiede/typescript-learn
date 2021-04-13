// 命名空间方式，不利用查看代码的互相引用
import {Header, Content, Footer} from './6-1.components';
export default class Page{
	constructor(){
		new Header();
		new Content();
		new Footer();
	}
}