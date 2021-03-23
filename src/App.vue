<template>
<h1 class="text-5xl text-center font-bold">Hello World</h1>
<div class="grid grid-cols-5 gap-4 p-8 container mx-auto">
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
<card text="Hihi"></card>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/Card.vue'

export default defineComponent({
  name: 'App',
  components: {
    Card
  }
})
</script>

<style>
body {
  @apply bg-gray-100 p-8;
}
</style>