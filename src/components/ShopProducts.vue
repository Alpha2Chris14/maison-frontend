<template>
    <div class="row">
        <ProductItem v-for="item in products" :key="item.id" :product="item" />
    </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
    name: "ShopProducts",
    components: { ProductItem },
    props: {
        products: Array,
    },
};
</script>
