$(function(){


/*右侧固定导航*/
        $(".rSidebarItem").each(function (i) {
            $(".rSidebarItem").eq(i).mouseover(function () {
                $(this).css({
                    background: "#ec1212",
                    color: "#fff"
                })
            })
            $(".rSidebarItem").eq(i).mouseout(function () {
                $(this).css({
                    background: "#fff",
                    color: "#000"
                })
            })
        })
        $(".rsItemName").click(function () {
            $("html,body").stop().animate({
                "scrollTop": 0
            }, 500);
        })

    
    $(".show-list-con").find("li").each(function(i){
        /*小图片划过边框*/
        $(this).mouseover(()=>{
            $(this).addClass("on_on").siblings().removeClass("on_on")
        })
        /* 小图片点击切换*/
        $(this).on("click",()=>{
            var srcc=$(this).children().attr("src")
            $(".img__").attr({
                src:srcc
            })
            $("#bigbig").attr({
                src:srcc
            })
        })
    })
 
 $(".show-pic").children().mouseover(function(e){
              $("#warp_lok").show().stop().css({"left":e.offsetX-40,"top":e.offsetY-40})
              $("#Big_warp").show()
              $("#Big_warp_lok").find("img").eq(0).css({"left":-((e.offsetX-40-20)*4),"top":-((e.offsetY-40-20)*4)})
              $(".show-pic").find("img").eq(0).mousemove(function(e){
                $("#warp_lok").show().stop().css({"left":e.offsetX-40,"top":e.offsetY-40})
              $("#Big_warp").show()
              $("#Big_warp_lok").find("img").eq(0).css({"left":-((e.offsetX-40)*4),"top":-((e.offsetY-40)*4)})
            })
            
 $(".show-pic").children().mouseout(function(){
              $("#warp_lok").hide();
              $("#Big_warp").hide()
            })
            })



            var id=JSON.parse(localStorage.getItem("id"))
            $.get("http://47.104.244.134:8080/goodsbyid.do", {
                id: id
            }, function (data) {
                $(".comName").find("h1").text(data.name)
                $(".pri").text(data.price/100);
                $(".img___").eq(0).attr({src:data.picurl})
                
                /*三张没用的图片*/
                $(".img___").eq(1).attr({src:data.picurl})
                $(".img___").eq(2).attr({src:data.picurl})
                $(".img___").eq(3).attr({src:data.picurl})

                $(".img__").attr({src:data.picurl})
                $("#bigbig").attr({src:data.picurl})

        
                


                $("#jianjian").click(function () {
                    if ($("#_nub").val() <= 1) {
                        $("#_nub").val(1);
                    } else {
                        $("#_nub").val(parseInt($("#_nub").val()) - 1);
                    }
                })
                $("#addadd").click(function () {
                    $("#_nub").val(parseInt($("#_nub").val()) + 1)
                })
                $("#_nub").on("input", function () {
                    if ($("#_nub").val() == "" || $("#_nub").val() < 1) {
                        $("#_nub").val(1);
                    } else {
                        $("#_nub").val($("#_nub").val())
                    }
                })
                var token = JSON.parse(localStorage.getItem("token"));
                console.log(token)
                $("#addToCartForDetail").click(function () {
        
                    $.get("http://47.104.244.134:8080/cartsave.do", {
                        gid: id,
                        token: token
                    }, function (data) {
                    })
                    location.href="cart.html"
                })
            })
        
        
        
        
        
        
        
        













})