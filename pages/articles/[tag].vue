<script setup lang="ts">
const route = useRoute()
const categories: string| string[] = route.params.tag
const { data: posts }: any = await useFetch("http://localhost:1337/api/posts", {
    params: {
        "populate": "thumbnail",
        "fields[0]": "thumbnail",
        "fields[1]": "title",
        "fields[2]": "details",
        "fields[3]": "tag",
        [categories === 'all' ? '' : "filters[tag][$eq]"]: categories
    }
})
const { data: tags }: any = await useFetch("http://localhost:1337/api/tags")
</script>

<template>
    <div class="flex flex-col items-center mt-14 px-4">
        <div class="w-full max-w-screen-xl">
            <div class="grid grid-cols-6 gap-14">
                <div class="col-span-2 rounded-xl bg-gray-100 dark:bg-slate-900 p-4">
                    <span class="text-slate-900 dark:text-slate-300 text-2xl">دسته بندی ها</span>
                    <div class="flex flex-col gap-4 mt-4">
                        <RouterLink :to="tag.attributes.tag" v-for="tag in tags.data" :key="tag.id"
                            class="p-4 rounded-xl text-xl text-slate-900 dark:text-slate-300"
                            :class="{ 'actived-rote': categories === tag.attributes.tag }">
                            {{ tag.attributes.details }}
                        </RouterLink>
                    </div>
                </div>
                <div
                    class="h-[calc(100vh-16rem)] sm:h-[calc(100vh-16.4rem)] md:h-[calc(100vh-17.1rem)] col-span-4 flex flex-col justify-between gap-4 overflow-scroll rounded-xl">
                    <div class="w-full bg-gray-100 dark:bg-slate-900 rounded-xl flex justify-start gap-8 p-4"
                        v-for="post in posts.data" :key="post.id">
                        <div class="w-[20rem]">
                            <img class="rounded-xl h-full"
                                :src="`http://localhost:1337${post.attributes.thumbnail.data.attributes.url}`" alt="">
                        </div>
                        <div class="w-[calc(100%-20em)] flex flex-col justify-between gap-4">
                            <div class="flex justify-between">
                                <span class="text-2xl text-slate-900 dark:text-slate-300">{{ post.attributes.title }}</span>
                                <small
                                    class="text-gray-900 dark:text-slate-300 bg-slate-200 dark:bg-slate-950 p-2 rounded-xl">
                                    {{ post.attributes.tag }}#
                                </small>
                            </div>
                            <p
                                class="my-6 h-[4.5rem] text-md font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-[3]">
                                {{ post.attributes.details }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.actived-rote {
    @apply bg-blue-400 !text-blue-800
}</style>