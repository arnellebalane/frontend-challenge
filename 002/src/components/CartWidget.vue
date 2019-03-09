<template>
    <div class="cart-widget">
        <img src="../assets/cart.png" alt="">
        <span v-if="hasItems">{{count}}</span>
    </div>
</template>

<script>
    export default {
        name: 'CartWidget',

        data() {
            return {
                count: 1
            };
        },

        computed: {
            hasItems() {
                return this.count > 0;
            }
        }
    };
</script>

<style scoped>
    .cart-widget {
        position: relative;
    }

    img {
        display: block;
        width: 2.4rem;
        height: 2.4rem;
    }

    span {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        position: absolute;
        right: -0.4rem;
        bottom: -0.4rem;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        line-height: 1.8rem;
        background-color: var(--primary-color);
    }
</style>
