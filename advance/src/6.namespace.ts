// class Header{
// 	constructor(){
// 		let elem = document.createElement('div');
// 		elem.innerText = 'This is header';
// 		document.body.appendChild(elem);
// 	}
// }
// class Content{
// 	constructor(){
// 		let elem = document.createElement('div');
// 		elem.innerText = 'This is content';
// 		document.body.appendChild(elem);
// 	}
// }

// class Footer{
// 	constructor(){
// 		let elem = document.createElement('div');
// 		elem.innerText = 'This is footer'
// 		document.body.appendChild(elem);
// 	}
// }

// class Page{
// 	constructor(){
// 		new Header();
// 		new Content();
// 		new Footer();
// 	}
// }

// 问题：此时，Header，Content，Footer，Page 在浏览器环境下都会变成全局变量
// 利用 namespace 解决

// 依赖声明
/// <reference path='./components.ts /' >
namespace Home{
	// class Header{
	// 	constructor(){
	// 		let elem = document.createElement('div');
	// 		elem.innerText = 'This is header';
	// 		document.body.appendChild(elem);
	// 	}
	// }

	// class Content{
	// 	constructor(){
	// 		let elem = document.createElement('div');
	// 		elem.innerText = 'This is content';
	// 		document.body.appendChild(elem);
	// 	}
	// }

	// class Footer{
	// 	constructor(){
	// 		let elem = document.createElement('div');
	// 		elem.innerText = 'This is footer'
	// 		document.body.appendChild(elem);
	// 	}
	// }
  // export 向外暴露出去
	// export class Page{
	// 	user:Components.User = {name: 'lyw'}  
	// 	constructor(){
	// 		new Components.Header();
	// 		new Components.Content();
	// 		new Components.Footer();
	// 	}
	// }
}