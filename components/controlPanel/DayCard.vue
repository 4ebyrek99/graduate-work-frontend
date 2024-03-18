<script setup>

import {computed, reactive, ref, watch} from "vue"
import draggable from "vuedraggable"
import {useScheduleStore} from "~/store/schedule.js"

import Dropdown from "primevue/dropdown"
import OverlayPanel from "primevue/overlaypanel"

const props = defineProps({
    day: {
        type: Object,
        required: true
    },
    lessons: {
        type: Array,
        required: true
    },
    teachers: {
        type: Array,
        required: true
    }
})

const addOverlay = ref()
const openPanel = (event) => {
    addOverlay.value.toggle(event)
}
const scheduleStore = useScheduleStore()

const day = reactive({
    ...props.day
})

const selectedLessons = defineModel()

selectedLessons.value = reactive({
    lessonName: "Не указан",
    timeStart: "00:00",
    timeEnd: "00:00",
    zoomId: "-",
    zoomPassword: "-",
    teacher:  {
        name:  "Не указан",
        phoneNumber: "Не указан"
    }
})

watch(day, () => {
    scheduleStore.saveDay(day)
})

const dragOptions = computed(() => {
    return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
    }
})

function addLesson(lesson) {
    model.lessons.push({...lesson})
}

</script>

<template>
    <div class="day-card">
        <Card>
            <template #title>
                {{ day.dayName }}
            </template>
            <template #content>
                <draggable
                    class="lessons-list"
                    tag="transition-group"
                    :component-data="{
                        tag: 'ul',
                        type: 'transition-group'
                    }"
                    v-model="day.lessons"
                    v-bind="dragOptions"
                    @start="drag = true"
                    @end="drag = false"
                    item-key="order"
                >
                    <template
                        #item="{ element, index }"
                    >
                        <li
                            :id="index"
                            class="lessons-list-item"
                        >
                            <div class="flex items-center gap-1">
                                <span
                                    class="icon pi pi-minus"
                                    @click="day.lessons.splice(index, 1)"
                                />
                                <span>{{ element.lessonName }}</span>
                            </div>

                        </li>
                    </template>
                </draggable>
                <OverlayPanel
                    ref="addOverlay"
                    class="w-fit"
                >
                    <div class="w-[400px]">
                        <div class="inputs">
                            <div class="lesson-teacher">
                                <Dropdown
                                    v-model="selectedLessons.lessonName"
                                    placeholder="Предмет"
                                    :options="lessons"
                                />
                                <Dropdown
                                    v-model="selectedLessons.teacher"
                                    :options="teachers"
                                    placeholder="Преподаватель"
                                    option-label="name"
                                />
                            </div>
                            <div class="time-classroom">
                                <div class="time">
                                    <InputMask
                                        class="date-input"
                                        v-model="selectedLessons.timeStart"
                                        mask="99:99"
                                        placeholder="00:00"
                                    />
                                    -
                                    <InputMask
                                        class="date-input"
                                        v-model="selectedLessons.timeEnd"
                                        mask="99:99"
                                        placeholder="00:00"
                                    />
                                </div>
                                <InputText
                                    placeholder="Кабинет"
                                    maxlength="6"
                                />
                            </div>
                            <Button
                                class="w-full"
                                label="Добавить"
                                @click="addLesson(selectedLessons)"
                            />
                        </div>
                    </div>
                </OverlayPanel>
                <Button
                    icon="pi pi-plus"
                    rounded
                    @click="openPanel"
                />

            </template>
        </Card>
    </div>
</template>

<style scoped>

:deep(.date-input) {
    @apply w-[74px] font-bold text-center;
}

:deep(.p-dropdown) {
    @apply w-full;
}

:deep(.p-inputtext) {
    @apply w-full;
}

.icon {
    @apply
    m-1
    p-1
    hover:text-white
    hover:bg-main-green
    rounded;
}


.day-card {
    @apply
    min-w-[calc(33.33%-10px)];


    .lessons-list {
        @apply
        min-h-[170px];

        .lessons-list-item {
            @apply
            flex
            justify-between
            rounded-lg
            cursor-pointer
            my-2
            px-2;

            border: 1px solid #cbd5e1;
            border-radius: 6px;
            box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05);
        }
    }
}

.inputs {
    @apply
    flex
    flex-col
    gap-y-2;

    .lesson-teacher {
        @apply
        flex
        justify-between
        gap-2;
    }

    .time-classroom {
        @apply
        flex
        gap-2;

        .time {
            @apply
            flex
            items-center
            gap-2
            max-w-[172px];
        }
    }
}

</style>