<template>
<h1 class="text-5xl text-center font-bold">Memory Game</h1>
<div class="grid grid-cols-4 gap-4 p-8 container mx-auto">
<card 
  @choose="openCard" 
  v-for="name, i in names" 
  :key="name" 
  :isOpen="choosedCards.includes(i) || revealedCards.includes(name)" 
  :index="i" 
  :text="name" />
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
    const { names, openCard, choosedCards, revealedCards } = useMemoryCard()
    return {
      names,
      openCard,
      choosedCards,
      revealedCards,
    }
  }
})
</script>

<style>
body {
  @apply bg-gray-100 p-8;
}
</style>