<script setup>
import {computed, onMounted} from "vue"

import {useAuthStore} from "~/store/auth.js"
import {useUserStore} from "~/store/user.js"
const authStore = useAuthStore()
const userStore = useUserStore()

onMounted(() => {
    userStore.getUserInfo()
})

const userInfo = computed(() => userStore.userInfo)
</script>

<template>
    <div class="wrapper">
        <div class="lessons">

        </div>
        <div class="user-info">
            <Button
                v-if="userInfo === null"
                label="Войти"
            />
            <div
                v-else
                class="flex items-center"
            >
                <span>{{userInfo.firstName}} {{userInfo.lastName}}</span>
                <Button
                    class="ml-4"
                    label="Выйти"
                    @click="authStore.quit"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        @apply
        flex
        items-center
        justify-between
        p-2
        bg-white
        shadow-lg
        w-full
        mb-4;

        .user-info {
            @apply
            mr-0
            flex;
        }
    }
</style>