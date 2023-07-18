<script setup lang="ts">

const { data: sugggestedPosts }: any = await useFetch<any>(`http://localhost:1337/api/recommends?populate=*`)    
</script>

<template>
    <div class="w-full flex justify-center mt-10 px-4">
        <div class="w-full max-w-screen-xl">
            <div>
                <span class="text-xl text-slate-900 dark:text-slate-300">پیشنهادات</span>
            </div>
            <SkeletonSuggestedSkeleton v-if="!sugggestedPosts"/>
            <div v-else   class="w-full grid grid-cols-4 gap-4 h-screen xl:h-[40rem] mt-4">
                <div class="col-span-4 md:col-span-2 grid grid-rows-4 gap-4">
                    <div
                        class="row-span-2 w-full h-full bg-gray-100 dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden">
                        <RouterLink :to="`article/${sugggestedPosts?.data[1].attributes.postid}`">
                            <img class="w-full h-full object-cover"
                                :src="`http://localhost:1337${sugggestedPosts?.data[1].attributes.thumbnail.data.attributes.url}`"
                                alt="">
                        </RouterLink>
                    </div>
                    <div
                        class="row-span-2 w-full h-full bg-gray-100 dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden">
                        <RouterLink :to="`article/${sugggestedPosts?.data[2].attributes.postid}`">
                            <img class="w-full h-full object-cover"
                                :src="`http://localhost:1337${sugggestedPosts?.data[2].attributes.thumbnail.data.attributes.url}`"
                                alt="">
                        </RouterLink>
                    </div>
                </div>
                <div class="col-span-4 md:col-span-2">
                    <div class="w-full h-full bg-gray-100 dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden">
                        <RouterLink :to="`article/${sugggestedPosts?.data[0].attributes.postid}`">
                            <img class="w-full h-full object-cover"
                                :src="`http://localhost:1337${sugggestedPosts?.data[0].attributes.thumbnail.data.attributes.url}`"
                                alt="">
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>