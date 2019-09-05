
$(function(){
// http://47.104.244.134:8080/usersave.do注册
// http://47.104.244.134:8080/username.do用户
// http://47.104.244.134:8080/useremail.do邮箱
    $("#phone").change(function(){
        var reg = /[a-zA-Z]\w{4,16}/;
        var $username = $("#phone").val();
            if($username ==""){
                $(".regFalse").eq(0).css({
                    display:"block"
                })
                $(".poiFalse").eq(0).css({
                    display:"block"
                })
            }else if (!reg.test($username)) {
                alert("请输入以字母开头5-16位包含数字字母下划线的用户名")
            } else{
                $.get("http://47.104.244.134:8080/usersave.do",{
                    username:$username
                },function(data){
                    //console.log(data);
                    if(data.code==0){
                        alert("用户名可用")
                    }else{
                        alert("用户名重复")
                    }
                })
            }
            $(".poiTrue").eq(0).css({display:"none"})
    })

    $("#phonePwd").change(function(){
        console.log("Lll")
        let reg = /^\w{4,10}$/;
        let $password = $("#phonePwd").val();
        if ($password == "") {
            alert("密码不能为空");
        } else if (!reg.test($password)) {
            alert("请输入4-10位的密码")
        }
    })


    $("#phoneEmail").change(function () {
        let $email = $("#phoneEmail").val();
        let reg = /^\w+@\w+(\.\w+)+$/;
        if ($email == "") {
            alert("邮箱不能为空");
        } else if (!reg.test($email)) {
            alert("请输入如:abc@sina.com样式的邮箱")
        } else {
            $.get("http://47.104.244.134:8080/useremail.do", {
                email: $email
            }, function (data) {
                // console.log(data)
                if (data.code == 0) {
                    alert("邮箱重复")
                }
            })
        }
    })
    $("#phoneverification").change(function () {
        let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        let $phone = $("#phoneverification").val();
        if ($phone == "") {
            alert("手机号不能为空");
        } else if (!reg.test($phone)) {
            alert("请输入正确的11位的手机号")
        }
    })
    $("#phoneSubit").click(function () {
        let $username = $("#phone").val();
        let $password = $("#phonePwd").val();
        let $email = $("#phoneEmail").val();
        let val = $('input:radio[name="sex"]:checked').val();
        let val0 = $('input:checkbox[name="xieyi"]:checked').val();
        let $sex;
        if (val == null) {
            alert("请选择性别")
        } else {
            $sex = val;
        }
        if (val0 == null) {
            alert("请阅读并同意协议")
        }
        $.post("http://47.104.244.134:8080/usersave.do", {
            username: $username,
            password: $password,
            email: $email,
            sex: $sex
        }, function (data) {                       
                location = "signin.html"           
        })
        return false;
    })
})
