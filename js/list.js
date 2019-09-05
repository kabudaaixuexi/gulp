$(function(){
    //http://47.104.244.134:8080/
    $.get("http://47.104.244.134:8080/goodsbytid.do", { "tid": 13, "page": 1 ,"limit":37},
          function(data){
          var data=data.data   
          var str="";
          var imgsrc=[];
          var iname=[];
          var iprice=[];
          var iid=[]
          for(let i =0;i<data.length;i++){


            
            var id=data[i].id;
            var price=data[i].price/100;
            imgsrc.push(data[i].picurl);
            iname.push(data[i].name);
            iprice.push(data[i].price/100)
            var name=data[i].name;
            iid.push(data[i].id)
            console.log(data);
            
            



            $(".aabtn").eq(i).on("click",function(){ 

                localStorage.setItem("id",iid[i])
            })
            
        }        
            $(".img").each(function(index){
            //   console.log(index);
            $(".name").eq(index).text(iname[index]);
            $(".price").eq(index).text(iprice[index]);
            $(".img").eq(index).attr("src",imgsrc[index])


            $(".img").eq(0).attr("src",data[36].picurl)
         $(".name").eq(0).text(data[36].name)
         $(".price").eq(0).text(data[36].price/100)
        })

          $("#id").attr("src",'detail.html')
         $(".img").eq(0).attr("src",data[36].picurl)
         $(".name").eq(0).text(data[36].name)
         $(".price").eq(0).text(data[36].price/100)



        //  跳转详情页
     
        //  $(".aabtn").attr("href",'detail.html')
    }); 

    // 一键顶端
    $("#footfoot").click(function(){
        $("html,body").stop().animate({"scrollTop":0},700);
    })
    
})