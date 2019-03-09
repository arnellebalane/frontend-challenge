<template>
    <article class="product-preview">
        <div class="wrapper">
            <div class="details">
                <h2 class="new">New Collection</h2>
                <h1>New Nike React Flyknit</h1>

                <p>The search for a softer, springier, and more durable foam led to a breakthrough in cushioning.</p>

                <div class="actions">
                    <BaseSelect label="Qnt" :items="[1, 2, 3, 4, 5]" />
                    <BaseSelect label="Size" :items="['S', 'M', 'L']" />

                    <span class="price">$299</span>
                </div>
            </div>

            <div class="image">
                <img src="../assets/nike-flyknit.png" alt="Nike React Flyknit">
            </div>
        </div>
    </article>
</template>

<script>
    import BaseSelect from './BaseSelect.vue';

    export default {
        name: 'ProductPreview',

        components: {
            BaseSelect
        }
    };
</script>

<style scoped>
    .product-preview {
        display: flex;
        align-items: center;
        padding: 0 12rem;
    }

    .wrapper {
        display: flex;
        align-items: center;
        width: 100vw;
        max-width: 140rem;
        margin: 0 auto;
    }

    .details {
        flex-shrink: 0;
        width: 40rem;
    }

    h1,
    h2 {
        font-family: "Anton", sans-serif;
        letter-spacing: 1.2rem;
        text-transform: uppercase;
    }

    h1 {
        position: relative;
        font-size: 4.2rem;
        color: #fff;
        mix-blend-mode: difference;
    }

    h2 {
        font-size: 2rem;
        color: var(--primary-color);
    }

    p {
        font-size: 1.6rem;
        line-height: 1.6;
        color: #888;
    }

    .actions {
        display: flex;
        align-items: center;
        padding-top: 2em;
    }

    .base-select {
        margin-right: 1rem;
    }

    .price {
        display: inline-block;
        padding: 0 2.4rem;
        border: 2px solid currentColor;
        margin-left: auto;
        font-family: "Anton", sans-serif;
        font-size: 2.4rem;
        line-height: 5.6rem;
        letter-spacing: 1px;
        color: var(--primary-color);
    }

    .image {
        flex-grow: 1;
        margin-left: 15rem;
    }

    img {
        width: 100%;
    }
</style>
