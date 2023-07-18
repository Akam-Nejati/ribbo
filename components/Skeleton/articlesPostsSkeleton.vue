<template>
    <div dir="ltr" class="col-span-6 sm:col-span-4 flex flex-col gap-4 overflow-y-auto rounded-xl h-full sm:pr-4">
        <div dir="rtl"
            class="w-full bg-gray-100 dark:bg-slate-900 rounded-xl flex flex-col md:flex-row justify-start gap-8 p-4"
            v-for="post in 6" :key="post">
            <div class="w-full md:w-[10rem] xl:w-[20rem] h-40 lg:h-auto">
                <div
                    class="animate-pulse flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                    <Icon name="tabler:photo" class="w-14 h-14 text-gray-200 dark:text-gray-600" />

                </div>
            </div>
            <div class="w-full md:w-[calc(100%-10em)] xl:w-[calc(100%-20em)] flex flex-col justify-between gap-4">
                <div class="flex justify-between items-start">
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-20 h-4 rounded-xl"></span>

                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-10 h-6 rounded-xl"></span>
                </div>
                <div class="my-6">
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-full h-4 block rounded-full"></span>
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-full h-4 block rounded-full"></span>
                    <span class="animate-pulse mb-2 bg-gray-900 dark:bg-slate-600 w-3/4 h-4 block rounded-full"></span>
                </div>
            </div>
        </div>
    </div>
</template>