<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/solid';
import { Expense } from '~/types/types';
const props = defineProps<{
    expense: Expense;
}>();

const emit = defineEmits(['delete-expense']);

const emitHandler = () => {
    emit('delete-expense');
};

const expenseCaption = computed(() => props.expense.name);
const expenseAmount = computed(() => props.expense.amount);
const expenseDate = computed(() => props.expense.date);
</script>
<template>
    <div class="flex gap-1">
        <div
            class="basis-1/3 p-1 text-center text-orange-500 outline outline-1 outline-orange-500 capitalize font-bold"
        >
            {{ expenseCaption }}
        </div>
        <div
            class="basis-1/3 p-1 text-center text-orange-500 outline outline-1 outline-orange-500"
        >
            € {{ expenseAmount }}
        </div>
        <div
            class="basis-1/3 p-1 text-center text-orange-500 outline outline-1 outline-orange-500"
        >
            {{ expenseDate }}
        </div>
        <div
            class="p-1 text-center text-white bg-red-500 cursor-pointer hover:text-red-500 hover:bg-white transition-colors duration-200 ease-in-out"
            @click="emitHandler"
        >
            <component :is="TrashIcon" class="w-5"></component>
        </div>
    </div>
</template>
