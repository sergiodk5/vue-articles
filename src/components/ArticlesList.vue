<template>
  <div
    class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4"
  >
    <h1
      v-if="'' !== query"
      class="leading-tight text-gray-500 font-bold sm:font-normal sm:text-xl sm:text-center"
    >
      Search Results for: <span class="underline">{{ query }}</span>
    </h1>
    <div v-if="!error" class="leading-tight text-gray-500">
      <div>Showing {{ showing }} results</div>
    </div>
    <div v-if="!error" class="leading-tight text-gray-500">
      <div>Show <PostPerPageSelector /> entries per page</div>
    </div>
  </div>
  <div
    v-if="!error"
    class="my-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
  >
    <ArticlesItem
      v-for="(article, idx) in articles"
      :key="idx"
      :article="article"
    />
  </div>
  <div
    v-if="error"
    class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg shodow"
    role="alert"
  >
    {{ error }}
  </div>

  <div v-if="!error">
    <PaginationNav />
  </div>
</template>

<script>
import useArticles from '@/composables/articles'
import PostPerPageSelector from './PostPerPageSelector.vue'
import ArticlesItem from './ArticlesItem.vue'
import PaginationNav from './PaginationNav.vue'

export default {
  components: { PostPerPageSelector, ArticlesItem, PaginationNav },
  setup() {
    const { articles, query, showing, error } = useArticles()

    console.log(articles)

    return { articles, query, showing, error }
  },
}
</script>
