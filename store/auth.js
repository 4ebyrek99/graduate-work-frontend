import {ref} from "vue"
import {defineStore} from "pinia"
import {useRuntimeConfig} from "#imports"
import cookies from "js-cookie"
import {useUserStore} from "~/store/user.js"

export const useAuthStore = defineStore("auth", () => {
    const config = useRuntimeConfig()
    const userStore = useUserStore()

    const authResult = ref(null)

    async function login(user) {
        authResult.value = await $fetch(`${config.public.apiHost}/auth/login`, {
            method: "POST",
            body: {
                username: user.username,
                password: user.password
            }
        })

        await userStore.getUserInfo()
    }

    function quit() {
        authResult.value = null
        cookies.remove("token")
    }

    return {
        authResult,
        login,
        quit
    }

})