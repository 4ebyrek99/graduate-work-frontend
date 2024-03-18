<script setup>

import ScheduleList from "~/components/controlPanel/ScheduleList.vue"
import LessonsList from "~/components/controlPanel/LessonsList.vue"

</script>

<template>
    <TabView>
        <TabPanel header="Расписание">
            <ScheduleList />
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