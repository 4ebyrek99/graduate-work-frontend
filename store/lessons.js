import {ref} from "vue"
import {defineStore} from "pinia"
import {useRuntimeConfig} from "#imports"

export const useLessonsStore = defineStore("lessons", () => {
    const config = useRuntimeConfig()

    const lessons= ref(null)

    async function getLessons(groupName) {
        // eslint-disable-next-line no-undef
        lessons.value = await $fetch(`${config.public.apiHost}/lessons/get-lessons`, {
            method: "POST",
            body: {
                groupName
            }
        })
    }

    return {
        lessons,
        getLessons
    }

})