$(function () {
    $("#save").click(function () {
        // http://47.104.244.134:8080/
        let $name = $("#userName").val();
        let $password = $("#password").val();
        $.post("http://47.104.244.134:8080/userlogin.do", {
            name: $name,
            password: $password
        }, function (data) {
             console.log(data,data.data.token)
            if (data.code == 1) {
                alert("用户名或密码错误请重新输入")
            } else {
                code=1;
                alert("登陆成功");
                localStorage.setItem("token",JSON.stringify(data.data.token));
                /* 保存用户名*/
                localStorage.setItem("uname",JSON.stringify($name))

                location = "index.html";
            }
            return false
        })
       
    })
})