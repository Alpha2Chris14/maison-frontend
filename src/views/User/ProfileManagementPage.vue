<template>
    <div class="flex min-h-screen" x-data="{
        sidebarOpen: false
    }">
        <SideBar :sidebarOpen="sidebarOpen" />
        <ProfileManagement />
    </div>

</template>

<script setup>
import ProfileManagement from '../../components/users/ProfileManagement.vue'
import SideBar from '../../components/users/SideBar.vue'

defineOptions({
    name: 'ProfileManagementPage',
})
</script>
