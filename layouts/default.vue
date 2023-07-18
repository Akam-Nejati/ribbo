<template>
    <nav class="bg-transparent">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 xl:px-0 py-4">
            <a href="https://flowbite.com/" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-300">ریبو</span>
            </a>
            <div class="flex items-center gap-4 md:order-2">
                <div class="cursor-pointer">
                    <Icon v-if="theme === 'dark'" @click="theme = 'light'" name="solar:sun-bold-duotone"
                        class="text-2xl text-gray-300" />
                    <Icon v-if="theme === 'light'" @click="theme = 'dark'" name="solar:moon-linear"
                        class="text-2xl text-gray-900" />
                </div>
                <!-- <div class="relative hidden md:block">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Icon name="iconamoon:search-duotone" class="text-slate-500" />

                        <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar"
                        class="block w-full p-2 pl-10 text-sm text-slate-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="جست و جو">
                </div> -->
                <button data-collapse-toggle="navbar-search" type="button"
                    class="inline-flex items-center p-2 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open menu</span>
                    <Icon name="pepicons-pop:menu" class="text-xl" />
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <!-- <div class="relative mt-3 md:hidden">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Icon name="iconamoon:search-duotone" class="text-slate-500" />
                    </div>
                    <input type="text" id="search-navbar"
                        class="block w-full p-2 pl-10 text-sm text-slate-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="جستوجو">
                </div> -->
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-100 md:bg-transparent md:flex-row gap-2 md:gap-8 md:mt-0 md:border-0  dark:bg-slate-900 md:dark:bg-slate-800 md:dark:bg-transparent dark:border-gray-700">
                    <li v-for="(item, index) in menuItems" :key="index">
                        <NuxtLink :to="item.route" :class="{ 'active': useRoute().path === item.route }"
                            class="block transition-all py-2 pr-4 text-slate-900 rounded hover:bg-gray-200 md:hover:bg-transparent dark:text-gray-400 dark:hover:bg-slate-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-700 after:w-0 md:after:transition-all md:after:hover:w-full md:after:h-1 md:after:rounded-full md:after:mt-1 md:after:bg-blue-700 md:after:dark:bg-blue-400 md:after:shadow-xl md:after:block">
                            {{ item.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div>
        <slot />
    </div>

    <footer class="w-ful mx-4 xl:mx-auto max-w-screen-xl bg-gray-100 rounded-lg shadow m-4 dark:bg-slate-900 mt-14">
        <div class=" p-4 flex items-center justify-between">
            <ul class="flex flex-wrap gap-4 sm:gap-6 items-center mx-3 text-sm font-medium text-slate-900 dark:text-slate-400 sm:mt-0">
                <li>
                    <NuxtLink to="#" class="hover:underline">تماس با من</NuxtLink>
                </li>
            </ul>
            <ul class="flex flex-wrap items-center gap-2 sm:gap-4 font-medium text-slate-900 dark:text-slate-400 sm:mt-0">
                <li v-for="(socialNetwork, index) in socialNetworks" :key="index">
                    <a :href="socialNetwork.link">
                        <Icon :name="socialNetwork.icon" class="text-xl sm:text-3xl"/>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite'
import type MenuItem from "./../types/menuItem.interface"
import type SocialNetwork from "./../types/socialNetwork.interface"
import { useThemeStore } from "./../composables/useTheme"
import { storeToRefs } from "pinia"


const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)


onMounted(() => {
    initFlowbite();
})

const menuItems: MenuItem[] = [
    {
        title: "خانه",
        route: "/"
    },
    {
        title: "مقالات",
        route: "/articles/all"
    },
    {
        title: "دسته بندی ها",
        route: "/categories"
    },
]

const socialNetworks: SocialNetwork[] = [
    {
        icon: "ic:baseline-telegram",
        link: "https://t.me/Akam_320",
        name: "telegram"
    },
    {
        icon: "mdi:linkedin",
        link: "https://www.linkedin.com/in/akam-nejati-a572a1235/",
        name: "linkedin"
    },
    {
        icon: "mdi:github",
        link: "https://github.com/Akam-Nejati",
        name: "linkedin"
    }
]
</script>


<style>
.active {
    @apply dark:!bg-slate-700 dark:!bg-transparent text-blue-600 dark:!text-slate-100
}
</style>