<template>
    <div id="app">
        <TheNavbar />
        <ProductPreview />
        <ProductActions />
    </div>
</template>

<script>
    import TheNavbar from './components/TheNavbar.vue';
    import ProductPreview from './components/ProductPreview.vue';
    import ProductActions from './components/ProductActions.vue';

    export default {
        name: 'App',

        components: {
            TheNavbar,
            ProductPreview,
            ProductActions,
        }
    };
</script>

<style>
    :root {
        --primary-color: #f9b50b;
    }

    html {
        font-size: 62.5%;
    }

    body {
        height: 100vh;
        margin: 0;
        font-family: "Quicksand", sans-serif;
        font-size: 1.5rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        background-color: #000;
    }

    a,
    button {
        font: inherit;
        color: inherit;
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
    }

    #app::before {
        --size: 71vmin;

        content: "";
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        position: absolute;
        top: calc(50% - var(--size) / 2);
        left: calc(50% - var(--size) / 2);
        z-index: -1;
        background-color: #fff;
    }

    .product-preview {
        flex-grow: 1;
    }
</style>
