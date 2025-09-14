<template>
    <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="filter__controls">
                        <li :class="{ active: activeFilter === 'best-sellers' }"
                            @click="setActiveFilter('best-sellers')">
                            Best Sellers
                        </li>
                        <li :class="{ active: activeFilter === 'new-arrivals' }"
                            @click="setActiveFilter('new-arrivals')">
                            New Arrivals
                        </li>
                        <li :class="{ active: activeFilter === 'hot-sales' }" @click="setActiveFilter('hot-sales')">
                            Hot Sales
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row product__filter">
                <div v-for="product in filteredProducts" :key="product.id"
                    class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix" :class="product.category">
                    <div class="product__item" :class="{ sale: product.sale }">
                        <div class="product__item__pic">
                            <img :src="product.image" :alt="product.name" />
                            <span v-if="product.label" class="label">{{ product.label }}</span>
                            <ul class="product__hover">
                                <li><a href="#"><img src="/img/icon/heart.png" alt="Heart" /></a></li>
                                <li>
                                    <a href="#"><img src="/img/icon/compare.png" alt="Compare" />
                                        <span>Compare</span></a>
                                </li>
                                <li><a href="#"><img src="/img/icon/search.png" alt="Search" /></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>{{ product.name }}</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i v-for="n in 5" :key="n"
                                    :class="{ 'fa fa-star': n <= product.rating, 'fa fa-star-o': n > product.rating }"></i>
                            </div>
                            <h5>${{ product.price }}</h5>
                            <div class="product__color__select">
                                <label v-for="color in product.colors" :key="color.id"
                                    :class="{ [color.name]: true, active: color.active }" :for="'pc-' + color.id">
                                    <input type="radio" :id="'pc-' + color.id" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProductView',
    data() {
        return {
            activeFilter: 'best-sellers',
            products: [
                {
                    id: 1,
                    name: 'Piqué Biker Jacket',
                    image: 'img/product/product-1.jpg',
                    category: 'new-arrivals',
                    label: 'New',
                    rating: 0,
                    price: 67.24,
                    colors: [
                        { id: 1, name: 'default', active: false },
                        { id: 2, name: 'black active', active: true },
                        { id: 3, name: 'grey', active: false },
                    ],
                },
                {
                    id: 2,
                    name: 'Piqué Biker Jacket',
                    image: 'img/product/product-2.jpg',
                    category: 'hot-sales',
                    rating: 0,
                    price: 67.24,
                    colors: [
                        { id: 4, name: 'default', active: false },
                        { id: 5, name: 'black active', active: true },
                        { id: 6, name: 'grey', active: false },
                    ],
                },
                {
                    id: 3,
                    name: 'Multi-pocket Chest Bag',
                    image: 'img/product/product-3.jpg',
                    category: 'new-arrivals',
                    label: 'Sale',
                    rating: 4,
                    price: 43.48,
                    sale: true,
                    colors: [
                        { id: 7, name: 'default', active: false },
                        { id: 8, name: 'black active', active: true },
                        { id: 9, name: 'grey', active: false },
                    ],
                },
                {
                    id: 4,
                    name: 'Diagonal Textured Cap',
                    image: 'img/product/product-4.jpg',
                    category: 'hot-sales',
                    rating: 0,
                    price: 60.9,
                    colors: [
                        { id: 10, name: 'default', active: false },
                        { id: 11, name: 'black active', active: true },
                        { id: 12, name: 'grey', active: false },
                    ],
                },
                {
                    id: 5,
                    name: 'Lether Backpack',
                    image: 'img/product/product-5.jpg',
                    category: 'new-arrivals',
                    rating: 0,
                    price: 31.37,
                    colors: [
                        { id: 13, name: 'default', active: false },
                        { id: 14, name: 'black active', active: true },
                        { id: 15, name: 'grey', active: false },
                    ],
                },
                {
                    id: 6,
                    name: 'Ankle Boots',
                    image: 'img/product/product-6.jpg',
                    category: 'hot-sales',
                    label: 'Sale',
                    rating: 4,
                    price: 98.49,
                    sale: true,
                    colors: [
                        { id: 16, name: 'default', active: false },
                        { id: 17, name: 'black active', active: true },
                        { id: 18, name: 'grey', active: false },
                    ],
                },
                {
                    id: 7,
                    name: 'T-shirt Contrast Pocket',
                    image: 'img/product/product-7.jpg',
                    category: 'new-arrivals',
                    rating: 0,
                    price: 49.66,
                    colors: [
                        { id: 19, name: 'default', active: false },
                        { id: 20, name: 'black active', active: true },
                        { id: 21, name: 'grey', active: false },
                    ],
                },
                {
                    id: 8,
                    name: 'Basic Flowing Scarf',
                    image: 'img/product/product-8.jpg',
                    category: 'hot-sales',
                    rating: 0,
                    price: 26.28,
                    colors: [
                        { id: 22, name: 'default', active: false },
                        { id: 23, name: 'black active', active: true },
                        { id: 24, name: 'grey', active: false },
                    ],
                },
            ],
        };
    },
    computed: {
        filteredProducts() {
            if (this.activeFilter === 'best-sellers') {
                return this.products;
            } else {
                return this.products.filter((product) => product.category === this.activeFilter);
            }
        },
    },
    methods: {
        setActiveFilter(filter) {
            this.activeFilter = filter;
        },
    },
};
</script>
