<script lang="ts">

</script>
<template>
    <div class="box">
        <div class="li_box">
             this is image<br>
             login
        </div>
        <div class="li_box">
            <label for="">姓名：</label><input type="text"><br>
            <label for="">密码：</label><input type="password"><br>
            <input type="submit" class="little_box">
        </div>
    </div>
</template>
<style scoped>
.box {
    filter: blur();
    top: auto;
    position: absolute;
    text-align: center;
    display: block;
    margin: auto;
    top: 200px;
    left: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background-color: aqua;
}
.little_box{
    margin: 10px;
}
.li_box {
    position: relative;
    top: 70px;
    margin: 20px;
    text-align: center;
}
</style>