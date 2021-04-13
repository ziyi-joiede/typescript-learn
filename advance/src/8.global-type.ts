// ES6 模块化语法
import $ from 'jquery';

$(
	function(){
		$('body').html('<h1>123123123</h1>');
		new $.fn.init();
	}
);