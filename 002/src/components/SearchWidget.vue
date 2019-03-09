<template>
    <div class="search-widget">
        <img src="../assets/search.png" alt="">
        <p>Search</p>
    </div>
</template>

<script>
    export default {
        name: 'SearchWidget'
    };
</script>

<style scoped>
    .search-widget {
        display: flex;
        align-items: center;
    }

    img {
        display: block;
        margin-right: 0.4rem;
    }

    p {
        margin: 0;
        font-weight: 500;
    }
</style>
