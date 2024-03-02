<script setup lang="ts">
import end from './components/the_end.vue'
</script>
<template>
    <div class="nav_style">
        <nav>
            <RouterLink to="/" class="li_box">home</RouterLink>
            <RouterLink to="/domestic" class="li_box">domestic</RouterLink>
            <RouterLink to="/about" class="li_box">about</RouterLink>
            <RouterLink to="/sign" class="li_box">sign</RouterLink>
        </nav> 
    </div>
    <RouterView/>
    <div style="height: 2000px"> 我的很大，请忍一下 </div>
    <end/>
</template>
<style scoped>
.nav_style{
    position: sticky;
    display: block;
    top: 0;
    height: 50px;
    text-align: center;
    background-color: yellowgreen;
}
.li_box {
    margin: 10px;
}
</style>