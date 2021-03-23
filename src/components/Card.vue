<template>
    <button @click="handleClick" class="text-center shadow-md border bg-red-500 text-white border rounded p-4">
        <span v-if="isOpen">{{text}}</span>
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
