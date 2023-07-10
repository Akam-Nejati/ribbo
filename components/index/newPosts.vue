<template>
    <div class="flex flex-col items-center mt-14 px-4">
        <div class="w-full max-w-screen-xl">
            <div>
                <span class="text-xl text-slate-900 dark:text-slate-300">جدید ترین ها</span>
            </div>
            <div class="mt-4 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-4 gap-4">
                <div v-for="itme in 8" class="bg-slate-100 col-span-4 sm:col-span-2 md:col-span-2 xl:col-span-1 rounded-xl dark:bg-slate-900 shadow-xl">
                    <a href="#">
                        <img class="rounded-t-xl" src="./../../assets//images/11_55_36_nuxt-ecommerce-01.svg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-xl !leading-normal md:text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">اموزش nuxt js
                                قسمت اول</h5>
                        </a>
                        <p class="my-6 text-md font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-[3]">لورم ایپسوم متن ساختگی با
                            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                            مجله در ستون </p>
                        <a href="#"
                            class="inline-flex transition-all items-center px-3 py-2 text-sm font-medium text-center text-slate-300 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            بیشتر
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>