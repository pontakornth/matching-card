<template>
    <div class="text-center shadow-md border bg-red-500 text-white border rounded p-4">
        {{text}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Card',
    props: {
        text: {
            type: String,
            required: true
        }
    }
})
</script>
