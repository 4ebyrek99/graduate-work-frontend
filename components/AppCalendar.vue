<script setup>
import {useScheduleStore} from "~/store/schedule.js"
import {computed} from "vue"
import {useUserStore} from "~/store/user.js"
import { useI18n } from "#imports"

const { tm } = useI18n()

const today = new Date()

const scheduleStore = useScheduleStore()
const userStore = useUserStore()

const calendar = computed(() => scheduleStore.calendar)

await scheduleStore.genSchedule(userStore.userInfo.groupName)

</script>

<template>
    <div class="calendar">
        <div v-if="userStore.userInfo.success">
            <div
                class="days"
            >
                <div
                    class="day-name"
                    v-for="(day, id) in tm('schedule.dayNames')"
                    :key="id"
                >
                    {{ day }}
                </div>
            </div>
            <div
                class="week"
                v-for="(week, id) in calendar"
                :key="id"
            >
                <div class="dates">
                    <MonthDayCard
                        class="date"
                        v-for="(day, id) in week"
                        :key="id"
                        :day="day"
                        :today="today"
                    />
                </div>
            </div>
        </div>
        <div v-else>
            Авторизуйтесь
        </div>
    </div>
</template>

<style scoped>
.calendar {


    .days {
        @apply
        flex
        border-b-black
        border-b-[1px]
        justify-around;

        .day-name {
            @apply
            p-4
            text-center;
        }
    }

    .week {
        @apply
        pt-6
        last:pb-6;

        .dates {
            @apply
            flex
            px-4
            justify-around;

            .date {
                min-width: calc(14.28% - 10px);
            }
        }
    }
}
</style>