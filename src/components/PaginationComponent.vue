<template>
    <div class="pagination mt-4">
        <button :disabled="currentPage === 1" @click="$emit('change-page', currentPage - 1)">Prev</button>

        <button v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"
            @click="$emit('change-page', page)">
            {{ page }}
        </button>

        <button :disabled="currentPage === totalPages" @click="$emit('change-page', currentPage + 1)">Next</button>
    </div>
</template>

<script>
export default {
    name: "PaginationComponent",
    props: {
        currentPage: Number,
        totalPages: Number
    }
};
</script>

<style scoped>
button.active {
    font-weight: bold;
    text-decoration: underline;
}
</style>
