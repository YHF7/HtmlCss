$(function() {

	var i = null;//记录滚动数值

	//判断超过40px就改变头部导航栏的css样式
	var timer=setInterval(function () {
		i = $(document).scrollTop();
		if (i>=40) {
			$(".top").css({
				position:"fixed",
				top:0,
				left:0,
				width:"100%",
				background: "rgba(0,0,0,.8)",
			});
		}else if(i<41){
			$(".top").css({
				position:"static",//恢复默认值
			})
		}
	},100);

	//点击购物车显示/隐藏个人清单
	$(".shopping").click(function(){
	  $(".shopping div").toggle();
	});

})