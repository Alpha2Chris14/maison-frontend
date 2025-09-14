<template>
    <section class="hero">
        <div class="hero__inner">
            <transition name="fade" mode="out-in">
                <article class="slide" :key="currentSlide">
                    <!-- Left: text -->
                    <div class="slide__left">
                        <h6 class="eyebrow">{{ slides[currentSlide].subtitle }}</h6>
                        <h1 class="heading">{{ slides[currentSlide].title }}</h1>
                        <p class="copy">{{ slides[currentSlide].description }}</p>
                        <a href="#" class="btn">
                            SHOP NOW <span class="arrow_right"></span>
                        </a>
                    </div>

                    <!-- Right: artboard with decorations + image -->
                    <div class="slide__right">
                        <div class="artboard">
                            <img :src="slides[currentSlide].img" :alt="slides[currentSlide].title" />
                        </div>
                    </div>
                </article>
            </transition>

            <!-- Arrows -->
            <button class="nav nav--prev" @click="prevSlide" aria-label="Previous">‹</button>
            <button class="nav nav--next" @click="nextSlide" aria-label="Next">›</button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
    {
        img: 'img/hero/hero-1.jpg',
        subtitle: 'SUMMER COLLECTION',
        title: 'Fall - Winter Collections 2030',
        description:
            'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.'
    },
    {
        img: 'img/hero/hero-2.jpg',
        subtitle: 'SUMMER COLLECTION',
        title: 'Explore Timeless Style',
        description:
            'Discover the new collection of premium essentials for every season.'
    }
]

const currentSlide = ref(0)
let timer

const nextSlide = () => (currentSlide.value = (currentSlide.value + 1) % slides.length)
const prevSlide = () =>
    (currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length)

onMounted(() => {
    timer = setInterval(nextSlide, 5000)
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
/* Layout */
.hero {
    background: #f6f4f2;
    /* soft off-white like the mock */
}

.hero__inner {
    max-width: 1200px;
    padding: 6rem 1.25rem;
    /* roomy top/btm spacing */
    margin: 0 auto;
    position: relative;
    min-height: 75vh;
    display: flex;
    align-items: center;
}

.slide {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
}

/* Left side (text) */
.slide__left {
    max-width: 560px;
}

.eyebrow {
    color: #e15656;
    /* subtle red accent */
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin: 0 0 0.75rem 0;
}

.heading {
    font-size: clamp(2.4rem, 4.8vw, 4rem);
    line-height: 1.1;
    font-weight: 800;
    color: #121212;
    margin: 0 0 1rem 0;
}

.copy {
    color: #4b4b4b;
    font-size: 1.05rem;
    line-height: 1.7;
    margin: 0 0 2rem 0;
}

.btn {
    display: inline-block;
    background: #111;
    color: #fff;
    padding: 0.95rem 2rem;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.06em;
    transition: transform 0.15s ease, opacity 0.15s ease;
}

.btn:hover {
    transform: translateY(-1px);
    opacity: 0.95;
}

/* Right side (artboard + decorations) */
.slide__right {
    display: flex;
    justify-content: flex-end;
}

.artboard {
    position: relative;
    width: 100%;
    max-width: 560px;
    border-radius: 16px;
    padding: 2.5rem 2rem 0;
    /* bottom open so image can “sit” */
    background:
        /* faint vertical stripes */
        repeating-linear-gradient(to right,
            rgba(0, 0, 0, 0.05) 0px,
            rgba(0, 0, 0, 0.05) 1px,
            transparent 1px,
            transparent 200px),
        #efede8;
    /* panel base color */
    overflow: hidden;
}

/* dotted cluster */
.artboard::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 12%;
    width: 180px;
    height: 140px;
    background-image: radial-gradient(#ffffff 2px, rgba(255, 255, 255, 0) 2px);
    background-size: 14px 14px;
    opacity: 0.9;
    pointer-events: none;
}

/* pink circle */
.artboard::after {
    content: '';
    position: absolute;
    right: -8%;
    top: 8%;
    width: 420px;
    height: 420px;
    background: #f4d7d7;
    border-radius: 50%;
    opacity: 0.8;
    pointer-events: none;
}

/* big image (scale by height, not width) */
.artboard img {
    position: relative;
    z-index: 2;
    display: block;
    margin-left: auto;
    /* make it BIG like the mock */
    height: clamp(360px, 62vh, 680px);
    width: auto;
    object-fit: contain;
    transform: translateX(6%);
    /* subtle push right to balance composition */
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity .65s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Arrows */
.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 44px;
    width: 44px;
    border-radius: 999px;
    background: transparent;
    border: 0;
    font-size: 28px;
    line-height: 1;
    color: #111;
    cursor: pointer;
    display: grid;
    place-items: center;
    padding: 0;
}

.nav--prev {
    left: -4px;
}

.nav--next {
    right: -4px;
}

.nav:hover {
    opacity: 0.7;
}

/* Responsive tweaks */
@media (max-width: 1024px) {
    .hero__inner {
        padding: 4rem 1rem;
    }

    .slide {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .slide__right {
        justify-content: center;
    }

    .artboard {
        max-width: 640px;
    }

    .artboard img {
        height: clamp(300px, 48vh, 560px);
        transform: none;
    }

    .nav--prev {
        left: 8px;
    }

    .nav--next {
        right: 8px;
    }
}
</style>
