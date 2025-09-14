<template>
    <div>
        <!-- Header -->
        <HeaderComponent />

        <!-- BreadCrumb -->
        <BreadCrumb title="Shop" :links="[{ name: 'Home', url: '/' }, { name: 'Shop' }]" />

        <!-- Shop Section -->
        <section class="shop spad">
            <div class="container">
                <div class="row">
                    <!-- Sidebar -->
                    <div class="col-lg-3">
                        <ShopSidebar :categories="categories" :brands="brands" :prices="prices" :sizes="sizes"
                            :colors="colors" :tags="tags" v-model:selectedFilters="selectedFilters" />
                    </div>

                    <!-- Products -->
                    <div class="col-lg-9">
                        <div class="shop__product__option mb-4">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <p>Showing {{ paginatedProducts.length }} of {{ filteredProducts.length }} results
                                    </p>
                                </div>
                                <div class="col-md-6 text-md-end">
                                    <label>Sort by Price:</label>
                                    <select v-model="selectedSort" class="ms-2">
                                        <option value="low">Low To High</option>
                                        <option value="high">High To Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <ProductItem v-for="product in paginatedProducts" :key="product.id" :product="product" />
                        </div>

                        <!-- Pagination -->
                        <PaginationComponent :current-page="currentPage" :total-pages="totalPages"
                            @change-page="changePage" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <FooterComponent />
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import ShopSidebar from '../components/ShopSidebar.vue';
import ProductItem from '../components/ProductItem.vue';
import PaginationComponent from '../components/PaginationComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    components: {
        HeaderComponent,
        BreadCrumbs,
        ShopSidebar,
        ProductItem,
        PaginationComponent,
        FooterComponent,
    },
    setup() {
        // Sample data
        const products = ref([
            { id: 1, name: 'Piqué Biker Jacket', price: 67.24, image: 'product-2.jpg', rating: 0, colors: ['black', 'grey'] },
            { id: 2, name: 'Multi-pocket Chest Bag', price: 43.48, image: 'product-3.jpg', rating: 4, colors: ['black', 'grey'] },
            // Add all products here
        ]);

        const categories = ref(['Men', 'Women', 'Bags', 'Clothing', 'Shoes', 'Accessories', 'Kids']);
        const brands = ref(['Louis Vuitton', 'Chanel', 'Hermes', 'Gucci']);
        const prices = ref(['$0.00 - $50.00', '$50.00 - $100.00', '$100.00 - $150.00', '$150.00 - $200.00']);
        const sizes = ref(['xs', 's', 'm', 'xl', '2xl', 'xxl']);
        const colors = ref(['c-1', 'c-2', 'c-3', 'c-4', 'c-5', 'c-6', 'c-7', 'c-8', 'c-9']);
        const tags = ref(['Product', 'Bags', 'Shoes', 'Fashion', 'Clothing', 'Hats', 'Accessories']);

        const selectedFilters = ref({
            category: null,
            brand: null,
            price: null,
            size: null,
            color: null,
            tag: null
        });

        const selectedSort = ref('low');

        // Pagination
        const currentPage = ref(1);
        const itemsPerPage = 9;

        const filteredProducts = computed(() => {
            let result = products.value;

            // Filter logic
            Object.keys(selectedFilters.value).forEach(key => {
                if (selectedFilters.value[key]) {
                    result = result.filter(p => {
                        if (key === 'category') return p.category === selectedFilters.value[key];
                        if (key === 'brand') return p.brand === selectedFilters.value[key];
                        if (key === 'price') {
                            const [min, max] = selectedFilters.value[key].replace('$', '').split(' - ').map(Number);
                            return p.price >= min && p.price <= max;
                        }
                        if (key === 'size') return p.size === selectedFilters.value[key];
                        if (key === 'color') return p.colors.includes(selectedFilters.value[key]);
                        if (key === 'tag') return p.tags?.includes(selectedFilters.value[key]);
                        return true;
                    });
                }
            });

            // Sort
            if (selectedSort.value === 'low') result.sort((a, b) => a.price - b.price);
            if (selectedSort.value === 'high') result.sort((a, b) => b.price - a.price);

            return result;
        });

        const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));

        const paginatedProducts = computed(() => {
            const start = (currentPage.value - 1) * itemsPerPage;
            return filteredProducts.value.slice(start, start + itemsPerPage);
        });

        const changePage = (page) => currentPage.value = page;

        return {
            products,
            categories,
            brands,
            prices,
            sizes,
            colors,
            tags,
            selectedFilters,
            selectedSort,
            currentPage,
            totalPages,
            paginatedProducts,
            changePage
        };
    }
};
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
