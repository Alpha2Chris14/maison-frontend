<template>
    <div>
        <!-- Header -->
        <HeaderComponent />

        <!-- BreadCrumb -->
        <BreadCrumbs title="About" :links="[{ name: 'Home', url: '/' }, { name: 'About' }]" />
    </div>
</template>
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
</script>