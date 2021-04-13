namespace Components{
	export interface User{
		name: string
	}
	export namespace SubComponents{
		export class Test {}
	}
	export class Header{
		constructor(){
			let elem = document.createElement('div');
			elem.innerText = 'This is header';
			document.body.appendChild(elem);
		}
	}

	export class Content{
		constructor(){
			let elem = document.createElement('div');
			elem.innerText = 'This is content';
			document.body.appendChild(elem);
		}
	}

	export class Footer{
		constructor(){
			let elem = document.createElement('div');
			elem.innerText = 'This is footer'
			document.body.appendChild(elem);
		}
	}
}
