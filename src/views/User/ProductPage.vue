<template>
    <div class="flex min-h-screen" x-data="{
        sidebarOpen: false
    }">
        <SideBar :sidebarOpen="sidebarOpen" />
        <!-- <ProfileManagement /> -->
        <ProductComponent />
    </div>

</template>

<script setup>
import ProductComponent from '../../components/users/ProductComponent.vue';
import SideBar from '../../components/users/SideBar.vue'

defineOptions({
    name: 'ProductPage',
})
</script>
