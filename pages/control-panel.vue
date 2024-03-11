<script setup>

import ScheduleList from "~/components/controlPanel/ScheduleList.vue"

</script>

<template>
    <TabView>
        <TabPanel header="Расписание">
            <ScheduleList />
        </TabPanel>
        <TabPanel header="Список учащихся" />
        <TabPanel header="Список преподавателей" />
        <TabPanel header="Список предметов" />
    </TabView>
</template>

<style scoped>

</style>