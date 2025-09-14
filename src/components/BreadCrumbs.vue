<template>
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>{{ title }}</h4>
                        <div class="breadcrumb__links">
                            <a href="./index.html">Home</a>
                            <span>{{ current }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BreadCrumbs",
    props: {
        title: String,
        current: String,
    },
};
</script>
