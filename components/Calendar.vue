<script setup>
import {useScheduleStore} from "~/store/schedule.js"
import {computed} from "vue"

const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

const scheduleStore = useScheduleStore()

const calendar = computed(() => scheduleStore.calendar)

await scheduleStore.genSchedule("A1")

</script>

<template>
    <div class="calendar">
        <div class="days">
            <div
                class="day-name"
                v-for="(day, id) in days"
                :key="id"
            >
                {{ day }}
            </div>
        </div>
        <div
            class="week"
            v-for="week in calendar?.length"
            :key="week"
        >

            <div class="dates">
                <Card
                    v-for="(date, id) in calendar[week-1]"
                    :key="id"
                    class="date"
                    :id="date.number"
                >
                </Card>
                <!--                <div-->
                <!--                    v-for="(date, id) in calendar[week-1]"-->
                <!--                    :key="date"-->
                <!--                    class="date"-->
                <!--                    :id="date.number"-->
                <!--                >-->
                <!--                    <div>-->
                <!--                        <div class="flex flex-col">-->
                <!--                            <div-->
                <!--                                class="number"-->
                <!--                                :class="{-->
                <!--                                    'holiday': [5, 6].includes(id),-->
                <!--                                    'today': date.number === new Date().getDate()-->
                <!--                                }"-->
                <!--                            >-->
                <!--                                {{ date.number }}-->
                <!--                            </div>-->
                <!--                            <div-->
                <!--                                class="lesson-list"-->
                <!--                                v-for="lesson in date.lessons"-->
                <!--                            >-->
                <!--                                {{ lesson.lessonName }}-->
                <!--                            </div>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<style scoped>
.calendar {
    @apply
    mt-[72px]
    flex
    flex-col
    bg-white
    rounded-2xl
    shadow-lg
    min-h-[calc(100vh-96px)]
    mb-8;

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