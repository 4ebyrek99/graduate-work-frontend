<script setup>

import {useAuthStore} from "~/store/auth.js"
import {reactive} from "vue"
import cookies from "js-cookie"

import InputGroup from "primevue/inputgroup"
import InputGroupAddon from "primevue/inputgroupaddon"
import { useToast } from "primevue/usetoast"
const authToast = useToast()


const authStore = useAuthStore()

const user = reactive({
    username: "",
    password: ""
})

async function login() {
    await authStore.login(user)
    if (authStore.authResult.success) {
        cookies.set("token", authStore.authResult.token)
    } else {
        authToast.add({
            severity: "error",
            summary: "Ошибка авторизация",
            detail: authStore.authResult.msg,
            life: 3000
        })
    }
}

</script>

<template>
    <div class="auth-wrapper">
        <Toast />
        <form @submit.prevent="login">
            <InputGroup>
                <InputGroupAddon>
                    <span class="pi pi-user" />
                </InputGroupAddon>
                <InputText
                    v-model="user.username"
                    placeholder="Имя пользователя"
                    required
                />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon>
                    <span class="pi pi-lock" />
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
    .auth-wrapper {
        @apply
        bg-white
        w-[400px]
        rounded-2xl;

        form {
            @apply
            flex
            flex-col
            gap-4
        }
    }
</style>
