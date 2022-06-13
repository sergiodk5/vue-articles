import { ref } from 'vue'

const query = ref('')
const pageSize = ref(10)
const page = ref(1)
const total = ref(0)
const showing = ref('1-12 of 26')
const error = ref(null)
const articles = ref([])

const setShowing = () => {
  const startResults = (parseInt(page.value) - 1) * 10 + 1
  const biggest =
    (parseInt(page.value) - 1) * 10 + parseInt(pageSize.value)
  const endResults =
    biggest <= parseInt(total.value) ? biggest : total.value
  showing.value = `${startResults}-${endResults} of ${total.value}`
}

const getArticles = async () => {
  const url = `https://newsapi.org/v2/everything?apiKey=${process.env.VUE_APP_NEWSAPI_KEY}&pageSize=${pageSize.value}&page=${page.value}&q=${query.value}`

  try {
    const response = await fetch(url)

    const data = await response.json()

    if (data.status === 'error') {
      throw Error(data.message)
    }

    if (!data.totalResults) {
      throw Error(`No results found for keyword: ${query.value}`)
    }

    console.log(data)
    articles.value = data.articles
    total.value = data.totalResults
    error.value = null
    setShowing()
  } catch (err) {
    error.value = err.message
  }
}

const useArticles = () => {
  const setQuery = (queryValue) => {
    query.value = queryValue
    page.value = 1
    getArticles()
  }

  const setPerPage = (perPage) => {
    pageSize.value = perPage
    getArticles()
  }

  const setPage = (pageNo) => {
    page.value = pageNo
    getArticles()
  }

  return {
    articles,
    setQuery,
    query,
    setPerPage,
    pageSize,
    setPage,
    page,
    total,
    showing,
    error,
  }
}

export default useArticles
