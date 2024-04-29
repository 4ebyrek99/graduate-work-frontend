<script setup>
import {ref} from "vue"

defineProps({
    day: {
        type: Object,
        required: true
    }
})

const visible = ref(false)
</script>

<template>
    <Card>
        <template #title>
            <div class="flex justify-between">
                <div
                    class="date-number"
                    :class="{'holiday': ['sat', 'sun'].includes(day.dayId)}"
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
                <span>Занятий нет</span>
            </div>
            <Dialog
                class=""
                v-model:visible="visible"
                modal
                :header="`Подробная информация: ${day.number} число`"
            >
                <div
                    class="dialog-content"
                    v-if="day.lessons.length"
                >
                    <DataTable :value="day.lessons">
                        <Column
                            field="lessonName"
                            header="Предмет"
                        ></Column>
                        <Column
                            field="timeStart"
                            header="Начало"
                        ></Column>
                        <Column
                            field="timeEnd"
                            header="Конец"
                        ></Column>
                        <Column
                            field="teacher.name"
                            header="Преподаватель"
                        ></Column>
                        <Column
                            field="room"
                            header="Кабинет"
                        ></Column>
                    </DataTable>
                </div>
                <div
                    v-else
                    class="flex justify-center items-center"
                >
                    <span>Занятий нет</span>
                </div>
            </Dialog>
        </template>
    </Card>
</template>

<style scoped>

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
    }

    .dialog-content {

    }
</style>