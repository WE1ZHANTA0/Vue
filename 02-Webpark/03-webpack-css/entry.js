document.write('烧烤林市场打开灵符女娲饿哦飞机文')

//导入另外一个文件中的内容
var str = require('./module.js')
document.write(str)

// require('!style-loader!css-loader!./site.css')
// require('!style-loader!css-loader!./site2.css');

require('./site.css');
require('./site2.css');

/**
 * 2、使用
		2.1、在导入css的时候，给它加上style-loader、css-loader
		
		例子:require('!style-loader!css-loader!./site.css')
		
		2.2、在导入css的时候，不需要写!style-loader!css-loader!，但是一定要在打包的时候，后面加上 --module-bind "css=style-loader!css-loader" ，注意这个地方，必须要用`""`
 */