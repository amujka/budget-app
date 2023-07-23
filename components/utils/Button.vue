<script setup lang="ts">
import { FunctionalComponent } from 'nuxt/dist/app/compat/capi';

defineProps<{
    caption: string;
    icon: FunctionalComponent;
}>();
</script>
<template>
    <div
        class="flex gap-4 items-center w-fit p-2 rounded bg-slate-900 cursor-pointer hover:outline outline-[2px] outline-slate-900 hover:outline-offset-2 transition-all duration-100 ease-in-out"
    >
        <p class="text-white">{{ caption }}</p>
        <component :is="icon" class="w-5 text-white"></component>
    </div>
</template>
