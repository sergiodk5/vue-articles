<template>
  <select class="bg-gray-200 border-b border-gray-500 focus:ring-0 focus:outline-none" v-model="pageSize" @change="onChange">
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20">20</option>
  </select>
</template>

<script>
import useArticles from '@/composables/articles'

export default {
  setup() {
    const { setPerPage, pageSize } = useArticles()

    const onChange = (e) => {
      setPerPage(e.target.value)
    }

    return {pageSize, onChange}
  }
}
</script>