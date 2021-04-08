// TS 直接引用 JS包会有问题
// ts -> .d.ts 翻译文件 -> js
import superagent from 'superagent';
import fs from 'fs';
import path from 'path';
import DellAnalyzer from './dellAnalyzer';

export interface Analyzer {
	analyze:(html:string, filePath:string) => string
}

class Crawler {
	private filePath = path.resolve(__dirname, '../data/course.json');
	
	private async getRawHtml(){
		let res = await superagent.get(this.url);
		return res.text;
	}

	private writeFile(content:string){
		fs.writeFileSync(this.filePath, content);
	}

	private async initSpiderProcess(){
		// 获取 url 对应的 html 的内容
		const html = await this.getRawHtml();
		const fileContent = this.analyzer.analyze(html,this.filePath);
		this.writeFile(fileContent);
	}
	
	constructor(private url: string, private analyzer: Analyzer){
		this.initSpiderProcess();
	}

}

const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
let analyzer = DellAnalyzer.getInstance(); 
new Crawler(url, analyzer);



