<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const { init } = authStore;
onMounted(() => init());
</script>
<template>
    <div class="flex flex-col gap-10 h-full xl:flex-row">
        <div
            class="basis-full self-center md:max-w-[500px] lg:max-w-[550px] xl:max-w-none xl:basis-1/2"
        >
            <h1 class="text-fs-600 font-bold capitalize leading-[1.1]">
                take control of
                <span class="text-[#1dbbc3] underline whitespace-nowrap"
                    >your money</span
                >
            </h1>
            <h3 class="mt-6 text-fs-400 leading-[1.1]">
                Personal budgeting is the secret to financial freedom. <br />
                Start your journey today.
            </h3>
            <Auth />
        </div>
        <div
            class="basis-full self-center md:max-w-[500px] lg:max-w-[550px] xl:max-w-none xl:basis-1/2"
        >
            <img
                class="w-full"
                src="~/assets/images/illustration.jpg"
                alt="hero image"
            />
        </div>
    </div>
</template>
