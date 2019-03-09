<template>
    <div class="product-actions">
        <div class="wrapper">
            <button class="nav-btn prev-btn"></button>
            <button class="nav-btn next-btn"></button>

            <button class="cart-btn">Add to Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductActions'
    };
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        width: 100vw;
        max-width: 140rem;
        margin: 0 auto;
    }

    .nav-btn {
        flex-shrink: 0;
        display: block;
        width: 9rem;
        height: 9rem;
        border: none;
        margin-right: 0.2rem;
        position: relative;
        background-color: #000;
        outline: none;
    }

    .nav-btn::before {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        position: absolute;
        top: calc(50% - 0.6rem);
        left: calc(50% - 0.6rem);
        transform-origin: center center;
    }

    .prev-btn::before {
        transform: translateX(5px) rotate(-45deg);
    }

    .next-btn::before {
        transform: translateX(-5px) rotate(135deg);
    }

    .cart-btn {
        flex-shrink: 0;
        display: block;
        height: 9rem;
        padding: 0 9rem;
        border: none;
        margin-left: auto;
        margin-right: 0.2rem;
        position: relative;
        font-family: "Anton", sans-serif;
        font-size: 2rem;
        letter-spacing: 8px;
        text-transform: uppercase;
        color: var(--primary-color);
        background-color: #000;
        outline: none;
    }
</style>
