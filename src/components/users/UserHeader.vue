<template>
    <header class="flex items-center justify-between px-4 py-3 border-b border-primary/10 dark:border-white/10 sm:px-6">
        <button @click="sidebarOpen = !sidebarOpen"
            class="p-2 -ml-2 rounded-full sm:hidden hover:bg-primary/10 dark:hover:bg-white/10">
            <span class="material-symbols-outlined"> menu </span>
        </button>
        <div class="items-center hidden gap-3 sm:flex"></div>
        <div class="flex items-center gap-2">
            <button class="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-white/10">
                <span class="material-symbols-outlined"> search </span>
            </button>
            <button class="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-white/10">
                <span class="material-symbols-outlined"> shopping_bag </span>
            </button>
            <router-link to="/profile" class="w-8 h-8 bg-center bg-no-repeat bg-cover rounded-full" style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBs-lFs8UgLXqCTtmjY6RBuq__-mOZW-IgEUebO5c0OQy2O3YmuPEg3s9YHsYzhIM4cGOXyy1vwnnLcf_OhDoFcrWvEjbFUMd3n1ztJptd1-KJsvNl6Qm61ckpJH6vMN8GmS_Ec6q09ZuCVqtmPrCbFfEjzVkPf8ZXavJA4q5Tu_XjBvTkEPD3VjaLPrtqnld1Gy9s67jt61kE2NH60ePdY76A-NAdGIiiEA07lzeCmCIatQB5hdYTZUBJ3Qbv6n_B72C_xMcQTdq8');
              "></router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'UserHeader',
    // props: {
    //     sidebarOpen: {
    //         type: Boolean,
    //         required: true
    //     }
    // }
}
</script>