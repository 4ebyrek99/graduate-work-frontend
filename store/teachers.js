import {ref} from "vue"
import {defineStore} from "pinia"
import {useRuntimeConfig} from "#imports"

export const useTeachersStore = defineStore("teachers", () => {
    const config = useRuntimeConfig()

    const teachers= ref(null)

    async function getTeachers() {
        // eslint-disable-next-line no-undef
        teachers.value = await $fetch(`${config.public.apiHost}/teachers/get-all`, {
            method: "GET"
        })
    }

    return {
        teachers,
        getTeachers
    }

})