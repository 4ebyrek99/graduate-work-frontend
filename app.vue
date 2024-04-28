<script setup>
import {useUserStore} from "~/store/user.js"

const userStore = useUserStore()
await userStore.updateSession()

</script>

<template>
    <div class="flex flex-col min-h-screen bg-stone-200">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>