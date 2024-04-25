<script setup>
import {ref} from "vue"

import {useAuthStore} from "~/store/auth.js"
import {useUserStore} from "~/store/user.js"
import OverlayPanel from "primevue/overlaypanel"

const authStore = useAuthStore()
const userStore = useUserStore()
const userInfo = ref()
const ov = ref()

const openAuth = (event) => {
    ov.value.toggle(event)
}

function quit() {
    userStore.userInfo = {
        success: false,
        msg: "Не авторизован"
    }
    authStore.quit()
}

function updateUserInfo() {
    console.log(userStore.userInfo)
    userInfo.value = userStore.userInfo
}

</script>

<template>
    <div class="wrapper">
        <div class="actions">
            <NuxtLink
                v-if="userInfo?.success"
                to="/control-panel"
            >
                <Button label="Панель управления" />
            </NuxtLink>
        </div>
        <div class="user-info">
            <div
                class="flex items-center"
                v-if="!userInfo?.success"
            >
                <Button
                    label="Войти"
                    type="button"
                    @click="openAuth"
                />
                <OverlayPanel
                    ref="ov"
                >
                    <div class="w-full">
                        <AuthForm @update-user-info="updateUserInfo" />
                    </div>
                </OverlayPanel>
            </div>

            <div
                class="flex items-center"
                v-else
            >
                <span>{{userInfo.firstName}} {{userInfo.lastName}}</span>
                <Button
                    class="ml-4"
                    label="Выйти"
                    @click="quit"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        @apply
        fixed
        flex
        items-center
        justify-between
        p-2
        bg-white
        shadow-lg
        w-full
        mb-4
        z-50;

        .user-info {
            @apply
            mr-0
            flex;
        }
    }
</style>