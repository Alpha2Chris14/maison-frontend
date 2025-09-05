<template>
    <div class="shop__sidebar">
        <div class="sidebar__categories mb-3">
            <h4>Categories</h4>
            <ul>
                <li v-for="category in categories" :key="category">
                    <a href="#" @click.prevent="selectFilter('category', category)">
                        {{ category }}
                    </a>
                </li>
            </ul>
        </div>
        <!-- Repeat similar blocks for brands, prices, sizes, colors, tags -->
    </div>
</template>

<script>
export default {
    name: "ShopSidebar",
    props: {
        categories: Array,
        brands: Array,
        prices: Array,
        sizes: Array,
        colors: Array,
        tags: Array,
        modelValue: Object // v-model:selectedFilters
    },
    emits: ['update:modelValue'],
    methods: {
        selectFilter(key, value) {
            this.$emit('update:modelValue', { ...this.modelValue, [key]: value });
        }
    }
};
</script>

<style scoped>
/* basic styling */
</style>
