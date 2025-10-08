<template>
    <div class="flex flex-col flex-1 w-full sm:pl-64 min-h-screen bg-gray-50 dark:bg-background-dark">
        <!-- Header -->
        <UserHeader />
        <!-- Main -->
        <main class="p-6">
            <h1 class="text-2xl font-bold text-primary dark:text-background-light mb-6">
                Dashboard Overview
            </h1>

            <!-- Stat Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div v-for="stat in stats" :key="stat.title"
                    class="bg-white dark:bg-background-dark shadow-md hover:shadow-lg transition rounded-2xl p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        {{ stat.title }}
                    </h3>
                    <p class="text-3xl font-bold text-primary dark:text-background-light">
                        {{ stat.value }}
                    </p>
                </div>
            </div>

            <!-- Recent Transactions Card -->
            <div class="bg-white dark:bg-background-dark rounded-2xl shadow-md p-6">
                <h3 class="text-lg font-bold text-primary dark:text-background-light mb-4">
                    Recent Transactions
                </h3>

                <div class="space-y-4">
                    <div v-for="(txn, i) in transactions" :key="i"
                        class="flex items-center justify-between border-b last:border-0 border-gray-100 dark:border-gray-800 pb-3">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/50">
                                <span class="material-symbols-outlined text-primary dark:text-white">
                                    {{ txn.icon }}
                                </span>
                            </div>
                            <div>
                                <p class="font-semibold text-primary dark:text-background-light">
                                    {{ txn.title }}
                                </p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                    {{ txn.subtitle }}
                                </p>
                            </div>
                        </div>
                        <p class="font-semibold text-lg" :class="txn.amount > 0 ? 'text-green-500' : 'text-red-500'">
                            {{ txn.amount > 0 ? '+' : '' }}{{ txn.amount | currency }}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
    { title: 'Total Products', value: '1,250' },
    { title: 'Total Users', value: '9,876' },
    { title: 'Total Sales', value: '$250,650.75' },
    { title: 'Wallet Balance', value: '$1,234.56' },
])

const transactions = ref([
    {
        icon: 'shopping_cart',
        title: 'Product Sale',
        subtitle: 'Order #12345',
        amount: 150.0,
    },
    {
        icon: 'account_balance_wallet',
        title: 'Wallet Top-up',
        subtitle: 'Manual Deposit',
        amount: 500.0,
    },
    {
        icon: 'shopping_cart',
        title: 'Product Sale',
        subtitle: 'Order #12344',
        amount: 89.99,
    },
])
</script>

<script>
import UserHeader from './UserHeader.vue'

export default {
    name: 'DashboardComponent',
    components: {
        UserHeader
    }
}
</script>