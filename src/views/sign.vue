<script setup>
import { ref } from 'vue'
import login from '../components/login.vue'
import enroll from '../components/enroll.vue'
const awsome = ref(true)
const text = ref('switch')
function lr () {
    awsome.value = !awsome.value
}
</script>
<template>
    <button @click = "lr" class="btn">{{ text }}</button>
    <div v-if="awsome">
        <login/>
    </div>
    <div v-else>
        <enroll/>
    </div>
</template>
<style>
.btn {
    top: 0;
    left: 0;
    margin: auto;
    right: 0;
    text-align: center;
    display: block;
    position: relative;
}
</style>