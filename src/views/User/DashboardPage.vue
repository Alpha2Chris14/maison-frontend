<template>
    <div class="flex min-h-screen" x-data="{
        sidebarOpen: false
    }">
        <SideBar :sidebarOpen="sidebarOpen" />
        <!-- <ProfileManagement /> -->
        <DashboardComponent />
    </div>

</template>

<script setup>
import ProfileManagement from '../../components/users/ProfileManagement.vue'
import SideBar from '../../components/users/SideBar.vue'
import DashboardComponent from '../../components/users/DashboardComponent.vue'

defineOptions({
    name: 'DashboardPage',
})
</script>
