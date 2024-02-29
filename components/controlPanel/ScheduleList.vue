<script setup>

import {useScheduleStore} from "~/store/schedule.js"
import {useLessonsStore} from "~/store/lessons.js"
import {computed} from "vue"

import DayCard from "~/components/controlPanel/DayCard.vue"
const scheduleStore = useScheduleStore()
const lessonsStore = useLessonsStore()

await scheduleStore.getSchedule("A1")
await lessonsStore.getLessons("A1")

const week = computed(() => scheduleStore.schedule)
const lessons = computed(() => lessonsStore.lessons)

</script>

<template>
    <div class="week">
        <div
            class="days"
        >
            <DayCard
                v-for="day in week?.schedule"
                :key="day._id"
                :id="day.id"
                :day="day"
                :lessons="lessons"
            />
        </div>
    </div>
</template>

<style scoped>
.week {
    @apply
    p-4;

    .days {
        @apply
        flex
        flex-wrap
        justify-between
        gap-y-6;
    }
}
</style>