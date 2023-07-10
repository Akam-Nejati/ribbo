<template>
  <div class="article w-full flex justify-center mt-10 px-4 appearance-none">
    <div v-if="post" class="w-full max-w-screen-md flex flex-col gap-8">
      <p class="text-slate-950 dark:text-slate-100 drop-shadow-xl text-xl xl:text-2xl font-bold"> {{ title }} </p>
      <img class="rounded-xl shadow-xl" :src="`http://localhost:1337${thumbnail.data.attributes.url}`">
      <span class="text-justify text-slate-950 dark:text-slate-100">{{ details }}</span>
      <div v-html="content" class="content text-slate-900 dark:text-slate-300 leading-10 text-xl text-justify"></div>
      <!-- <div class="flex justify-between items-center">
        <div class="flex justify-between items-center gap-4">
          <span class="text-lg sm:text-xl text-slate-900 dark:text-slate-300"> {{ views }} </span>
          <Icon name="solar:eye-linear" class="text-xl sm:text-3xl text-slate-900 dark:text-slate-300"></Icon>
        </div>
        <div class="flex justify-between items-center gap-4">
          <span class="text-lg sm:text-xl text-slate-900 dark:text-slate-300"> {{ likes }} </span>
          <Icon @click="likes()" name="solar:heart-bold" class="text-xl sm:text-3xl text-slate-900 dark:text-slate-300 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl hover:!text-red-400 transition-all"></Icon>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import "@/assets/css/prism-one-dark.css"

const preTags = useState<HTMLCollectionOf<HTMLPreElement> | undefined>()
const route = useRoute()
const articleId = route.params.id
const { data: post } = await useFetch<any>(`http://localhost:1337/api/posts/${articleId}?populate=*`)
const { content, thumbnail, title, details } = post.value.data.attributes


onMounted(() => {
  preTags.value = document.getElementsByTagName("pre")

  const preArray = Array.from(preTags.value)

  preArray.forEach(element => {
    element.classList.add("line-numbers")
    console.log(element);
  });

  Prism.highlightAll();
});


function like() {
  
}
</script>

<style>
pre {
  @apply !text-lg text-left !border-none !shadow-xl !rounded-xl px-0 !my-14 !bg-slate-950;
  direction: ltr !important;
}

code {
  @apply !bg-transparent
}

:not(pre)>code[class*="language-"],
pre[class*="language-"] {
  @apply !bg-slate-950
}

.line-numbers.line-numbers .line-numbers-rows {
  @apply !bg-transparent
}

h1 {
  @apply text-5xl xl:text-6xl
}

h2 {
  @apply text-4xl xl:text-5xl
}

h3 {
  @apply text-3xl xl:text-4xl
}

h4 {
  @apply text-2xl xl:text-3xl
}

h5 {
  @apply text-xl xl:text-2xl
}

h6 {
  @apply text-lg xl:text-xl
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply my-4 font-bold text-slate-950 dark:text-slate-100 drop-shadow-lg
}
</style>

<style scoped>
ul {
  list-style: circle;
  padding-right: 1rem;
}
</style>