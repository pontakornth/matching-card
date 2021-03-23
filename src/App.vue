<template>
<h1 class="text-5xl text-center font-bold">Memory Game</h1>
<div class="grid grid-cols-4 gap-4 p-8 container mx-auto">
<card 
  @choose="openCard" 
  v-for="name, i in names" 
  :key="i" 
  :isOpen="choosedCards.includes(i)" 
  :isRevealed="revealedCards.includes(name)"
  :index="i" 
  :text="name" />
</div>
<button @click="resetGame" class="px-4 py-2 mx-auto block border shadow-md text-red-500 bg-white">Reset</button>
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
    const { names, openCard, choosedCards, revealedCards, resetGame } = useMemoryCard()
    return {
      names,
      openCard,
      choosedCards,
      revealedCards,
      resetGame,
    }
  }
})
</script>

<style>
body {
  @apply bg-gray-100 p-8;
}
</style>