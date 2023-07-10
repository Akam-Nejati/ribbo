import { defineStore } from 'pinia'

export const useThemeStore = defineStore('useThemeStore', () => {
    const theme = useState<string>()

    function chooseTheme() {
        if (!process.server) {
            if (localStorage.getItem("theme")) {
                theme.value = localStorage.getItem("theme") || "dark"
            } else {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    theme.value = "dark"
                } else {
                    theme.value = "light"
                }
            }
        }
    }

    onMounted(() => {
        chooseTheme()
    })

    watch(theme, () => {
        localStorage.setItem("theme", theme.value)
    })

    return {
        theme
    }
})