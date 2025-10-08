<template>
    <aside :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out bg-primary text-background-light sm:translate-x-0">
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between p-6">
                <div class="flex items-center gap-3">
                    <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                    </svg>
                    <h1 class="text-xl font-bold text-white">StyleHub</h1>
                </div>
            </div>
            <nav class="flex-grow px-4 py-4 space-y-2">
                <router-link to="/dashboard" class="flex items-center gap-3 px-4 py-2 text-white rounded-lg bg-white/10"
                    href="#">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span>Dashboard</span>
                </router-link>
                <a class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10" href="#">
                    <span class="material-symbols-outlined">account_balance_wallet</span>
                    <span>Wallet</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10" href="#">
                    <span class="material-symbols-outlined">inventory_2</span>
                    <span>Products</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10" href="#">
                    <span class="material-symbols-outlined">receipt_long</span>
                    <span>Orders</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10" href="#">
                    <span class="material-symbols-outlined">payments</span>
                    <span>Transactions</span>
                </a>
            </nav>
            <div class="p-4 border-t border-white/10">
                <a class="flex items-center gap-3 px-4 py-2 text-white rounded-lg hover:bg-white/10" href="#">
                    <span class="material-symbols-outlined">logout</span>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    </aside>
</template>
<script>
export default {
    name: 'SideBar',
    props: {
        sidebarOpen: {
            type: Boolean,
            required: true
        }
    }
}
</script>