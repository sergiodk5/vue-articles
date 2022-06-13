<template>
  <div
    class="flex flex-col sm:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden"
  >
    <div v-if="article.urlToImage">
      <a :href="article.url" class="block" target="_blank">
        <img
          class="rounded-t-lg object-cover h-48 w-full sm:w-96"
          :src="article.urlToImage"
          alt=""
        />
      </a>
    </div>
    <div class="p-5 flex flex-col flex-1">
      <h5 class="mb-1">
        <a
          :href="article.url"
          target="_blank"
          class="text-2xl font-bold tracking-tight text-gray-900"
          >{{ article.title }}</a
        >
      </h5>
      <div class="mb-4 text-muted text-xs text-gray-500">
        by {{ article.author }} | at {{ publishedDate }}
      </div>
      <p class="mb-3 font-normal text-gray-700">
        {{ article.description }}
      </p>
      <a
        :href="article.url"
        target="_blank"
        class="flex items-center justify-between py-2 px-3 mt-auto text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Read more on {{ article.source.name }}
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'

export default {
  props: ['article'],
  setup(props) {
    const publishedDate = computed(() => {
      const date = new Date(props.article.publishedAt)
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    })

    return { publishedDate }
  },
}
</script>
