<template>
    <div>
        <!-- Header -->
        <HeaderComponent />

        <!-- BreadCrumb -->
        <BreadCrumbs title="Shopping Cart" :links="[{ name: 'Home', url: '/' }, { name: 'Shopping Cart' }]" />

        <!-- Shopping Cart Component -->
        <ShopCartComponent />
        <FooterComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import ShopCartComponent from '../components/ShopCartComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>