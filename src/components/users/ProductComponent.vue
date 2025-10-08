<template>
    <div class="flex flex-col flex-1 w-full sm:pl-64">
        <UserHeader />
        <main class="flex-grow p-8">
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <h2 class="text-3xl font-bold text-primary dark:text-white">Product Management</h2>
                    <button
                        class="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-primary"><span
                            class="material-symbols-outlined">add</span> <span>Add New Product</span></button>
                </div>
                <div class="mt-8 md:hidden">
                    <div class="relative w-full">
                        <span
                            class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/60 dark:text-white/60">search</span>
                        <input
                            class="w-full rounded-full border-primary/20 bg-transparent py-2 pl-10 pr-4 text-primary focus:border-primary/50 focus:ring-0 dark:border-white/30 dark:text-white dark:placeholder-white/60"
                            placeholder="Search products..." type="text" />
                    </div>
                </div>
                <div class="mt-8 flow-root">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle">
                            <div class="overflow-hidden rounded-lg border border-primary/10 dark:border-white/20">
                                <table class="min-w-full divide-y divide-primary/10 dark:divide-white/20">
                                    <thead class="bg-primary/5 dark:bg-white/10">
                                        <tr>
                                            <th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary dark:text-white sm:pl-6"
                                                scope="col">Product</th>
                                            <th class="px-3 py-3.5 text-left text-sm font-semibold text-primary dark:text-white"
                                                scope="col">Status</th>
                                            <th class="px-3 py-3.5 text-left text-sm font-semibold text-primary dark:text-white"
                                                scope="col">Price</th>
                                            <th class="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col"><span
                                                    class="sr-only">Edit</span></th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="divide-y divide-primary/10 bg-background-light dark:divide-white/20 dark:bg-background-dark">
                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div class="flex items-center">
                                                    <div class="h-10 w-10 shrink-0 rounded-lg bg-cover bg-center"
                                                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBV7nn7SR-2Ppct-doRbfRdvVr8EK1bE5sIIaZlwuXwW6Cko2ODepBIfnUW1dlNlqCJImJ6L3vt1yBTl2iodMFGiBvblMV7lJYnoRTqD8_chOayK_oY6mxeUdDmo6eRP_tPtSMvpGpjWi33n-8nncwAJSNlua5khxXMVQUpMhf1FYM0-qPhaJrbH-jslXcR37MJhMo7thKOema2oTWxkPQin3XF4M6eq9bQOJMf4qTH4ukzzOdMIVXNWQ479K4aaaf3lXXEltjiLas");'>
                                                    </div>
                                                    <div class="ml-4">
                                                        <div class="font-medium text-primary dark:text-white">Summer
                                                            Dress
                                                        </div>
                                                        <div class="text-primary/60 dark:text-white/60">SKU: #D12345
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-primary dark:text-white">
                                                <span
                                                    class="inline-flex rounded-full bg-primary/10 px-2 text-xs font-semibold leading-5 text-primary dark:bg-white/10 dark:text-white">Active</span>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-primary dark:text-white">
                                                $49.99</td>
                                            <td
                                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a class="text-primary hover:text-primary/80 dark:text-white dark:hover:text-white/80"
                                                    href="#">Edit<span class="sr-only">, Summer Dress</span></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div class="flex items-center">
                                                    <div class="h-10 w-10 shrink-0 rounded-lg bg-cover bg-center"
                                                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUbVakrBFP9Yza6h3KIcyCvnPfMZ1M8Wc58j40ajtgZWbD-u790SuT62E5MD1BUXO9QYD-N7D6oyrfit-7Uioo0N1EhnBmvzPb5Z8UrwuD5kYzwFGBygeSZcOTA-l1H0UezLsGu4jPvVF8xTUZ6mDFVrAC1b3Tv8S8zi7hQD8oqxxc5yL5wDizvT2X6bOnUWcyZK4EO3Hqk7Y9kIHNRWNwthdOT3JqMGWgOtqGDPtR-EmmMGlRHdAqJ9gsUZp-2B3BPZyV2h0rQEg");'>
                                                    </div>
                                                    <div class="ml-4">
                                                        <div class="font-medium text-primary dark:text-white">Leather
                                                            Jacket
                                                        </div>
                                                        <div class="text-primary/60 dark:text-white/60">SKU: #J67890
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-primary dark:text-white">
                                                <span
                                                    class="inline-flex rounded-full bg-primary/10 px-2 text-xs font-semibold leading-5 text-primary dark:bg-white/10 dark:text-white">Inactive</span>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-primary dark:text-white">
                                                $129.99</td>
                                            <td
                                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a class="text-primary hover:text-primary/80 dark:text-white dark:hover:text-white/80"
                                                    href="#">Edit<span class="sr-only">, Leather Jacket</span></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div class="flex items-center">
                                                    <div class="h-10 w-10 shrink-0 rounded-lg bg-cover bg-center"
                                                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRBEJ2dXr-yvMpZOPL5_c3O4urCvjE8xIvAgNH7_Gd0v8cEWOmURsnIGy4Z5aYd-2NJboA_HrIrJ76pD0sFYT8x8K_iNl3PsV_sKdCHUMeF9I5UgpfF06HbB5jRKwn37rM1cm-Sr-goL-Kq0F2kVYCS91XrOv3GMRbhh-Px4zCSmdNhFG24TeBXMF_rpkizBd8SmK46aN07IYpDduAimFwebuVNW3ezjsjrh0h6aXUdDlyh4YHcvA6_RLYv2JpHAkJRI1sfcVAeiM");'>
                                                    </div>
                                                    <div class="ml-4">
                                                        <div class="font-medium text-primary dark:text-white">Pencil
                                                            Skirt
                                                        </div>
                                                        <div class="text-primary/60 dark:text-white/60">SKU: #S11223
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-primary dark:text-white">
                                                <span
                                                    class="inline-flex rounded-full bg-primary/10 px-2 text-xs font-semibold leading-5 text-primary dark:bg-white/10 dark:text-white">Active</span>
                                            </td>
                                            <td
                                                class="whitespace-nowrap px-3 py-4 text-sm text-primary dark:text-white">
                                                $39.99</td>
                                            <td
                                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a class="text-primary hover:text-primary/80 dark:text-white dark:hover:text-white/80"
                                                    href="#">Edit<span class="sr-only">, Pencil Skirt</span></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import UserHeader from './UserHeader.vue';
export default {
    name: 'ProductComponent',
    components: {
        UserHeader
    }
}
</script>