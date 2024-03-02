<script>

</script>
<template>
<div class="enrollbox">
    <div>
        <h2>注册个人信息填写</h2>
        <form action="accountinformation" method="post">
        <div>
            <input type="file" accept=".png .jpg .jpeg">
            <div style="margin-left: 75px;">
                用户照片
            </div>
        </div>
        <div><p>用户名:<input type="text"></p></div>
        <div><p>用户密码:<input type="password"></p></div>
        <div><p>确认密码:<input type="password"></p></div>
        <div>
            <p>性别
                <span>
                    <span>
                        <input type="radio" id="man" name="sex" value="man" checked>
                        <label for="man">man</label>
                    </span>
                    <span>
                        <input type="radio" id="woman" name="sex" value="woman">
                        <label for="woman">woman</label>
                    </span>
                    <span>
                        <input type="radio" id="other" name="sex" value="other">
                        <label for="other">other</label>
                    </span>
                </span>
            </p>
        </div>
        <div><p>年龄:<input type="text"></p></div>
        <div><p>手机号码:<input type="text"></p></div>
        <div><p>家庭住址:<input type="text"></p></div>
        <div><p>真实姓名:<input type="text"></p></div>
        <div><p>需求描述:<input type="text"></p></div>
        <div><p>自我描述:<input type="text"></p></div>
        <div><p>教育经历:<input type="text"></p></div>
        <div><p>邮箱地址:<input type="text"></p></div>
        <div><p>出生日期:<input type="text"></p></div>
        <div><p>人格类型:<input type="text"></p></div>
        <div><p>兴趣爱好:<input type="text"></p></div>
        <div><p>就业岗位:<input type="text"></p></div>
        <div><p>恋爱经历:<input type="text"></p></div>
        <div><p>家乡地址:<input type="text"></p></div>
        <input type="submit" style="margin-left: 100px;">
    </form>
    </div>
</div>
</template>
<style>
.enrollbox {
    position:static;
    display: block;
    text-align: center;
    bottom: 0;
}
</style>