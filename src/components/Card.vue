<template>
    <button @click="handleClick" class="text-center shadow-md border bg-red-500 text-white border rounded p-4">
        <span v-if="isOpen">{{text}}</span>
        <span v-else>XXX</span>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Card',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    setup() {
        const isOpen = ref(false)
        const handleClick = () => { isOpen.value = !isOpen.value }
        return {
            isOpen,
            handleClick
        }
    }
})
</script>
