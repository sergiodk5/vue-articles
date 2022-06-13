<template>
  <span
    @click="() => goTo(btn)"
    class="py-2 px-3 leading-tight border cursor-pointer"
    :class="[
      page === btn
        ? 'text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700'
        : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700',
      totalPages > 1 && 1 === page ? 'rounded-l-lg' : '',
      page === totalPages ? 'rounded-r-lg' : '',
    ]"
    >
    {{ btn }}
  </span>
</template>
<script>
import useArticles from '../composables/articles'

export default {
  props: ['btn'],
  setup(props) {
    const { page, setPage, totalPages } = useArticles()
    const goTo = (no) => setPage(no)

    return { goTo, page, totalPages }
  }
}
</script>