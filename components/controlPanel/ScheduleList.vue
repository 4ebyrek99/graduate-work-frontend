<script setup>

import DayCard from "~/components/controlPanel/DayCard.vue"

const props = defineProps(({
    schedule: {
        type: Object,
        required: true
    },
    lessons: {
        type: Object,
        required: true
    },
    teachers: {
        type: Array,
        required: true
    },
    userGroup: {
        type: String,
        required: true
    }
}))

</script>

<template>
    <div class="week">
        <div v-if="props.lessons.isLoading">Грузимся</div>
        <div
            v-else
            class="days"
        >
            <DayCard
                v-for="day in props.schedule.schedule.schedule"
                :key="day._id"
                :id="day.id"
                :day="day"
                :group-name="props.userGroup"
                :lessons="props.lessons.lessons.activeLessons"
                :teachers="props.teachers"
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