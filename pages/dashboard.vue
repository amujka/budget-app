<script setup lang="ts"></script>
<template>
    <h1 class="text-fs-600 font-bold">
        Welcome back, <span class="text-secondary">Alen</span>
    </h1>
    <div class="flex flex-col gap-4 mt-10 md:flex-row">
        <FormNewBudget />
    </div>
    <div class="flex flex-col gap-4 lg:gap-10 mt-10">
        <h1 class="text-fs-500 font-bold">Existing budgets</h1>
        <BudgetList />
    </div>
</template>
