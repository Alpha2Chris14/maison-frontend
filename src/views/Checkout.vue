<template>
    <div>
        <!-- Header -->
        <HeaderComponent />

        <!-- BreadCrumb -->
        <BreadCrumbs title="Checkout" :links="[{ name: 'Home', url: '/' }, { name: 'Checkout' }]" />

        <CheckoutComponent />
        <FooterComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import CheckoutComponent from '../components/CheckoutComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>