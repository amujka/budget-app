export interface Credentials {
    email: string,
    password: string
}

export interface User {
    email:string | undefined,
    id: string | undefined
}

export interface Budget {
    id: string |number,
    name: string,
    amount: number,
    theme: string,
    expenses?: Expense[]
}

export interface Expense {
    id: string |number,
    name: string,
    amount: number,
    date: string,
}