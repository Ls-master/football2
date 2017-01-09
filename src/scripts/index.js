require("./libs/spa.min.js");
require("./views/guide.js");
require('./views/main.js');
require('./libs/swiper-3.4.0.min.js');

//定义初始加载视图
SPA.config({
	indexView: 'guide'
});
