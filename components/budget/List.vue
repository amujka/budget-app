<script setup lang="ts">
import { CurrencyEuroIcon } from '@heroicons/vue/24/solid';

import { useBudgetStore } from '~/store/budget';
const store = useBudgetStore();
const { budgets } = storeToRefs(store);
</script>
<template>
    <div class="grid grid-cols-12 gap-4">
        <Budget v-for="budget in budgets" :budget="budget" :key="budget.id">
            <NuxtLink :to="`/budget-details/${budget.name}`">
                <UtilsButton caption="View Details" :icon="CurrencyEuroIcon" />
            </NuxtLink>
        </Budget>
    </div>
</template>
