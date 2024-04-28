<script setup>
defineProps({
    day: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <Card>
        <template #title>
            <div class="date-number">
                {{ day.number }}
            </div>
        </template>
        <template #content>
            {{day}}
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
    }
</style>