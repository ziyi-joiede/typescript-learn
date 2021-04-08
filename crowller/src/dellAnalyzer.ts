import cheerio from 'cheerio';
import fs from 'fs';
import {Analyzer} from './crawller';

interface Course {
	title: string,
	count: number
}

interface CourseResult {
	time: number
	data: Course[]
}

interface Content {
	[propName:number]: Course[];
}


class DellAnalyzer implements Analyzer {
	private static instance: DellAnalyzer;
	private getInfo(html: string){
		const $ = cheerio.load(html);
		const courseItems = $('.course-item');
		const courseInfos: Course[] = [];
		courseItems.map((index, element) => {
			let descs = $(element).find('.course-desc');
			let title = descs.eq(0).text();
			let count = parseInt(
				descs
					.eq(1)
					.text()
					.split('：')[1], 
				10
			) || index;
			courseInfos.push({title, count});
		})
		const result = {
			time: Date.now(),
			data: courseInfos
		}
		return result;
	}

	private generateJsonContent(courseResult: CourseResult, filePath: string){
		let fileContent:Content = {};
		if(fs.existsSync(filePath)){
			fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
		}
		fileContent[courseResult.time] = courseResult.data;
		return fileContent;
	}

	public analyze(html: string,filePath: string){
		const result = this.getInfo(html);
		const fileContent = this.generateJsonContent(result, filePath);
		return JSON.stringify(fileContent);
	}

	public static getInstance(){
		if(!DellAnalyzer.instance){
			DellAnalyzer.instance = new DellAnalyzer();
		}
		return DellAnalyzer.instance;
	}

	private constructor(){}
}

export default  DellAnalyzer;