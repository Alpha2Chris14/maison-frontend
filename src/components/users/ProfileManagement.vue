<template>
    <div class="flex flex-col flex-1 w-full sm:pl-64">
        <UserHeader />
        <main class="flex-grow w-full max-w-2xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
            <div class="space-y-8">
                <h2 class="text-2xl font-bold text-primary dark:text-white sm:text-3xl">
                    User Management
                </h2>
                <div class="space-y-4">
                    <a class="flex items-center p-4 transition-colors bg-white rounded-lg shadow-sm dark:bg-primary/50 hover:bg-background-light dark:hover:bg-primary/80"
                        href="#">
                        <div class="w-12 h-12 mr-4 bg-center bg-no-repeat bg-cover rounded-full" style="
                    background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0KZJ9OmpF-b1Rj2aiG4g4mDJL-rWSHK5p3UIpUtG9DZ0F-qAo2BnZfld3dJkbDKE4niC0Lvgb_x53fjhIz0q0qtd99NendVBHU_esdFICxIFMq1BxsV-Cgx3CdWq6gWflpEYA62ncSkEw1w7sqpH_K_Ook-QPF-0Q8ptVa4bY2c5Dlww7Pc9cq2Ez1IEzA7yiwX-IIvbi1nBijaLej9X3l82RbMLCyXRueZdZ9ITvmuE-GF-dp6LyDId420l9izVmWrnEnk2Fv-Y');
                  "></div>
                        <div class="flex-grow">
                            <p class="font-bold text-primary dark:text-white">
                                Emma Jackson
                            </p>
                            <p class="text-sm text-primary/60 dark:text-white/60">
                                emma.jackson@email.com
                            </p>
                        </div>
                        <span class="material-symbols-outlined text-primary/60 dark:text-white/60">
                            chevron_right
                        </span>
                    </a>
                    <div class="bg-white rounded-lg shadow-sm dark:bg-primary/50">
                        <a class="flex items-center p-4 transition-colors border-b border-primary/10 dark:border-white/10 hover:bg-background-light dark:hover:bg-primary/80"
                            href="#">
                            <div class="flex items-center justify-center w-10 h-10 mr-4 rounded-lg bg-primary/10">
                                <span class="material-symbols-outlined text-primary dark:text-white">
                                    security
                                </span>
                            </div>
                            <p class="flex-grow font-medium text-primary dark:text-white">
                                Edit Permissions
                            </p>
                            <span class="material-symbols-outlined text-primary/60 dark:text-white/60">
                                chevron_right
                            </span>
                        </a>
                        <a class="flex items-center p-4 transition-colors hover:bg-background-light dark:hover:bg-primary/80"
                            href="#">
                            <div class="flex items-center justify-center w-10 h-10 mr-4 rounded-lg bg-primary/10">
                                <span class="material-symbols-outlined text-primary dark:text-white">
                                    group_remove
                                </span>
                            </div>
                            <p class="flex-grow font-medium text-primary dark:text-white">
                                Suspend Account
                            </p>
                            <span class="material-symbols-outlined text-primary/60 dark:text-white/60">
                                chevron_right
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import UserHeader from './UserHeader.vue'

export default {
    name: 'ProfileManagement',
    components: {
        UserHeader
    }
}
</script>