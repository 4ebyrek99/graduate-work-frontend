<script setup>

import {computed, reactive, watch} from "vue"
import draggable from "vuedraggable"
import {useScheduleStore} from "~/store/schedule.js"
import {mdiMinus, mdiPlus} from "@mdi/js"

import Dropdown from "primevue/dropdown"
import SelectButton from "primevue/selectbutton"

const props = defineProps({
    day: {
        type: Object,
        required: true
    },
    lessons: {
        type: Object,
        required: true
    }
})

const scheduleStore = useScheduleStore()

const model = reactive({
    ...props.day
})

const selectedLessons = defineModel()
selectedLessons.value = props.lessons.lessons[0]

watch(model, () => {
    scheduleStore.saveDay(model)
})

const dragOptions = computed(() => {
    return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
    }
})

</script>

<template>
    <div class="day-card">
        <Dropdown
            v-model="selectedLessons"
            :options="lessons.lessons"
            option-label="lessonName"
        />
    </div>
</template>

<style scoped>
    .day-card {

    }
</style>