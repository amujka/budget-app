<script setup lang="ts">
import { Budget } from 'types/types';
const props = defineProps<{
    budget: Budget;
}>();
const budgetName = computed(() => props.budget.name);
const budgetAmount = computed(() => parseInt(props.budget.amount.toFixed(2)));
const budgetExpenses = computed(() => props.budget.expenses);
const budgetTheme = computed(() => props.budget.theme);
const amountSpent = computed(() => {
    return budgetExpenses.value?.reduce((acc, cur) => acc + cur.amount, 0) || 0;
});
const amoutRemaining = computed(() =>
    (budgetAmount.value - amountSpent.value).toFixed(2)
);
const progressWidth = computed(
    () => `${(amountSpent.value / budgetAmount.value) * 100}%`
);
</script>
<template>
    <div
        :class="[
            `border-${budgetTheme}-500`,
            'col-span-12 p-4 md:col-span-6 lg:col-span-4 xl:col-span-3 h-fit max-w-2xl border-2 rounded-xl bg-white',
        ]"
    >
        <div class="flex flex-col gap-4">
            <div class="flex justify-between">
                <h1
                    :class="[
                        `text-${budgetTheme}-500`,
                        'text-fs-400 font-bold capitalize',
                    ]"
                >
                    {{ budgetName }}
                </h1>
                <p :class="[`text-${budgetTheme}-500`, 'text-fs-400']">
                    € {{ budgetAmount }}
                </p>
            </div>
            <div class="relative overflow-hidden w-full h-4 bg-slate-200 rounded-full">
                <span
                    :class="[
                        `bg-${budgetTheme}-500`,
                        'absolute top-0 left-0 z-10 block h-4 rounded-full transition-all duration-200 ease-in-out',
                    ]"
                    :style="{ width: progressWidth }"
                />
            </div>
            <div class="flex justify-between">
                <p class="text-fs-200 text-slate-400">€ {{ amountSpent }} spent</p>
                <p
                    :class="[
                        +amoutRemaining <= 0 ? '!text-red-500 font-bold' : '',
                        'text-fs-200 text-slate-400',
                    ]"
                >
                    € {{ amoutRemaining }}
                    <span>{{ +amoutRemaining <= 0 ? 'over limit' : 'remaining' }}</span>
                </p>
            </div>
            <slot />
        </div>
    </div>
</template>

<style scoped></style>
