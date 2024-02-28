import {ref} from "vue"
import {defineStore} from "pinia"
import {useRuntimeConfig} from "#imports"
import cookies from "js-cookie"

export const useUserStore = defineStore("user", () => {
    const config = useRuntimeConfig()

    const userInfo= ref(null)

    async function getUserInfo() {
        userInfo.value = await $fetch(`${config.public.apiHost}/user/get-user-info`, {
            method: "POST",
            headers: {
                authorization: cookies.get("token")
            }
        })
    }
    return {
        userInfo,
        getUserInfo
    }

})