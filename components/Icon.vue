<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    viewbox: {
        type: String,
        required: false
    }
})
</script>

<template>

    <svg
        class="icon"
        :viewBox="viewbox ?? '0 0 24 24'"
    >
        <path :d="icon" />
    </svg>

</template>

<style scoped>
    svg {
        @apply
        w-6
        h-6
        rounded-full
        hover:bg-gray-200;
        fill: currentColor;
    }
</style>