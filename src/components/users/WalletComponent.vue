<template>
    <div class="flex flex-col flex-1 w-full sm:pl-64 min-h-screen bg-gray-50 dark:bg-background-dark">
        <!-- Header -->
        <UserHeader />
        <main class="flex-grow w-full max-w-2xl mx-auto p-4 sm:p-6">
            <div class="space-y-8">
                <div>
                    <h1 class="text-3xl font-bold text-primary dark:text-white mb-6">Wallet &amp; Payments</h1>
                    <div class="bg-primary text-white p-6 rounded-xl space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-sm uppercase tracking-wider text-white/70">Balance</span>
                            <button
                                class="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">Withdraw
                                Funds</button>
                        </div>
                        <p class="text-4xl font-bold tracking-tight">₦12000000.00</p>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Transactions</h2>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between p-4 rounded-lg bg-primary/5 dark:bg-primary/10">
                            <div class="flex flex-col">
                                <p class="font-semibold text-primary dark:text-white">Purchase</p>
                                <p class="text-sm text-primary/60 dark:text-white/60">2023-09-20</p>
                            </div>
                            <p class="font-semibold text-primary dark:text-white">-$30.00</p>
                        </div>
                        <div class="flex items-center justify-between p-4 rounded-lg bg-primary/5 dark:bg-primary/10">
                            <div class="flex flex-col">
                                <p class="font-semibold text-primary dark:text-white">Refund</p>
                                <p class="text-sm text-primary/60 dark:text-white/60">2023-09-15</p>
                            </div>
                            <p class="font-semibold text-green-500">+15.00</p>
                        </div>
                        <div class="flex items-center justify-between p-4 rounded-lg bg-primary/5 dark:bg-primary/10">
                            <div class="flex flex-col">
                                <p class="font-semibold text-primary dark:text-white">Purchase</p>
                                <p class="text-sm text-primary/60 dark:text-white/60">2023-09-10</p>
                            </div>
                            <p class="font-semibold text-primary dark:text-white">-$45.00</p>
                        </div>
                        <div class="flex items-center justify-between p-4 rounded-lg bg-primary/5 dark:bg-primary/10">
                            <div class="flex flex-col">
                                <p class="font-semibold text-primary dark:text-white">Deposit</p>
                                <p class="text-sm text-primary/60 dark:text-white/60">2023-09-05</p>
                            </div>
                            <p class="font-semibold text-green-500">+$100.00</p>
                        </div>
                        <div class="flex items-center justify-between p-4 rounded-lg bg-primary/5 dark:bg-primary/10">
                            <div class="flex flex-col">
                                <p class="font-semibold text-primary dark:text-white">Purchase</p>
                                <p class="text-sm text-primary/60 dark:text-white/60">2023-09-01</p>
                            </div>
                            <p class="font-semibold text-primary dark:text-white">-$20.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import UserHeader from './UserHeader.vue'
export default {
    name: 'WalletComponent',
    components: {
        UserHeader
    }
}
</script>