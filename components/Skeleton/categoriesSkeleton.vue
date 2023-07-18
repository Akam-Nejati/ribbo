<template>
    <div class="mt-4 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-4 gap-4">
        <div v-for="category in 4"
            class="bg-slate-100 col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1 rounded-xl dark:bg-slate-900 shadow-xl">
            <div class="animate-pulse flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
                <Icon name="tabler:photo" class="w-14 h-14 text-gray-200 dark:text-gray-600" />
            </div>
        </div>
    </div>
</template>