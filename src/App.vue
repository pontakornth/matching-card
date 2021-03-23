<template>
<h1 class="text-5xl text-center font-bold">Memory Game</h1>
<div class="grid grid-cols-4 gap-4 p-8 container mx-auto">
<card v-for="name in names" :key="name" :text="name" ></card>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Card from './components/Card.vue'
// Credit: https://stackoverflow.com/a/2450976/10978978
function shuffle<T>(array: T[]) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export default defineComponent({
  name: 'App',
  components: {
    Card
  },
  setup() {
    const nameArray = ["Asta", "Yuno", "Noelle", "Most", "Yami", "Cream", "Shadow", "Licht"]
    const firstArray: string[] = shuffle(nameArray)
    const secondArray: string[] = shuffle(nameArray)
    const names = reactive([...firstArray, ...secondArray])
    return {
      names
    }
  }
})
</script>

<style>
body {
  @apply bg-gray-100 p-8;
}
</style>