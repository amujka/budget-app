<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/solid';

import { useBudgetStore } from '~/store/budget';
defineProps<{
    caption: string;
    theme: string;
}>();
const route = useRoute();
const store = useBudgetStore();
const { createNewExpense } = store;

const newExpenseData = ref({
    name: '',
    amount: 0,
});
let inputError = ref({
    errorName: false,
    errorAmount: false,
});
const createNewExpenseHandler = () => {
    if (newExpenseData.value.amount && newExpenseData.value.name) {
        createNewExpense(newExpenseData.value, route.params.budget as string);
        newExpenseData.value = {
            name: '',
            amount: 0,
        };
        inputError.value = {
            errorName: false,
            errorAmount: false,
        };
    } else {
        !newExpenseData.value.name
            ? (inputError.value.errorName = true)
            : (inputError.value.errorName = false);
        !newExpenseData.value.amount
            ? (inputError.value.errorAmount = true)
            : (inputError.value.errorAmount = false);
    }
};
</script>
<template>
    <div
        class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 p-1 rounded-xl bg-white"
    >
        <div
            class="flex flex-col gap-4 w-full p-4 border-2 border-dashed border-slate-900 rounded-xl"
        >
            <h1 class="text-fs-400 font-bold">
                Add <span :class="`text-${theme}-500`">{{ caption }}</span> expense
            </h1>
            <div class="flex flex-col gap-2">
                <label class="text-fs-200 font-bold">Expense Name</label>
                <input
                    v-model="newExpenseData.name"
                    class="outline outline-2 outline-slate-400 rounded p-4 focus:outline-secondary"
                    placeholder="e.g. Groceries"
                    type="text"
                />
                <small v-if="inputError.errorName" class="text-red-500"
                    >This field cannot be empty</small
                >
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-fs-200 font-bold">Expense Amount</label>
                <input
                    v-model="newExpenseData.amount"
                    class="outline outline-2 outline-slate-400 rounded p-4 focus:outline-secondary"
                    type="number"
                />
                <small v-if="inputError.errorAmount" class="text-red-500"
                    >This field cannot be empty</small
                >
            </div>
            <UtilsButton
                caption="Create Expense"
                :icon="PlusCircleIcon"
                @click="createNewExpenseHandler"
            />
        </div>
    </div>
</template>
