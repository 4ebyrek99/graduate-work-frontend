<script setup>

import AppHeader from "~/components/structural/AppHeader.vue"

</script>

<template>
    <AppHeader />
    <div class="container">
        <slot />
    </div>
</template>

<style scoped>
    .container {
        @apply
        mt-[72px]
        mb-8
        mx-8
        flex
        flex-col
        bg-white
        rounded-lg
        shadow-lg
        min-h-[calc(100vh-104px)];
    }
</style>