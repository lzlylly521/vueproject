import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const name = ref()
    const password = ref()
    // const count = ref(0)声明值
    // const doubleCount = computed(() => count.value * 2)获得值
    // function increment() {函数行动
    //     count.value++
    // }

    return {name, password}
})
