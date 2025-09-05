<template>
    <div>
        <!-- <Preloader /> -->
        <!-- <OffcanvasMenu /> -->
        <HeaderComponent />
        <HeroSectionComponent />
        <CollectionsComponent />
        <ProductView />
        <DealComponent />
        <SocialComponent />
        <BlogComponent />
        <FooterComponent />

    </div>
</template>


<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import HeroSectionComponent from '../components/HerosectionComponent.vue'
import CollectionsComponent from '../components/CollectionsComponent.vue';
import ProductView from '@/components/ProductView.vue';
import DealComponent from '@/components/DealComponent.vue';
import SocialComponent from '@/components/SocialsComponent.vue';
import BlogComponent from '@/components/BlogComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
// import CategoriesSection from './components/CategoriesSection.vue'
// import InstagramSection from './components/InstagramSection.vue'
// import LatestBlogSection from './components/LatestBlogSection.vue'
// import Footer from './components/Footer.vue'
// import SearchModal from './components/SearchModal.vue'
</script>
