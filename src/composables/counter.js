import { ref } from 'vue'
const counter = ref(0)

export const getCounter = () => {
  function incrementCounter(inputValue) {
    console.log('first', inputValue)
    counter.value = inputValue
  }

  return {
    counter,
    incrementCounter,
  }
}
