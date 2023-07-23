<script setup lang="ts">
import { BanknotesIcon } from '@heroicons/vue/24/solid';
import { useBudgetStore } from '~/store/budget';
const store = useBudgetStore();
const { createNewBudget } = store;

let newBudgetData = ref({
    name: '',
    amount: null,
});

let inputError = ref({
    errorName: false,
    errorAmount: false,
});

const createNewBudgetHandler = () => {
    if (newBudgetData.value.amount && newBudgetData.value.name) {
        createNewBudget(newBudgetData.value);
        newBudgetData.value = {
            name: '',
            amount: null,
        };
        inputError.value = {
            errorName: false,
            errorAmount: false,
        };
    } else {
        !newBudgetData.value.name
            ? (inputError.value.errorName = true)
            : (inputError.value.errorName = false);
        !newBudgetData.value.amount
            ? (inputError.value.errorAmount = true)
            : (inputError.value.errorAmount = false);
    }
};
</script>
<template>
    <div class="basis-full md:basis-1/2 xl:basis-1/3 p-1 rounded-xl bg-white">
        <div
            class="flex flex-col gap-4 w-full p-4 border-2 border-dashed border-slate-900 rounded-xl"
        >
            <h1 class="text-fs-400 font-bold">Create Budget</h1>
            <div class="flex flex-col gap-2">
                <label class="text-fs-200 font-bold">Budget Name</label>
                <input
                    v-model="newBudgetData.name"
                    class="outline outline-2 outline-slate-400 rounded p-4 focus:outline-secondary"
                    placeholder="e.g. Groceries"
                    type="text"
                />
                <small v-if="inputError.errorName" class="text-red-500"
                    >This field cannot be empty</small
                >
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-fs-200 font-bold">Budget Amount</label>
                <input
                    v-model="newBudgetData.amount"
                    class="outline outline-2 outline-slate-400 rounded p-4 focus:outline-secondary"
                    :placeholder="!newBudgetData.amount ? 'e.g. 100' : ''"
                    type="number"
                />
                <small v-if="inputError.errorAmount" class="text-red-500"
                    >This field cannot be empty</small
                >
            </div>
            <UtilsButton
                caption="Create Budget"
                :icon="BanknotesIcon"
                @click="createNewBudgetHandler"
            />
        </div>
    </div>
</template>
