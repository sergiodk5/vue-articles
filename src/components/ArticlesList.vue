<template>
  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
    <h1 class="leading-tight text-gray-500 font-bold sm:font-normal sm:text-xl sm:text-center">
      Search Results for: <span class="underline">{{ title }}</span>
    </h1>
    <div class="leading-tight text-gray-500">
      <div>Showing 1–24 of 26 results</div>
    </div>
    <div class="leading-tight text-gray-500">
      <div>Show <PostPerPageSelector /> entries per page</div>
    </div>
  </div>
  <div
    class="my-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
  >
    <ArticlesItem
      v-for="(article, idx) in articles"
      :key="idx"
      :article="article"
    />
  </div>

  <PaginationNav />
</template>

<script>
import PostPerPageSelector from './PostPerPageSelector.vue'
import ArticlesItem from './ArticlesItem.vue'
import PaginationNav from './PaginationNav.vue'

export default {
  components: { PostPerPageSelector, ArticlesItem, PaginationNav },
  props: ['articles', 'title'],
  setup(props) {
    // code .
  },
}
</script>
