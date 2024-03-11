<script setup>

import {useScheduleStore} from "~/store/schedule.js"
import {useLessonsStore} from "~/store/lessons.js"
import {useTeachersStore} from "~/store/teachers.js"
import {useUserStore} from "~/store/user.js"
import {computed, onMounted} from "vue"

import DayCard from "~/components/controlPanel/DayCard.vue"

const scheduleStore = useScheduleStore()
const lessonsStore = useLessonsStore()
const teachersStore = useTeachersStore()
const userStore = useUserStore()

onMounted(async () => {
    await lessonsStore.getLessons(userStore.userInfo.groupName)
    await scheduleStore.getSchedule(userStore.userInfo.groupName)
    await teachersStore.getTeachers()
})

const week = computed(() => scheduleStore.schedule)
const lessons = computed(() => lessonsStore.lessons)
const teachers = computed(() => teachersStore.teachers)

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
                :lessons="lessons.lessons"
                :teachers="teachers"
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