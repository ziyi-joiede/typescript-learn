// 类型定义文件

// 定义全局的变量
// declare var $: (param: () => viod) => void;

// 定义全局的函数
// interface JqueryInstatce{
// 	html: (html:string) => JqueryInstatce;
// }

// 函数重载
// 定义 $(function(){}) 的用法
// declare function $(readyFunc: () => void): void;

// 定义 $('body').html('<h1>123123123</h1>') 的用法
// declare function $(selector: string): JqueryInstatce;

// 定义 $.fn.init() 的用法;
// declare namespace $ {
// 	namespace fn{
// 		class init{}
// 	}
// }

// 使用 interface 语法实现函数重载
// interface JQuery{
// 	(readyFunc: () => void): void;
// 	(selector: string): JqueryInstatce;

// }

// declare var $: JQuery;

// ES6 模块化：类型定义文件
declare module 'jquery'{
	interface JqueryInstatce{
		html: (html:string) => JqueryInstatce;
	}

	// 混合类型
	function $(readyFunc: () => void): void;

	function $(selector: string): JqueryInstatce;

	namespace $ {
		namespace fn{
			class init{}
		}
	}
	export = $;
}
