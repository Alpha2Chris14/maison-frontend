<!-- src/components/HeroSection.vue -->
<template>
    <section class="hero">
        <div class="hero__slider owl-carousel">
            <div class="hero__items set-bg" v-for="(slide, index) in slides" :key="index"
                :style="{ backgroundImage: `url(${slide.img})` }">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            <div class="hero__text">
                                <h6>{{ slide.subtitle }}</h6>
                                <h2>{{ slide.title }}</h2>
                                <p>{{ slide.description }}</p>
                                <a href="#" class="primary-btn">
                                    Shop now <span class="arrow_right"></span>
                                </a>
                                <div class="hero__social">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// import hero1 from '@/assets/img/hero/hero-1.jpg'
// import hero2 from '@/assets/img/hero/hero-2.jpg'
const slides = [
    {
        img: '/img/hero/hero-1.jpg',
        subtitle: 'Summer Collection',
        title: 'Fall - Winter Collections 2030',
        description:
            'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.',
    },
    {
        img: '/img/hero/hero-2.jpg',
        subtitle: 'Summer Collection',
        title: 'Fall - Winter Collections 2030',
        description:
            'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.',
    },
]

</script>
