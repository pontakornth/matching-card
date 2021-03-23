import { reactive, watch } from "vue"
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
const useMemoryCards = () => {
    const nameArray = ["Asta", "Yuno", "Noelle", "Most", "Yami", "Cream", "Shadow", "Licht"]
    const firstArray: string[] = shuffle(nameArray)
    const secondArray: string[] = shuffle(nameArray)
    const names = reactive(shuffle([...firstArray, ...secondArray]))
    const choosedCards = reactive<number[]>([])
    const revealedCards = reactive<string[]>([])
    const openCard = (index: number) => choosedCards.push(index)
    watch(choosedCards, (newValue) => {
        if (newValue.length == 2) {
            if (names[newValue[0]] === names[newValue[1]]) {
                revealedCards.push(names[newValue[0]])
                console.log(revealedCards)
            }
            setTimeout(() => choosedCards.splice(0, choosedCards.length), 500)
        }
    })
    return {
      names,
      openCard,
      choosedCards,
      revealedCards
    }
}

export default useMemoryCards