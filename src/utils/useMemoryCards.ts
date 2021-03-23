import { computed, reactive, ref, watch } from "vue"
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

function getCards(names: string[]): string[] {
  return shuffle([...names, ...names])
}
const useMemoryCards = () => {
    const nameArray = ["Asta", "Yuno", "Noelle", "Most", "Yami", "Cream", "Shadow", "Licht"]
    const rawNames = reactive({names:getCards(nameArray)})
    const names = computed(() => rawNames.names)
    const choosedCards = reactive<number[]>([])
    const revealedCards = reactive<string[]>([])
    const isOver = ref(false)
    const openCard = (index: number) => choosedCards.push(index)
    const resetGame = () => {
      rawNames.names = getCards(nameArray)
      choosedCards.splice(0, choosedCards.length)
      revealedCards.splice(0, revealedCards.length)
    }
    watch(revealedCards, (newValue) => {
      if (newValue.length === nameArray.length) {
        isOver.value = true
      }
    })
    watch(choosedCards, (newValue) => {
        if (newValue.length == 2) {
            if (rawNames.names[newValue[0]] === rawNames.names[newValue[1]]) {
                revealedCards.push(rawNames.names[newValue[0]])
            }
            setTimeout(() => choosedCards.splice(0, choosedCards.length), 500)
        }
    })
    watch
    return {
      names,
      openCard,
      choosedCards,
      revealedCards,
      resetGame,
    }
}

export default useMemoryCards