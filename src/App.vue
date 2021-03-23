<template>
<h1 class="heading">Memory Game</h1>
<div class="card-grid">
<card 
  @choose="openCard" 
  v-for="name, i in names" 
  :key="i" 
  :isOpen="choosedCards.includes(i)" 
  :isRevealed="revealedCards.includes(name)"
  :index="i" 
  :text="name" />
</div>
<span v-if="isOver" class="block text-center mb-8 text-gray-400">You passed.</span>
<button @click="resetGame" class="reset-button">Reset</button>
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
    const { names, openCard, choosedCards, revealedCards, isOver, resetGame } = useMemoryCard()
    return {
      names,
      openCard,
      choosedCards,
      revealedCards,
      isOver,
      resetGame,
    }
  }
})
</script>

<style>
body {
  @apply bg-gray-100 p-8;
}
.heading {
  @apply text-5xl text-center font-bold;
}
.card-grid {
  @apply grid grid-cols-4 gap-4 p-8 container mx-auto;
}
.reset-button {
  @apply px-4 py-2 mx-auto block border shadow-md text-red-500 bg-white;
  &:hover {
    @apply bg-red-600 text-white;
  }
}
</style>