<script setup>

import {definePageMeta} from "#imports"
import {useAuthStore} from "~/store/auth.js"
import {reactive} from "vue"
import cookies from "js-cookie"
import {navigateTo} from "#app"
import {mdiAccountOutline} from "@mdi/js"


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