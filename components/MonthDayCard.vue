<script setup>
import {ref} from "vue"

import { useI18n } from "#imports"
import { isToday } from "date-fns"

const { t, tm } = useI18n()

defineProps({
    day: {
        type: Object,
        required: true
    },
    today: {
        type: Object,
        required: true
    }
})

const visible = ref(false)
</script>

<template>
    <Card class="day-card">
        <template #title>
            <div class="flex justify-between">
                <div
                    class="date-number"
                    :class="{
                        'holiday': ['sat', 'sun'].includes(day.dayId),
                        'today': isToday(new Date(today.getFullYear(), day.month, day.number))
                    }"
                >
                    {{ day.number }}
                </div>
                <Button
                    icon="pi pi-info"
                    rounded
                    outlined
                    severity="info"
                    @click="visible = true"
                />
            </div>
        </template>
        <template #content>
            <div v-if="day.lessons.length">
                <ul>
                    <li
                        v-for="(lesson, id) in day.lessons"
                        :key="id"
                    >
                        <div v-if="day.lessons.length">
                            {{ lesson.lessonName }}
                        </div>
                    </li>
                </ul>
            </div>
            <div v-else>
                <span>{{ t("schedule.noClasses") }}</span>
            </div>
            <Dialog
                class="md:min-w-[612px]"
                v-model:visible="visible"
                modal
                :header="`${day.dayName} - ${day.number} ${tm('schedule.monthNames')[day.month]}`"
            >
                <div
                    class="dialog-content"
                    v-if="day.lessons.length"
                >
                    <DataTable :value="day.lessons">
                        <template #header>
                            <span>{{ t("schedule.schedule") }}</span>
                        </template>
                        <Column
                            field="lessonName"
                            :header="t('schedule.tableColumnTitles.classroom')"
                        ></Column>
                        <Column
                            field="timeStart"
                            :header="t('schedule.tableColumnTitles.start')"
                        ></Column>
                        <Column
                            field="timeEnd"
                            :header="t('schedule.tableColumnTitles.end')"
                        ></Column>
                        <Column
                            field="teacher.name"
                            :header="t('schedule.tableColumnTitles.teacher')"
                        ></Column>
                        <Column
                            field="room"
                            :header="t('schedule.tableColumnTitles.classroom')"
                        ></Column>
                    </DataTable>
                </div>
                <div
                    v-else
                    class="flex justify-center items-center"
                >
                    <span>{{ t("schedule.noClasses") }}</span>
                </div>
            </Dialog>
        </template>
    </Card>
</template>

<style scoped>

    .day-card {
        @apply relative;

        &:after {
            @apply
            absolute
            bottom-0
            left-0
            h-[12px]
            w-full
            bg-green-700
            rounded-b-[6px];

            content: "";
        }

        .date-number {
            @apply
            flex
            justify-center
            items-center
            rounded-full
            border-2
            w-[40px]
            h-[40px];

            &.holiday {
                @apply
                bg-red-600
                text-white;
            }

            &.today {
                @apply
                bg-blue-600
                text-white;
            }
        }
    }

</style>
