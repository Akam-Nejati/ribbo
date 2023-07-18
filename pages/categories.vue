<script setup lang="ts">
const { data: categories } = await useFetch<any>(`http://localhost:1337/api/categories?populate=*`)
</script>

<template>
    <div class="flex flex-col items-center mt-10 sm:mt-14 px-4">
        <div class="w-full max-w-screen-xl">
            <div class="h-[calc(100vh-15rem)] sm:h-[calc(100vh-16.4rem)] md:h-[calc(100vh-17.1rem)] overflow-y-auto">
                <SkeletonPageCategorieseSkeleton  v-if="!categories"/>
                <div v-else class="flex flex-col sm:grid grid-cols-6 sm:grid-rows-6 gap-4 rounded-xl h-full">
                    <div class="col-span-6 sm:col-span-3 md:col-span-2 h-[12rem] sm:h-auto sm:row-span-2 bg-gray-100 dark:bg-slate-900 rounded-xl"
                        v-for="category in categories?.data" :key="category.id">
                        <RouterLink :to="`articles/${category.attributes.title}`">
                            <img class="rounded-xl w-full h-full object-cover"
                                :src="`http://localhost:1337${category.attributes.thumbnail.data.attributes.url}`" />
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>