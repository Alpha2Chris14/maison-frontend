<template>
    <div class="flex min-h-screen" x-data="{
        sidebarOpen: false
    }">
        <SideBar :sidebarOpen="sidebarOpen" />
        <!-- <ProfileManagement /> -->
        <WalletComponent />
    </div>

</template>

<script setup>
import SideBar from '../../components/users/SideBar.vue'
import WalletComponent from '../../components/users/WalletComponent.vue'

defineOptions({
    name: 'WalletPage',
})
</script>
