<script setup>

import ScheduleList from "~/components/controlPanel/ScheduleList.vue"
import LessonsList from "~/components/controlPanel/LessonsList.vue"
import {useLessonsStore} from "~/store/lessons.js"
import {useUserStore} from "~/store/user.js"
import {useScheduleStore} from "~/store/schedule.js"
import {useTeachersStore} from "~/store/teachers.js"
import {computed, onMounted} from "vue"

const userStore = useUserStore()
const lessonsStore = useLessonsStore()
const scheduleStore = useScheduleStore()
const teachersStore = useTeachersStore()

onMounted(async () => {
    await lessonsStore.getLessons(userStore.userInfo.groupName)
    await scheduleStore.getSchedule(userStore.userInfo.groupName)
    await teachersStore.getTeachers()
})

const schedule = scheduleStore.schedule
const lessons = lessonsStore.lessons
const teachers = computed(() => teachersStore.teachers)

</script>

<template>
    <TabView>
        <TabPanel header="Расписание">
            <ScheduleList
                :schedule="schedule"
                :lessons="lessons"
                :teachers="teachers"
                :user-group="userStore.userInfo.groupName"
            />
        </TabPanel>
        <TabPanel header="Список учащихся" />
        <TabPanel header="Список преподавателей" />
        <TabPanel header="Список предметов">
            <LessonsList />
        </TabPanel>
    </TabView>
</template>

<style scoped>

</style>