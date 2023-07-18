<template>
    <div class="mt-4 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-4 gap-4">
        <div v-for="(post, index) in 8" :key="index"
            class="animate-pulse bg-slate-100 col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1 rounded-xl dark:bg-slate-900 shadow-xl">
            <div class="animate-pulse flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700 overflow-hidden">
                <Icon name="tabler:photo" class="w-14 h-14 text-gray-200 dark:text-gray-600"/>
            </div>
            <div class="p-5">
                <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-3/4 h-10 rounded-full"></span>
                <div class="my-6">
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-full h-4 block rounded-full"></span>
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-full h-4 block rounded-full"></span>
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-3/4 h-4 block rounded-full"></span>
                </div>
                <div class="w-full flex justify-between items-center">
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-20 h-10 rounded-xl"></span>
                    
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-10 h-6 rounded-xl"></span>
                </div>
            </div>
        </div>
    </div>
</template>