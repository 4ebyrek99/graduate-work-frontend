import {ref} from "vue"
import {defineStore} from "pinia"
import {useRuntimeConfig} from "#imports"
import cookies from "js-cookie"
import {navigateTo} from "#app"

export const useAuthStore = defineStore("auth", () => {
    const config = useRuntimeConfig()

    const authResult = ref(null)

    async function login(user) {
        authResult.value = await $fetch(`${config.public.apiHost}/auth/login`, {
            method: "POST",
            body: {
                username: user.username,
                password: user.password
            }
        })
    }

    function quit() {
        cookies.remove("token")
        navigateTo("/auth")
    }

    return {
        authResult,
        login,
        quit
    }

})