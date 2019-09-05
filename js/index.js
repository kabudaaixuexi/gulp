$(function(){
    if(localStorage.getItem("name")){
        $(".headerLogin").text("用户："+JSON.parse(localStorage.getItem("uname")))
    $(".headerLogin").css({color:"red"})
    }
    
//http://47.104.244.134:8080/
$.get("http://47.104.244.134:8080/goodsbytid.do", { "tid": 13, "page": 1 ,"limit":500},
function(data){
var data=data.data   
var str="";
for(let i =0;i<data.length;i++){

str+=`
<a class="abcdefg" href="list.html">
    <img src="${data[i].picurl}" />
    <span>${data[i].name}</span>
    <span>${data[i].info}</span>
    <small>出厂日期：${data[i].pubdate}</small>
    <small>商品编号：${data[i].createtime}</small>
</a>
`
}     

   $(".indexTabCon").html(str)
  
    $(".abcdefg").find("img").eq(0).attr({src:data[99].picurl})
// $(".name").eq(0).text(data[36].name)
// $(".price").eq(0).text(data[36].price/100)

//  跳转详情页
//  $(".aabtn").attr("href",'detail.html')
});

$(".indexTabNav").find("li").each(function(i){
    $(this).on("click",function(){
        $(".indexTabCon").eq(i).siblings().hide(500).show("slow");
    })
})







    /*烦人的弹出 ==>*/
    $(".newClose").on("click",function(){
        $(".newGuests").hide("slow")
    })


    $(".dropTitle").eq(0).mouseover(function(){
        $("#myjiuxian").css({display:"block"})
    })
    $(".dropTitle").eq(0).mouseout(function(){
        $("#myjiuxian").css({display:"none"})
    })

    $(".hd-n5").mouseover(function(){
        $(".erm2015922").css({display:"block"})
    })
    $(".hd-n5").mouseout(function(){
        $(".erm2015922").css({display:"none"})
    })

    $(".hd-n7").mouseover(function(){
        $("#myjiuxian2").css({display:"block"})
    })
    $(".hd-n7").mouseout(function(){
        $("#myjiuxian2").css({display:"none"})
    })

    $(".hd-n8").mouseover(function(){
        $("#myjiuxian3").css({display:"block"})
    })
    $(".hd-n8").mouseout(function(){
        $("#myjiuxian3").css({display:"none"})
    })
    /*导航划过*/
    $(".navList li").each(function(){
            $(this).hover(
        function () {
            $(this).addClass("hover");
        },
        function () {
            $(this).removeClass("hover");
        }
        );
    });
    /*轮播*/
    var len=$(".swiper").length;
    var index=0;
    var adTimer;
    $(".swiper").css({
        opacity:".5",
        zIndex:"0"
      }).animate({
        opacity:"1"
    },500)
    adTimer = setInterval(function() {
    $(".swiper").eq(index).css({
        opacity:"0",
        zIndex:index+1
    }).animate({
        opacity:"1"
    },500)

$(".ul li").eq(index+2).addClass("hover").siblings().removeClass("hover")

    index++;
    if (index == len) { //最后一张图片之后，转到第一张
      index = 1;
      $(".swiper").css({
          zIndex:"1"
      })
    }
  }, 4000);

  $(".swiper").hover(function(){
    clearInterval(adTimer);
  },function(){
    adTimer = setInterval(function() {
    $(".swiper").eq(index).css({
        opacity:"0",
        zIndex:index+1
    }).animate({
        opacity:"1"
    },500)
    index++;
    if (index == len) { //最后一张图片之后，转到第一张
      index = 1;
      $(".swiper").css({
          zIndex:"1"
      })
    }
  }, 4000);
  })
  /*li*/
  
  $(".ul").find("li").each(function(index){
      $(this).hover(function(){
        $(this).addClass("hover")

        $(".swiper").eq(index).css({
        opacity:".5",
        zIndex:index
      }).stop().animate({
        opacity:"1"
    },500).siblings().css(
        "z-index",0
    )
    return false
      },function(){
        $(this).removeClass("hover")

        $(".swiper").eq(index).css({
        opacity:"0",
        zIndex:index
      })
      }) 
  })
  /*右侧固定导航*/
  $(".rSidebarItem").each(function(i){
      $(".rSidebarItem").eq(i).mouseover(function(){
          $(this).css({
              background:"#ec1212",
              color:"#fff"
          })
      })
      $(".rSidebarItem").eq(i).mouseout(function(){
          $(this).css({
              background:"#fff",
              color:"#000"
          })
      })
  })
  $(".rsItemName").click(function(){
				$("html,body").stop().animate({"scrollTop":0},500);
			})
  /*左侧固定导航*/
  $(".floorBg").each(function(i){
    $(".floorBg").eq(i).mouseover(function(){
        $(this).prev().stop().animate({
            width:"130px",
            zIndex:"55"
        },500)
        $(".newIndexIcon0").css({
            background:"none"
        })
    })
    $(".floorBg").eq(i).mouseout(function(){
        $(this).prev().stop().animate({
            width:"30px"
        },500).next()
        $(this).css({
            zIndex:"56"
        }).show()
    })

  })
  var warp=true;
			$(window).scroll(function(){
				var scrollTop=$(this).scrollTop();
				if(scrollTop>500){
					$(".fixDiv").fadeIn("slow");
				}else{
					$(".fixDiv").fadeOut("slow");
				}

				if(warp){
					$("#content li").each(function(){
						if(scrollTop>$(this).offset().top-$(this).outerHeight()/2){
							var index=$(this).index();
							$(".floorBg").eq(index).addClass("hover")
							.siblings().removeClass("hover")
						}
					})
				}
			})

			$(".floorBg").on("click",function(){
				var index=$(this).index();
				warp=false;
				$(this).addClass("hover").siblings().removeClass("hover")
				// $("body,html").stop().animate({"scrollTop":$("#content li").eq(index).offset().top},500,function(){
				// 	warp=true;
				// })

			})

			$(".floorBack").click(function(){
				$("html,body").stop().animate({"scrollTop":0},500);
            })
            
            $(".floorFiveBg ").click(function(){
				$("html,body").stop().animate({"scrollTop":30139},500);
			})
   
})