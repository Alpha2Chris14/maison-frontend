<!-- src/components/OffcanvasMenu.vue -->
<template>
    <div>
        <div class="offcanvas-menu-overlay" @click="closeMenu"></div>
        <div class="offcanvas-menu-wrapper" :class="{ open: isOpen }">
            <div class="offcanvas__option">
                <div class="offcanvas__links">
                    <a href="#">Sign in</a>
                    <a href="#">FAQs</a>
                </div>
                <div class="offcanvas__top__hover" @click="toggleCurrency">
                    <span>Usd <i class="arrow_carrot-down"></i></span>
                    <ul v-show="currencyOpen">
                        <li @click="selectCurrency('USD')">USD</li>
                        <li @click="selectCurrency('EUR')">EUR</li>
                        <li @click="selectCurrency('USD')">USD</li>
                    </ul>
                </div>
            </div>
            <div class="offcanvas__nav__option">
                <a href="#" class="search-switch"><img src="/img/icon/search.png" alt="search" /></a>
                <a href="#"><img src="/img/icon/heart.png" alt="heart" /></a>
                <a href="#"><img src="/img/icon/cart.png" alt="cart" /> <span>0</span></a>
                <div class="price">$0.00</div>
            </div>
            <div id="mobile-menu-wrap"></div>
            <div class="offcanvas__text">
                <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// State to track if offcanvas is open
const isOpen = ref(true) // You can toggle this from outside or via a prop if needed

// Currency dropdown open state
const currencyOpen = ref(false)
const selectedCurrency = ref('USD')

function toggleCurrency() {
    currencyOpen.value = !currencyOpen.value
}

function selectCurrency(currency) {
    selectedCurrency.value = currency
    currencyOpen.value = false
}

function closeMenu() {
    isOpen.value = false
}
</script>

<style scoped>
/* You can add offcanvas menu styles here or keep them in your global CSS */

.offcanvas-menu-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: white;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1050;
    overflow-y: auto;
}

.offcanvas-menu-wrapper.open {
    transform: translateX(0);
}

.offcanvas-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1040;
}

/* Add additional styles if needed */
</style>
