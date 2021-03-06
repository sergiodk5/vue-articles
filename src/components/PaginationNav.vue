<template>
  <nav aria-label="Page navigation" class="my-4">
    <ul class="inline-flex items-center -space-x-px">
      <li v-if="totalPages > 1 && 1 !== page">
        <span
          @click="goToStart"
          class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <span class="sr-only">start</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </span>
      </li>
      <li v-if="totalPages > 1 && 1 !== page">
        <span
          @click="goTo(page - 1)"
          class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </li>

      <li v-if="totalPages < 6" v-for="btn in totalPages" :key="btn">
        <PaginationBtn :btn="btn" />
      </li>

      <li
        v-if="totalPages > 6 && 3 >= page"
        v-for="btn in rangeFromTo(1, 4)"
        :key="btn"
      >
        <PaginationBtn :btn="btn" />
      </li>
      <li v-if="totalPages > 6 && 3 >= page">
        <span class="px-2">...</span>
      </li>

      <li v-if="totalPages > 6 && 3 < page && page >= totalPages - 2">
        <span class="px-2">...</span>
      </li>
      <li
        v-if="totalPages > 6 && 3 < page && page >= totalPages - 2"
        v-for="btn in rangeFromTo(totalPages - 3, totalPages)"
        :key="btn"
      >
        <PaginationBtn :btn="btn" />
      </li>

      <li v-if="totalPages > 6 && 3 < page && page < totalPages - 2">
        <span class="px-2">...</span>
      </li>
      <li
        v-if="totalPages > 6 && 3 < page && page < totalPages - 2"
        v-for="btn in aroundNumber(page)"
        :key="btn"
      >
        <PaginationBtn :btn="btn" />
      </li>
      <li v-if="totalPages > 6 && 3 < page && page < totalPages - 2">
        <span class="px-2">...</span>
      </li>

      <li v-if="page !== totalPages">
        <span
          @click="goTo(page + 1)"
          class="block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </li>
      <li v-if="page !== totalPages">
        <span
          @click="goToEnd"
          class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <span class="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </span>
      </li>
    </ul>
  </nav>
</template>
<script>
import { computed, onMounted } from 'vue'
import useArticles from '../composables/articles'
import PaginationBtn from './PaginationBtn.vue'

export default {
  components: { PaginationBtn },
  setup() {
    const { total, pageSize, page, setPage } = useArticles()
    const totalPages = computed(() =>
      Math.ceil(total.value / pageSize.value)
    )

    onMounted(() => {
      console.log('page', page.value)
      console.log('total', totalPages.value)
    })

    const goToStart = () => setPage(1)
    const goToEnd = () => setPage(totalPages.value)
    const goTo = (no) => setPage(no)

    const rangeFromTo = (start, end) => {
      let rangeArr = []
      for (let i = start; i <= end; i++) {
        rangeArr.push(i)
      }

      return rangeArr
    }
    const aroundNumber = (number) => {
      return [number - 1, number, number + 1]
    }

    return {
      totalPages,
      goTo,
      goToStart,
      goToEnd,
      page,
      rangeFromTo,
      aroundNumber,
    }
  },
}
</script>
