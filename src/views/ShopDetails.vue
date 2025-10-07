<template>
    <div>
        <!-- Header -->
        <HeaderComponent />
        <ShopDetails />
        <RelatedProductComponent />
        <FooterComponent />


    </div>
</template>
<script setup>
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import RelatedProductComponent from '../components/RelatedProductComponent.vue';
import ShopDetails from '../components/ShopDetails.vue';
</script>