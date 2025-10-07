<template>
    <div>
        <!-- Header -->
        <HeaderComponent />

        <BlogIndexComponent />
        <FooterComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import BlogIndexComponent from '../components/BlogIndexComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>