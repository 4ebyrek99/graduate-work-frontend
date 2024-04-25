<script setup>

import draggable from "vuedraggable"
import {useLessonsStore} from "~/store/lessons.js"
import {computed} from "vue"

import Card from "primevue/card"

const lessonsStore = useLessonsStore()

const dragOptions = computed(() => {
    return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
    }
})

const lessons = computed(() => lessonsStore.lessons)

</script>

<template>
    <div class="lessons-list">
        <Card
            v-if="lessons.lessons.activeLessons"
            class="active-lessons"
        >
            <template #title>
                <span>Список активных предметов</span>
            </template>
            <template #content>
                <draggable
                    class="active-lessons-list"
                    tag="transition-group"
                    :component-data="{
                        tag: 'ul',
                        type: 'transition-group'
                    }"
                    v-model="lessons.lessons.activeLessons"
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
                            class="active-lessons-list-item"
                        >
                            <div class="flex items-center gap-1">
                                <span
                                    class="icon pi pi-minus"
                                    @click="lessonsList.activeLessons.splice(index, 1)"
                                />
                                <span>{{ element }}</span>
                            </div>
                        </li>
                    </template>
                </draggable>
            </template>
        </Card>
        <Card class="not-active-lessons">
            <template #title>
                <span>Список неактивных предметов</span>
            </template>
            <template #content>
                <draggable
                    class="not-active-lessons-list"
                    tag="transition-group"
                    :component-data="{
                        tag: 'ul',
                        type: 'transition-group'
                    }"
                    v-model="lessons.lessons.notActiveLessons"
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
                            class="not-active-lessons-list-item"
                        >
                            <div class="flex items-center gap-1">
                                <span
                                    class="icon pi pi-minus"
                                    @click="lessons.lessons.notActiveLessons.splice(index, 1)"
                                />
                                <span>{{ element }}</span>
                            </div>
                        </li>
                    </template>
                </draggable>
            </template>
        </Card>
    </div>
</template>

<style scoped>
    .lessons-list {
        @apply
        flex
        gap-4
        h-full;

        .icon {
            @apply
            m-1
            p-1
            hover:text-white
            hover:bg-main-green
            rounded;
        }

        .active-lessons-list-item, .not-active-lessons-list-item {
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

        .active-lessons-list, .not-active-lessons-list {
            @apply
            min-h-[200px];

        }
    }
</style>