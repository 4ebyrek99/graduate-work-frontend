<script setup>

import draggable from "vuedraggable"
import {useLessonsStore} from "~/store/lessons.js"
import {useUserStore} from "~/store/user.js"
import {computed, onMounted, reactive} from "vue"

const lessonsStore = useLessonsStore()
const userStore = useUserStore()

const dragOptions = computed(() => {
    return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
    }
})

const lessonsList = defineModel()



onMounted(async () => {
    await lessonsStore.getLessons(userStore.userInfo.groupName)
    lessonsList.value = reactive(lessonsStore.lessons)
})

</script>

<template>
    <div class="lessons-list">
        {{ lessonsList }}
        <div class="active-lessons">
            <draggable
                class="active-lessons-list"
                tag="transition-group"
                :component-data="{
                    tag: 'ul',
                    type: 'transition-group'
                }"
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
                        {{ element }}
                    </li>
                </template>
            </draggable>
        </div>
        <div class="not-active-lessons">
            <draggable
                class="not-active-lessons-list"
                tag="transition-group"
                :component-data="{
                    tag: 'ul',
                    type: 'transition-group'
                }"
                123
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
                        {{ element }}
                    </li>
                </template>
            </draggable>
        </div>
    </div>
</template>

<style scoped>
    .lessons-list {
        @apply
        flex
        gap-4
        h-full;

        .active-lessons-list {

        }
    }
</style>