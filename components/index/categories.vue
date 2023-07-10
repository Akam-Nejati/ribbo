<template>
    <div class="flex flex-col items-center mt-14 px-4">
        <div class="w-full max-w-screen-xl">
            <div>
                <span class="text-xl text-slate-900 dark:text-slate-300">جدید ترین ها</span>
            </div>
            <div class="mt-4 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-4 gap-4">
                <div v-for="itme in 6"
                    class="bg-slate-100 col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1 rounded-xl dark:bg-slate-900 shadow-xl">
                    <a href="#">
                        <img class="rounded-xl" src="./../../assets//images/11_55_36_nuxt-ecommerce-01.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>