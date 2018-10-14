$(function () {

    // // 控制购物车显示隐藏
    $(".vehicle").mouseover(function(){
        // $("p").css("background-color","yellow");
        $('.vehicle a').css({
            background: "#fff",
            color: "#ff6700"
        });
        $(".gouwu").show();
    });

    $(".vehicle").mouseout(function(){
        $('.vehicle a').css({
            background: "#424242",
            color: "#b0b0b0"
        });
        $(".gouwu").hide();
    });

    // 控制搜索框a标签显示隐藏
    $('.text').click(function (event) {
        //取消事件冒泡
        event.stopPropagation();
        //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。
        $('.form a').hide('slow');
        $('.form_show ul').show();
        $('.form input').css({
            border: "1px solid #ff6700"
        });
        $('.form button').css("border","1px solid #ff6700");
        $('.form button').css("border-left","none");
        return false;
    });
    //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
    $(document).click(function(event){
        var _con = $('.form a');  // 设置目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
            $('.form a').show(1000);     //淡出显示
            $('.form_show ul').hide('slow');
            $('.form input').css({
                border: "1px solid #e0e0e0"
            });
            $('.form button').css("border","1px solid #e0e0e0");
            $('.form button').css("border-left","none");
        }
    });



    var $wrap = $(".grid_r");
    var $inner = $(".inner");
    var $img = $inner.find("img");
    var $left = $(".left");
    var $right = $(".right");
    var $span = $(".dd span");
    var move_bol = false;
    var index = 0;//记录第几张
//下一张

    $right.on("click",function () {
        if (move_bol) {return}
        index++;
        if (index>5) {
            index=0;
        }
        change()
    })
//上一张
    $left.on("click",function () {
        if (move_bol) {return}
        index--;
        if (index<0) {
            index=5;
        }
        change()
    })
//给3个小点按钮加点击事件
    $span.on("click",function () {
        if (move_bol) {return}
        index = $(this).index();//记录点击第几张
        change()//执行切换函数
    })

// 切换函数
    function change() {
        $span.removeClass("select");
        // 0 1 2 3
        // if (index==3) {var n = 0}else{var n = index;}
        var n = index==6?0:index;
        $span.eq(index).addClass("select");
        $img.css("zIndex",0);

        $img.eq(index).css("zIndex",1);

        move_bol = true;
        $img.eq(index).stop().animate({opacity:1},1000,function () {
            $img.css("opacity",0)
            $img.eq(index).css("opacity",1)
            move_bol = false;
        })
    }
    var timer = null;
//自动播放函数
    function autoPlay() {
        clearInterval(timer);
        timer = setInterval(function () {
            $right.click()
        },4000)
    }
    autoPlay()
    $wrap.on("mouseenter" , function () {
        clearInterval(timer);
    })
    $wrap.on("mouseleave" , function () {
        autoPlay()
    })
})