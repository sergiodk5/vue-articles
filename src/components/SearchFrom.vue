<template>
  <form class="bg-white" @submit.prevent="onSubmit">
    <h3 class="text-gray-700 mb-4 text-xl sm:text-3xl text-center">
      Search worldwide news
    </h3>
    <div class="flex">
      <label
        for="search-articles"
        class="mb-2 text-sm font-medium text-gray-700 sr-only"
        >Search keyword</label
      >
      <div class="relative w-full">
        <input
          type="text"
          id='search-articles"'
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for articles"
          v-model="searchInput"
        />
        <button
          type="submit"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useArticles from '../composables/articles'

export default {
  setup() {
    const { query, setQuery } = useArticles()
    const searchInput = ref(query.value)

    const onSubmit = () => {
      console.log('submit')
      setQuery(searchInput.value)
    }

    return {
      onSubmit,
      searchInput,
    }
  },
}
</script>
