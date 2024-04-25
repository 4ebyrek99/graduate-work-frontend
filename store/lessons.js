import {reactive} from "vue"
import {defineStore} from "pinia"
import {useRuntimeConfig} from "#imports"

export const useLessonsStore = defineStore("lessons", () => {
    const config = useRuntimeConfig()

    const lessons= reactive({
        isLoading: true,
        lessons: []
    })

    async function getLessons(groupName) {
        // eslint-disable-next-line no-undef
        lessons.lessons = await $fetch(`${config.public.apiHost}/lessons/get-lessons`, {
            method: "POST",
            body: {
                groupName
            }
        })
        lessons.isLoading = false
    }

    return {
        lessons,
        getLessons
    }

})