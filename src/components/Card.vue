<template>
    <button :disabled="isOpen || isRevealed" @click="handleClick" :class="`text-center shadow-md border ${isRevealed ? 'bg-blue-500' : 'bg-red-500'} text-white border rounded p-4`">
        <span v-if="isOpen || isRevealed">{{text}}</span>
        <span v-else>XXX</span>
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Card',
    props: {
        text: {
            type: String,
            required: true
        },
        isOpen: {
            type: Boolean,
            default: false,
            required: true,
        },
        isRevealed: {
            type: Boolean,
            default: false,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
    setup(props, {emit}) {
        const handleClick = () => emit("choose", props.index)
        return {
            handleClick
        }
    }
})
</script>
