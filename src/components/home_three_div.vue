<template>
<div class="box">
    <div class="Imgspan">
        this is an Image<br>
        <img src="#" alt="横向第一图片">
    </div>
    <div class="Imgspan">
        this is an Image<br>
        <img src="#" alt="横向第二图片">
    </div>
    <div class="Imgspan">
        this is an Image<br>
        <img src="#" alt="横向第三图片">
    </div>
</div>
</template>
<style scoped>
.box{
    display: flex;
}
.Imgspan {
    width: 30%;
    height: 200px;
    margin: 10px;
}
</style>