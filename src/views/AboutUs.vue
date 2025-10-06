<template>
    <div>
        <!-- Header -->
        <HeaderComponent />

        <!-- BreadCrumb -->
        <BreadCrumbs title="About Us" :links="[{ name: 'Home', url: '/' }, { name: 'About Us' }]" />
        <AboutSectionComponent />
        <TestimonialComponent />
        <CounterComponent />
        <TeamComponent />
        <ClientComponent />
        <FooterComponent />
    </div>
</template>
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import AboutSectionComponent from '../components/AboutSectionComponent.vue';
import TestimonialComponent from '../components/TestimonialComponent.vue';
import CounterComponent from '../components/CounterComponent.vue';
import TeamComponent from '../components/TeamComponent.vue';
import ClientComponent from '../components/ClientComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>