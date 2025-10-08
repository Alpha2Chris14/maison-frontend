<template>
    <div class="flex min-h-screen" x-data="{
        sidebarOpen: false
    }">
        <SideBar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
        <!-- <ProfileManagement /> -->
        <DashboardComponent />
    </div>

</template>

<!-- <script setup>
import ProfileManagement from '../../components/users/ProfileManagement.vue'
import SideBar from '../../components/users/SideBar.vue'
import DashboardComponent from '../../components/users/DashboardComponent.vue'

defineOptions({
    name: 'DashboardPage',
})

</script> -->

<script setup>
import { ref } from 'vue'
import ProfileManagement from '../../components/users/ProfileManagement.vue'
import SideBar from '../../components/users/SideBar.vue'
import DashboardComponent from '../../components/users/DashboardComponent.vue'

defineOptions({
    name: 'DashboardPage',
})
const sidebarOpen = ref(false)
</script>