var mainTpl = require('../templates/index.string');

SPA.defineView('index', {
  html: mainTpl,

  plugins: ['delegated',{
    name: 'avalon',
    options: function(vm){
      vm.list = [];
    }
  }],

  // 绑定点击事件
  bindActions:{
    'exit': function(){
      this.hide(); //this指index视图
    }
  },

  bindEvents: {
    show: function() {
      //获取avalon的vm对象
      var vm = this.getVM();

      var mySwiper = new Swiper('#main-swiper',{
        onSlideChangeStart: function(swiper){
          console.log(swiper.activeIndex);
          $('#nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
        }
      });

      $('#nav li').on('touchend', function() {
        mySwiper.slideTo($(this).index());
      });

      $.ajax({
        type: "get",
        url: "../../../data/list.json",
        // url: "/apis/list.php",
        success: function(res){
          vm.list = res.data;
        }
      });
    }
  }
});
