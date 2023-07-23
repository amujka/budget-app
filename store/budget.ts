import { Budget } from "types/types"

export const useBudgetStore = defineStore('budget',()=>{
    const budgets = ref<Budget[] | []>([
        {id:1, name:'food', amount: 200, theme:'blue',expenses:[
            {id:45844, name:'bananas',amount:2, date: '15/07/2023'},
            {id:1234, name:'milk',amount:4, date: '15/07/2023'},
            {id:545233, name:'chicken breast',amount:5.5, date: '15/07/2023'},

        ]},
        {id:2, name:'gas', amount: 180, theme:'emerald',expenses:[
            {id:458844, name:'gas 1',amount:60, date: '15/07/2023'},
            {id:4582844, name:'gas 2',amount:53, date: '17/07/2023'},
        ]},
        {id:3, name:'bills', amount: 150, theme:'cyan',expenses:[
            {id:458844, name:'phone',amount:43, date: '20/07/2023'},
        ]},
    ])

    const createNewBudget = (newBudgetData: {name:string, amount:number}) => {
        const themeColors = ['red','emerald','blue','cyan','teal','orange','amber','violet']
        const randomColor  = themeColors[Math.floor(Math.random() * 8)]
        const newBuget = {
            id:Math.floor(Math.random() * 10000),
            name:newBudgetData.name,
            amount: newBudgetData.amount,
            theme:randomColor,
            expenses: [],
        }
        budgets.value = [...budgets.value, newBuget]
    }
    const createNewExpense = (newExpenseData: {name:string, amount:number},budgetName: string) => {
        const newExpense = {
            id:Math.floor(Math.random() * 10000),
            name:newExpenseData.name,
            amount: newExpenseData.amount,
            date: new Date().toLocaleDateString('en-GB')
        }
        const specificBudget= budgets.value.find((budget) => budget.name === budgetName);

        specificBudget && (specificBudget.expenses = [...specificBudget.expenses, newExpense])
    }

    const deleteExpense = (id: number|string,budgetName: string) => {
        const specificBudget= budgets.value.find((budget) => budget.name === budgetName);
        specificBudget && (specificBudget.expenses = specificBudget.expenses?.filter((expense) => expense.id !== id))
    }

    return {
        budgets,
        createNewBudget,
        createNewExpense,
        deleteExpense
    }
})