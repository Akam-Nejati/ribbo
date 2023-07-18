<script setup lang="ts">
const route = useRoute()
const categories: string | string[] = route.params.tag
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
    <div class="flex flex-col items-center mt-10 sm:mt-14 px-4">
        <div class="w-full max-w-screen-xl">
            <div
                class="grid grid-cols-6 gap-4 xl:gap-14 sm:h-[calc(100vh-16.4rem)] md:h-[calc(100vh-17.1rem)]">
                <div class="col-span-6 sm:col-span-2 rounded-xl bg-gray-100 dark:bg-slate-900 p-4">
                    <span class="text-slate-900 dark:text-slate-300 text-xl xl:text-2xl">تگ ها</span>
                    <div class="flex flex-wrap gap-4 mt-4" v-if="tags">
                        <RouterLink :to="tag.attributes.tag" v-for="tag in tags.data" :key="tag.id"
                            class="text-gray-900 dark:text-slate-300 bg-slate-200 dark:bg-slate-950 p-2 rounded-xl h-fit">
                            {{ tag.attributes.details }}#
                        </RouterLink>
                    </div>
                </div>
                <SkeletonArticlesPostsSkeleton v-if="!posts" />
                <div v-else dir="ltr" class="col-span-6 sm:col-span-4 flex flex-col gap-4 overflow-y-auto rounded-xl h-full sm:pr-4">
                    <div dir="rtl" class="w-full bg-gray-100 dark:bg-slate-900 rounded-xl flex flex-col md:flex-row justify-start gap-8 p-4"
                        v-for="post in posts?.data" :key="post.id">
                        <div class="w-full md:w-[10rem] xl:w-[20rem]">
                            <RouterLink :to="`/article/${post.id}`" class="cursor-pointer">
                                <img class="rounded-xl h-full w-full object-cover"
                                    :src="`http://localhost:1337${post.attributes.thumbnail.data.attributes.url}`" alt="">
                            </RouterLink>
                        </div>
                        <div
                            class="w-full md:w-[calc(100%-10em)] xl:w-[calc(100%-20em)] flex flex-col justify-between gap-4">
                            <div class="flex justify-between items-start">
                                <RouterLink :to="`/article/${post.id}`" class="text-xl xl:text-2xl text-slate-900 dark:text-slate-300">{{
                                    post.attributes.title }}</RouterLink>
                                <small
                                    class="text-gray-900 dark:text-slate-300 bg-slate-200 dark:bg-slate-950 p-2 rounded-xl">
                                    {{ post.attributes.tag }}#
                                </small>
                            </div>
                            <p
                                class="my-6 text-md font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-[3]">
                                {{ post.attributes.details }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>