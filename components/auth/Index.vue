<script setup lang="ts">
import { UserIcon, UserPlusIcon } from '@heroicons/vue/24/solid';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const { registerNewUser, loginUser } = authStore;

const credentials = ref({
    email: '',
    password: '',
});
const isUserRegistered = ref(true);

const onSubmit = () => {
    if (isUserRegistered.value) {
        loginUser(credentials.value);
    } else {
        registerNewUser(credentials.value);
    }
    credentials.value.email = '';
    credentials.value.password = '';
};
</script>
<template>
    <div class="mt-4 lg:mt-6 max-w-[30ch]">
        <form
            class="w-full flex flex-col gap-4 items-start"
            @submit.prevent="onSubmit"
        >
            <input
                type="email"
                name="email"
                required
                placeholder="Enter email?"
                class="w-full bg-transparent border-2 rounded border-slate-800 py-2 px-4"
                v-model="credentials.email"
            /><input
                type="password"
                name="password"
                required
                placeholder="Enter password"
                class="w-full bg-transparent border-2 rounded border-slate-800 py-2 px-4"
                v-model="credentials.password"
            />
            <button
                type="submit"
                class="flex gap-2 items-center w-fit bg-slate-800 text-white py-2 px-4 hover:outline outline-2 outline-slate-700 hover:outline-offset-4 rounded transition-all duration-100 ease-in-out"
            >
                <span>{{ isUserRegistered ? 'Login' : 'Create Account' }}</span>
                <UserIcon v-if="isUserRegistered" class="w-5" />
                <UserPlusIcon v-else class="w-5" />
            </button>
        </form>
        <button
            @click="isUserRegistered = !isUserRegistered"
            class="mt-4 text-secondary font-bold"
        >
            <small>{{
                isUserRegistered
                    ? 'Dont have an account? Click here'
                    : 'Already have an account? Click here'
            }}</small>
        </button>
    </div>
</template>
