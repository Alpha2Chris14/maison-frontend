<template>
    <div class="col-lg-4 col-md-6 col-sm-6">
        <div :class="['product__item', { sale: product.sale }]">
            <div class="product__item__pic set-bg" :style="{ backgroundImage: 'url(' + product.img + ')' }">
                <span v-if="product.sale" class="label">Sale</span>
                <ul class="product__hover">
                    <li><a href="#"><img src="/img/icon/heart.png" alt=""></a></li>
                    <li><a href="#"><img src="/img/icon/compare.png" alt=""> <span>Compare</span></a></li>
                    <li><a href="#"><img src="/img/icon/search.png" alt=""></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6>{{ product.name }}</h6>
                <a href="#" class="add-cart">+ Add To Cart</a>
                <div class="rating">
                    <i v-for="n in 5" :key="n" :class="n <= product.rating ? 'fa fa-star' : 'fa fa-star-o'"></i>
                </div>
                <h5>{{ product.price }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        product: Object,
    },
};
</script>
