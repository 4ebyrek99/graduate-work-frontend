import {reactive, ref} from "vue"
import {defineStore} from "pinia"
import {useRuntimeConfig} from "#imports"
import cookies from "js-cookie"

export const useScheduleStore = defineStore("schedule", () => {
    const config = useRuntimeConfig()

    const calendar= ref(null)
    const schedule= reactive({
        isLoading: true,
        schedule: []
    })

    async function genSchedule(groupName) {
        calendar.value = await $fetch(`${config.public.apiHost}/schedule/gen-schedule`, {
            method: "POST",
            body: {
                groupName
            }
        })
    }

    async function getSchedule(groupName) {
        schedule.schedule = await $fetch(`${config.public.apiHost}/schedule/get-schedule`, {
            method: "POST",
            body: {
                groupName
            }
        })

        schedule.isLoading = false
    }

    async function saveDay(day, groupName) {
        await $fetch(`${config.public.apiHost}/schedule/edit-day`, {
            method: "PUT",
            body: {
                day,
                groupName
            },
            headers: {
                authorization: cookies.get("token")
            }
        })
    }

    return {
        schedule,
        calendar,
        genSchedule,
        getSchedule,
        saveDay
    }

})