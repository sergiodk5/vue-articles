<template>
  <div class="bg-gray-200 flex flex-col">
    <div class="container mx-auto min-h-screen">
      <div class="h-32 mb-4"></div>

      <div
        class="fixed w-full left-0 flex justify-center items-center transition-all ease-in-out duration-500 p-4"
        :class="[!articles.length && !error ? 'top-1/2' : 'top-0 bg-white shadow']"
      >
        <div class="container mx-auto">
          <div class="mx-2">
            <SearchFrom />
          </div>
        </div>
      </div>

      <div class="mx-2" v-if="articles.length || error">
        <ArticlesList />
      </div>
    </div>
  </div>
</template>

<script>
import useArticles from '@/composables/articles'
import SearchFrom from '../components/SearchFrom.vue'
import ArticlesList from '../components/ArticlesList.vue'

export default {
  name: 'HomeView',
  components: { SearchFrom, ArticlesList },
  setup() {
    const { articles, error } = useArticles()

    return {
      articles,
      error,
    }
  },
}
</script>
