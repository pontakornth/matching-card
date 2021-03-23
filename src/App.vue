<template>
<h1 class="text-5xl text-center font-bold">Memory Game</h1>
<div class="grid grid-cols-4 gap-4 p-8 container mx-auto">
<card @choose="openCard" v-for="name, i in names" :key="name" :isOpen="openCards.includes(i)" :index="i" :text="name" ></card>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Card from './components/Card.vue'
import useMemoryCard from './utils/useMemoryCards'
export default defineComponent({
  name: 'App',
  components: {
    Card
  },
  setup() {
    const { names, openCard, openCards } = useMemoryCard()
    return {
      names,
      openCard,
      openCards
    }
  }
})
</script>

<style>
body {
  @apply bg-gray-100 p-8;
}
</style>