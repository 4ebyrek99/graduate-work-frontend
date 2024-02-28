<script setup>

import {definePageMeta} from "#imports"

definePageMeta({
    layout: "auth"
})


</script>

<template>
    <div class="wrapper">
        <AuthForm />
    </div>
</template>

<style scoped>
    .wrapper {
        @apply
        mx-auto
        my-auto;
    }
</style>