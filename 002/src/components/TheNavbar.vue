<template>
    <div class="the-navbar">
        <img src="../assets/logo.png" alt="">
        <nav>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Accessories</a>
        </nav>

        <SearchWidget />
        <CartWidget />
        <MenuWidget />
    </div>
</template>

<script>
    import SearchWidget from './SearchWidget.vue';
    import CartWidget from './CartWidget.vue';
    import MenuWidget from './MenuWidget.vue';

    export default {
        name: 'TheNavbar',

        components: {
            SearchWidget,
            CartWidget,
            MenuWidget
        }
    };
</script>

<style scoped>
    .the-navbar {
        display: flex;
        align-items: center;
        padding: 5rem;
    }

    img {
        display: block;
        width: 7.5rem;
        margin: 0 3rem;
        mix-blend-mode: difference;
    }

    nav {
        margin-right: auto;
        font-weight: 500;
    }

    nav a {
        display: inline-block;
        margin: 0 3rem;
        text-decoration: none;
        color: #fff;
        mix-blend-mode: difference;
    }

    .search-widget {
        color: #fff;
        mix-blend-mode: difference;
    }

    .cart-widget,
    .menu-widget {
        margin-left: 8rem;
        color: #fff;
        mix-blend-mode: difference;
    }
</style>
