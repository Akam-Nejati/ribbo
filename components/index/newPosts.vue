<script setup lang="ts">
const { data: newPosts }: any = await useFetch('http://localhost:1337/api/posts?sort[0]=createdAt%3Adesc', {
    params: {
        "populate": "thumbnail",
        "fields[0]": "thumbnail",
        "fields[1]": "title",
        "fields[2]": "details",
        "fields[3]": "tag",
        "pagination[page]": 1,
        "pagination[pageSize]": 8
    }
})
</script>


<template>
    <div class="flex flex-col items-center mt-14 px-4">
        <div class="w-full max-w-screen-xl">
            <div>
                <span class="text-xl text-slate-900 dark:text-slate-300 ml-4">جدید ترین ها</span>
                <RouterLink to="articles/all" class="text-blue-400">
                    همه مقاله ها <Icon name="mingcute:left-fill"></Icon>
                </RouterLink>
            </div>
            <SkeletonNewPostsSkeleton  v-if="!newPosts"/>
            <div v-else class="mt-4 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-4 gap-4">
                <div v-for="(post, index) in newPosts.data" :key="index"
                    class="bg-slate-100 col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1 rounded-xl dark:bg-slate-900 shadow-xl">
                    <RouterLink :to="`article/${post.id}`">
                        <img class="rounded-t-xl"
                            :src="`http://localhost:1337${post.attributes.thumbnail.data.attributes.url}`" alt="" />
                    </RouterLink>
                    <div class="p-5">
                        <RouterLink :to="`article/${post.id}`">
                            <h5
                                class="mb-2 text-xl !leading-normal md:text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">
                                {{ post.attributes.title }}</h5>
                        </RouterLink>
                        <p
                            class="my-6 h-[4.5rem] text-md font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-[3]">
                            {{ post.attributes.details }}</p>
                        <div class="w-full flex justify-between items-center">

                            <RouterLink :to="`article/${post.id}`"
                                class="inline-flex transition-all items-center px-3 py-2 text-sm font-medium text-center text-slate-300 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                بیشتر
                            </RouterLink>

                            <small class="text-gray-900 dark:text-slate-300 bg-slate-200 dark:bg-slate-950 p-2 rounded-xl">
                                {{ post.attributes.tag }}#
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>