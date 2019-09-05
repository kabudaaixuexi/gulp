$(function () {
    var token = parseInt(JSON.parse(localStorage.getItem("token")));
    $.get("http://47.104.244.134:8080/cartlist.do", {
        token: token
    }, function (data) {
        var str = "";
        var sum = 0;
        var len = data.length;
        for (let i = 0; i < data.length; i++) {
            str += `
                

                <tr>
                        <th class="cart-th-check"><input class="ck" type="checkbox" ></th>
                        <th class="cart-th-item-info"> <img class="gwclimg" src="${data[i].goods.picurl}" /></th>
                        <th class="cart-th-item-sku"> <span class="gwcname">${data[i].goods.name}</span></th>
                        <th class="cart-th-item-price"> <span class="danprice">¥${(data[i].goods.price)/100}</span></th>
                        <th class="cart-th-number">
                                <input class="jian" type="button" value="-">
                                <input class="inp" type="text" value="${data[i].count}">
                                <input class="jia" type="button" value="+">	
                        </th>
                        <th class="cart-th-subtotal"> <span class="danzong">${((data[i].goods.price)/100*data[i].count).toFixed(2)}</span></th>
                        <th class="cart-th-ops"> <input class="del" type="button" value="删除"></th>
                    </tr>
                     `;

                     $(".u-yen-icon").text((data[i].goods.price)/100*data[i].count)
            
            sum += (data[i].goods.price)/100 * data[i].count;
        }   
        $(".centerSec").html(str);
        $(".zongjia").html(sum);
        $(":checkbox").prop("checked", true)
        var summ=0
        $(".inp").each(function(i){
            var zval=$(this).val();
            summ+=parseInt(zval)            
        })
        var somm=0
        $(".danzong").each(function(index){
            var zval=$(this).text();
            somm+=Number(zval)
        })
        $(".red").text(summ)
        $(".u-yen-icon").text(somm.toFixed(2))
        

        




        function getsum() {
            var sum = 0;
            for (let i = 0; i < len; i++) {
                if ($(".ck").eq(i).is(":checked")) {
                    sum += parseInt($(".danzong").eq(i).html())
                }
            }
            $(".zongjia").html(sum);
        }

        function get(id, gid, num) {
            $.get("http://47.104.244.134:8080/cartupdate.do", {
                id: id,
                gid: gid,
                num: num,
                token: token
            })
        }
        $("#checkAll").click(function () {
            for (let i = 0; i < len; i++) {
                if ($("#checkAll").is(":checked")) {
                    $(".ck").eq(i).prop("checked", true);
                } else {
                    $(".ck").eq(i).prop("checked", false);
                }
            }
            getsum();
        })
        $(".ck").click(function () {
            var cou = 0;
            for (let j = 0; j < len; j++) {
                if ($(".ck").eq(j).is(":checked")) {
                    cou++;
                }
            }
            if (cou != len) {
                $("#checkAll").prop("checked", false)
            } else {
                $("#checkAll").prop("checked", true)
            }
            getsum()
        })

        for (let i = 0; i < len; i++) {
            let sum1 = 0;
            $(".jian").eq(i).click(function () {
                if ($(".inp").eq(i).val() <= 1) {
                    $(".inp").eq(i).val(1);
                } else {
                    $(".inp").eq(i).val(parseInt($(".inp").eq(i).val()) - 1);
                    $(".danzong").eq(i).html(data[i].goods.price * $(".inp").eq(i).val());
                    get(data[i].id, data[i].gid, -1)
                }
                getsum()
                history.go(0)
            })

            $(".jia").eq(i).click(function () {
                $(".inp").eq(i).val(parseInt($(".inp").eq(i).val()) + 1)
                $(".danzong").eq(i).html(data[i].goods.price * $(".inp").eq(i).val());
                get(data[i].id, data[i].gid, 1)
                getsum()
                history.go(0)
            })
            $(".del").eq(i).click(function () {
                $(this).parent().remove()
                get(data[i].id, data[i].gid, 0)
                getsum()
                history.go(0)
            })
            $(".inp").eq(i).on("blur", function () {
                var count = parseInt($(this).val()) - parseInt(data[i].count);
                var reg1 = /[^1-9]/g;
                if ($(this).val() == "" || $(this).val() < 1 || reg1.test($(this).val())) {
                    $(this).val(1);
                } else {
                    $(this).val($(this).val())
                }              
                $(".danzong").eq(i).html(data[i].goods.price * $(this).val());
                get(data[i].id, data[i].gid, count)
                getsum()
                history.go(0)
            })
        }
        return false;
    })
})