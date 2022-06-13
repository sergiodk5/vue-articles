<template>
  <div class="bg-gray-200 flex flex-col">
    <div class="container mx-auto min-h-screen">
      <div class="h-32 mb-4"></div>

      <div
        class="fixed w-full left-0 flex justify-center items-center bg-white shadow transition-all ease-in-out duration-500 p-4"
        :class="[!articles.length ? 'top-1/2' : 'top-0']"
      >
        <div class="container mx-auto">
          <div class="mx-2">
            <SearchFrom />
          </div>
        </div>
      </div>

      <div class="mx-2" v-if="articles.length">
        <ArticlesList :articles="articles" :title="query" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchFrom from '../components/SearchFrom.vue'
import ArticlesList from '../components/ArticlesList.vue'

export default {
  name: 'HomeView',
  components: { SearchFrom, ArticlesList },
  setup() {
    const articles = ref([
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Jon Fingas',
        title: 'Apple discontinues its last iPod',
        description:
          'Apple just marked the end to one of the most important product lines in its history. The company has discontinued the iPod touch, which will only be available in stores "while supplies last." Not surprisingly, the company maintained that the "spirit of iPod" …',
        url: 'https://www.engadget.com/apple-discontinues-ipod-touch-161433001.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2022-05/2ce93ac0-d07b-11ec-9ca7-fe68bbf70a1f',
        publishedAt: '2022-05-10T16:14:33Z',
        content:
          'Apple just marked the end to one of the most important product lines in its history. The company has discontinued the iPod touch, which will only be available in stores "while supplies last." Not sur… [+146 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Igor Bonifacic',
        title:
          "Judge rules Cydia's antitrust case against Apple can move forward",
        description:
          'Cydia’s antitrust case against Apple can move forward, according to Reuters\r\n. On Thursday, Judge Yvonne Gonzalez Rogers, the same judge that oversaw the case between Apple and Epic Games\r\n, ruled Cydia’s creator, Jay “Saurik” Freeman, could present his claim…',
        url: 'https://www.engadget.com/apple-cydia-antitrust-case-moves-forward-174311424.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-images/2020-01/01f6e940-3251-11ea-bede-f1ad3d3020b3',
        publishedAt: '2022-05-28T17:43:11Z',
        content:
          'Cydias antitrust case against Apple can move forward, according to Reuters\r\n. On Thursday, Judge Yvonne Gonzalez Rogers, the same judge that oversaw the case between Apple and Epic Games\r\n, ruled Cyd… [+1363 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Devindra Hardawar',
        title: "Apple's M2 chip will make Macs even more efficient",
        description:
          'Almost two years since the launch of Apple\'s M1 chip — the first ARM-based "Apple Silicon" hardware — we finally have a successor: M2. While the M1 chip was notable for showing what Apple could accomplish with a more efficient mobile design (a dramatic depart…',
        url: 'https://www.engadget.com/apple-m2-chip-power-efficient-180201985.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2022-06/778cb910-e5c2-11ec-aed3-669458ec9bc1',
        publishedAt: '2022-06-06T18:02:01Z',
        content:
          'Almost two years since the launch of Apple\'s M1 chip the first ARM-based "Apple Silicon" hardware we finally have a successor: M2. While the M1 chip was notable for showing what Apple could accomplis… [+1063 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Igor Bonifacic',
        title: 'Apple created a subsidiary to handle Pay Later loans',
        description:
          'When its Pay Later\r\n service launches alongside iOS 16\r\n later this year, Apple plans to handle lending decisions on its own. According to Bloomberg\r\n, the tech giant has established a subsidiary called Apple Financing to conduct credit checks and customer ap…',
        url: 'https://www.engadget.com/apple-financing-subsidiary-223140051.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2022-06/a67d76f0-e5be-11ec-9fd7-df4cf37ed434',
        publishedAt: '2022-06-08T22:31:40Z',
        content:
          'When its Pay Later\r\n service launches alongside iOS 16\r\n later this year, Apple plans to handle lending decisions on its own. According to Bloomberg\r\n, the tech giant has established a subsidiary cal… [+1553 chars]',
      },
      {
        source: {
          id: 'the-verge',
          name: 'The Verge',
        },
        author: 'Jennifer Pattison Tuohy',
        title: 'Apple announces all-new Home app',
        description:
          'Apple’s smart home platform HomeKit gets a new Home app to improve reliability. Matter will come to the app with iOS16.',
        url: 'https://www.theverge.com/2022/6/6/23150367/apple-wwdc-ios-16-homekit-new-home-app-matter',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/Q1cnL9ORcvpxIlO4I7a9QwCqghQ=/0x33:1707x927/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23610713/image__1_.png',
        publishedAt: '2022-06-06T18:09:03Z',
        content:
          'New categories for climate, lights, security, plus Matter arrives with iOS16\r\nApples HomeKit gets a new Home app.\r\nImage: Apple\r\nApple announced an all-new Home app for its HomeKit smart home platfor… [+1581 chars]',
      },
      {
        source: {
          id: 'the-verge',
          name: 'The Verge',
        },
        author: 'Alice Newcome-Beill',
        title:
          'The Sony LinkBuds just got their first discount at Amazon',
        description:
          'Amazon is offering the first discount ever on the Sony LinkBuds. You can also find sizeable discounts on the Sony WF-1000XM4 earbuds, the 44mm Apple Watch SE, Razer Kishi, Apple AirTags, and more.',
        url: 'https://www.theverge.com/good-deals/2022/6/6/23154813/sony-linkbuds-earbuds-apple-watch-se-razer-kishi-sonos-roam-move-deal-sale',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/D-Z1YjOdKl17R4M0KQlU0DMKw6U=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23241306/9A5F2D63_4916_4C88_8108_219AB41DDB45.jpeg',
        publishedAt: '2022-06-06T15:12:26Z',
        content:
          'The best-in-class WF-1000XM4 earbuds are on sale, as well\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nSonys unconventional LinkBuds just got t… [+8444 chars]',
      },
      {
        source: {
          id: 'the-verge',
          name: 'The Verge',
        },
        author: 'Emma Roth',
        title:
          'The ugly economics behind Apple’s new Pay Later system',
        description:
          'Apple is getting into the buy now, pay later (BNPL) business with its new Pay Later service set to be integrated into Apple Pay. BNPL doesn’t come without a number of known risks, however.',
        url: 'https://www.theverge.com/2022/6/8/23157184/ugly-economics-behind-apple-buy-now-pay-later-system-bnpl',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/i2HzUirpzskVnBpG00U0LC-iSXU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8964113/acastro_170731_1777_0002_v1.jpg',
        publishedAt: '2022-06-08T20:21:27Z',
        content:
          'Apples foray into the buy now, pay later scheme poses some serious questions about consumer safety\r\nIllustration by Alex Castro / The Verge\r\nApple is getting into the buy now, pay later (BNPL) busine… [+4466 chars]',
      },
      {
        source: {
          id: 'the-verge',
          name: 'The Verge',
        },
        author: 'Emma Roth',
        title: 'Apple’s kind of a bank now',
        description:
          'Apple will reportedly handle the financial side of its new buy now, pay later service. The company’s Apple Financial LLC subsidiary will handle credit checks, lending, and risk assessment.',
        url: 'https://www.theverge.com/2022/6/8/23160400/apple-kind-of-bank-now-pay-later-bnpl-financial-services',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/r9UQpwU7k-G2aeq6L8OPdaS9jKc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11477053/acastro_180604_1777_apple_wwdc_0004.jpg',
        publishedAt: '2022-06-08T22:25:51Z',
        content:
          'Itll handle the financial side of its new Pay Later service\r\nIllustration by Alex Castro / The Verge\r\nApples going to handle the lending for its new buy now, pay later (BNPL) service, and doesnt plan… [+2680 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Jon Fingas',
        title:
          'Apple softens its stance on remote work amid return-to-office delays',
        description:
          'Apple is once again delaying its return to the office, and this time it will be less strict about in-person work. The New York Timesunderstands that Apple has delayed the return to offices once again. The iPhone maker will no longer require staff to come to t…',
        url: 'https://www.engadget.com/apple-delays-return-to-office-allows-remote-work-194324892.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-images/2020-06/f48235f0-a783-11ea-bbfc-3d6d42165a09',
        publishedAt: '2022-05-17T19:43:24Z',
        content:
          'Apple is once again delaying its return to the office, and this time it will be less strict about in-person work. The New York Timesunderstands that Apple has delayed the return to offices once again… [+1360 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Kris Holt',
        title:
          "Maryland residents can now add driver's licenses to Apple Wallet",
        description:
          'Residents of Maryland can now add their driver’s license or state ID\r\n to Apple Wallet on iPhone\r\n and Apple Watch\r\n. Users there will be able to verify their identity digitally, though there are limited use cases for the Maryland Mobile ID program for now.At…',
        url: 'https://www.engadget.com/maryland-drivers-license-id-apple-wallet-162457417.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2022-05/fbe87940-dd0e-11ec-8eca-3964ee20cc68',
        publishedAt: '2022-05-26T16:24:57Z',
        content:
          'Residents of Maryland can now add their drivers license or state ID\r\n to Apple Wallet on iPhone\r\n and Apple Watch\r\n. Users there will be able to verify their identity digitally, though there are limi… [+1619 chars]',
      },
    ])
    const query = ref('Apple')

    return {
      articles,
      query,
    }
  },
}
</script>
