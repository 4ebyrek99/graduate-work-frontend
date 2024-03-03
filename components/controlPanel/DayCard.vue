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
        <Card>
            <template #title>
                {{ model.dayName }}
            </template>
            <template #content>
                <draggable
                    class="lessons-list"
                    tag="transition-group"
                    :component-data="{
                        tag: 'ul',
                        type: 'transition-group'
                    }"
                    v-model="model.lessons"
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
                                    @click="model.lessons.splice(index, 1)"
                                />
                                <span>{{ element.lessonName }}</span>
                            </div>
                            <div>
                                <!--                                <span>{{ element.timeStart }}</span>-->
                                <InputMask
                                    class="w-[60px] my-1 font-bold text-center"
                                    v-model="model.lessons[index].timeStart"
                                    mask="99:99"
                                    placeholder="00:00"
                                />
                                -
                                <InputMask
                                    class="w-[60px] my-1 font-bold text-center"
                                    v-model="model.lessons[index].timeEnd"
                                    mask="99:99"
                                    placeholder="00:00"
                                />
                            </div>
                        </li>
                    </template>
                </draggable>
                <div class="flex gap-2">
                    <Button
                        class="!w-42px"
                        icon="pi pi-plus"
                        @click="model.lessons.push(selectedLessons)"
                    />
                    <Dropdown
                        class="w-full"
                        v-model="selectedLessons"
                        :options="lessons.lessons"
                        option-label="lessonName"
                    />
                </div>
            </template>
        </Card>

    </div>
</template>

<style scoped>

    .ghost {
        @apply
        opacity-50
        text-white
        bg-main-green;
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

        .p-card {
            @apply
            min-h-[272px];

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
    }
</style>