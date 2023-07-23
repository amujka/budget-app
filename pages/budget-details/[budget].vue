<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/solid';
import { useBudgetStore } from '~/store/budget';

import { DoughnutChart } from 'vue-chart-3';

const store = useBudgetStore();
const { budgets } = storeToRefs(store);
const { deleteExpense } = store;
const route = useRoute();

const budget = computed(() =>
    budgets.value.find((budget) => budget.name === route.params.budget)
);

const budgetName = computed(() => budget.value?.name);
const expenses = computed(() => budget.value?.expenses);
const theme = computed(() => budget.value?.theme);
const chartData = computed(() => {
    return {
        labels: expenses.value?.map((expense) => expense.name),
        datasets: [
            {
                data: expenses.value?.map((expense) => expense.amount),
                backgroundColor: [
                    '#b50d12',
                    '#bf2f1f',
                    '#c9452c',
                    '#d3583a',
                    '#dc6a48',
                    '#e57c58',
                    '#ee8d68',
                    '#f79d79',
                    '#ffae8a',
                    '#cc474b',
                    '#f55b5f',
                ],
            },
        ],
    };
});

const options = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
    },
});

const deleteExpenseHandler = (id: number | string) => {
    deleteExpense(id, route.params.budget as string);
};
</script>
<template>
    <div class="flex flex-col gap-10">
        <h1 class="text-fs-500 font-bold capitalize">
            <span :class="`text-${theme}-500`">
                {{ budgetName }}
            </span>
            Overview
        </h1>
        <div class="grid grid-cols-12 gap-10">
            <Budget :budget="budget">
                <NuxtLink :to="`/budget-details/${budgetName}`">
                    <UtilsButton caption="Delete Budget" :icon="TrashIcon" />
                </NuxtLink>
            </Budget>
            <FormNewExpense
                :caption="(budgetName as string)"
                :theme="(theme as string)"
            />
            <!-- <component
                :is="DoughnutChart"
                :chartData="chartData"
                class="col-span-12"
            ></component> -->
            <DoughnutChart
                :chartData="chartData"
                class="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-6 lg:row-span-2"
                :options="options"
            />
            <div
                class="row-start-2 col-span-12 lg:col-span-8 xl:col-span-6 flex flex-col gap-1"
            >
                <Expense
                    v-for="expense in expenses"
                    :expense="expense"
                    :key="expense.id"
                    @delete-expense="deleteExpenseHandler(expense.id)"
                />
            </div>
        </div>
    </div>
</template>
