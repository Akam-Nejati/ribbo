<script setup lang="ts">
const { data: categories } = await useFetch<any>(`http://localhost:1337/api/categories?populate=*`)
</script>

<template>
    <div class="flex flex-col items-center mt-14 px-4">
        <div class="w-full max-w-screen-xl">
            <div>
                <span class="text-xl text-slate-900 dark:text-slate-300 ml-4">دسته بندی ها</span>
                <RouterLink to="categories" class="text-blue-400">
                    همه دسته ها <Icon name="mingcute:left-fill"></Icon>
                </RouterLink>
            </div>
            <SkeletonCategoriesSkeleton v-if="!categories" />
            <div v-else class="mt-4 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-4 gap-4">
                <div v-for="category in categories.data"
                    class="bg-slate-100 col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1 rounded-xl dark:bg-slate-900 shadow-xl">
                    <RouterLink :to="`articles/${category.attributes.title}`">
                        <img class="rounded-xl"
                            :src="`http://localhost:1337${category.attributes.thumbnail.data.attributes.url}`" alt="" />
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>