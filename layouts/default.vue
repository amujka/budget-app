<template>
    <div class="flex flex-col justify-between bg-tertiary min-h-screen">
        <div>
            <div class="px-4 xl:px-10 flex justify-between items-center py-4">
                <NuxtLink
                    class="inline-flex items-center gap-2 w-fit hover:outline outline-[3px] outline-[#1dbbc3] hover:outline-offset-8 rounded transition-all duration-100 ease-in-out"
                    to="/"
                >
                    <img
                        class="w-[30px] h-[30px]"
                        src="~/assets/images/logomark.svg"
                        alt="Logo"
                    />
                    <span class="text-2xl font-bold underline">HomeBudget</span>
                </NuxtLink>
            </div>
            <div class="container py-2 lg:py-6">
                <slot />
            </div>
        </div>
        <div class="">
            <img class="" src="~/assets/images/wave.svg" alt="" />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
