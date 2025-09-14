<template>
    <section class="latest spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Latest News</span>
                        <h2>Fashion New Trends</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <img src="/img/blog/blog-1.jpg" alt="" class="blog__item__pic">
                        <div class="blog__item__text">
                            <span><img src="/img/icon/calendar.png" alt=""> 16 February 2020</span>
                            <h5>What Curling Irons Are The Best Ones</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <img src="/img/blog/blog-2.jpg" alt="" class="blog__item__pic">
                        <div class="blog__item__text">
                            <span><img src="/img/icon/calendar.png" alt=""> 21 February 2020</span>
                            <h5>Eternity Bands Do Last Forever</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <img src="/img/blog/blog-3.jpg" alt="" class="blog__item__pic">
                        <div class="blog__item__text">
                            <span><img src="/img/icon/calendar.png" alt=""> 28 February 2020</span>
                            <h5>The Health Benefits Of Sunglasses</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogComponent',
}
</script>

<style scoped>
.blog__item__pic {
    width: 100%;
    height: auto;
    display: block;
}

.blog__item__text {
    z-index: 20;
    position: relative;
    text-align: justify;
}
</style>