<template>
    <div class="flex flex-col sm:grid grid-cols-6 sm:grid-rows-6 gap-4 rounded-xl sm:h-full">
        <div class="col-span-6 sm:col-span-3 md:col-span-2 h-[20rem] sm:h-auto sm:row-span-2 bg-gray-100 dark:bg-slate-900 rounded-xl"
            v-for="category in 6" :key="category">
            <div class="animate-pulse flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                <Icon name="tabler:photo" class="w-14 h-14 text-gray-200 dark:text-gray-600" />
            </div>
        </div>
    </div>
</template>