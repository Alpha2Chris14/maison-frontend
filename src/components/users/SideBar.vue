<template>
    <!-- Overlay (visible only when sidebar is open on mobile) -->
    <div v-if="sidebarOpen" @click="$emit('close-sidebar')" class="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden">
    </div>

    <!-- Sidebar -->
    <aside :class="[
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out bg-primary text-background-light sm:translate-x-0'
    ]">
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between p-6">
                <div class="flex items-center gap-3">
                    <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                    </svg>
                    <h1 class="text-xl font-bold text-white">StyleHub</h1>
                </div>

                <!-- Close button (mobile only) -->
                <button @click="$emit('close-sidebar')" class="text-white sm:hidden focus:outline-none">
                    <span class="material-symbols-outlined text-3xl">close</span>
                </button>
            </div>

            <nav class="flex-grow px-4 py-4 space-y-2">
                <router-link to="/dashboard"
                    class="flex items-center gap-3 px-4 py-2 text-white rounded-lg bg-white/10">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span>Dashboard</span>
                </router-link>
                <router-link to="/wallet"
                    class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10">
                    <span class="material-symbols-outlined">account_balance_wallet</span>
                    <span>Wallet</span>
                </router-link>
                <router-link to="/products"
                    class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10">
                    <span class="material-symbols-outlined">inventory_2</span>
                    <span>Products</span>
                </router-link>
                <router-link to="/orders"
                    class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10">
                    <span class="material-symbols-outlined">receipt_long</span>
                    <span>Orders</span>
                </router-link>
                <router-link to="/transactions"
                    class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10">
                    <span class="material-symbols-outlined">payments</span>
                    <span>Transactions</span>
                </router-link>
            </nav>

            <div class="p-4 border-t border-white/10">
                <router-link to="/logout"
                    class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10">
                    <span class="material-symbols-outlined">logout</span>
                    <span>Logout</span>
                </router-link>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: "SideBar",
    props: {
        sidebarOpen: {
            type: Boolean,
            required: true,
        },
    },
};
</script>
