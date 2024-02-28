<script setup lang="ts">

import {mdiAccount, mdiLock} from "@mdi/js"
import {useAuthStore} from "~/store/auth.js"
import {reactive} from "vue"
import cookies from "js-cookie"
import {navigateTo} from "#app"

const authStore = useAuthStore()

const user = reactive({
    username: "",
    password: ""
})

async function login() {
    await authStore.login(user)
    if (authStore.authResult.success) {
        cookies.set("token", authStore.authResult.token)
        navigateTo("/")
    }
}

</script>

<template>
    <div class="wrapper">
        <form @submit.prevent="login">
            <InputGroup>
                <InputGroupAddon>
                    <Icon :icon="mdiAccount" />
                </InputGroupAddon>
                <InputText
                    v-model="user.username"
                    placeholder="Имя пользователя"
                    required
                />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon>
                    <Icon :icon="mdiLock" />
                </InputGroupAddon>
                <InputText
                    v-model="user.password"
                    placeholder="Пароль"
                    type="password"
                    required
                />
            </InputGroup>
            <Button
                label="Войти"
                type="submit"
            />
        </form>
    </div>
</template>

<style scoped>
    .wrapper {
        @apply
        bg-white
        w-[400px]
        h-full
        p-4
        shadow-lg
        rounded-2xl;

        form {
            @apply
            flex
            flex-col
            gap-4
        }
    }
</style>