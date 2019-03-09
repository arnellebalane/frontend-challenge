<template>
    <div class="base-select">
        <p>{{label}}</p>
    </div>
</template>

<script>
    export default {
        name: 'BaseSelect',

        props: {
            label: {
                type: String,
                required: true
            },
            items: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                open: false
            };
        }
    };
</script>

<style scoped>
    .base-select {
        display: inline-block;
        padding: 0 1.6rem;
        padding-right: 4.8rem;
        border: 2px solid #fff;
        position: relative;
        user-select: none;
        mix-blend-mode: difference;
    }

    .base-select::after {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        border-right: 2px solid var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
        transform: rotate(45deg);
        transform-origin: center center;
    }

    p {
        margin: 0;
        font-family: "Anton", sans-serif;
        font-size: 1.8rem;
        line-height: 5.6rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #fff;
        mix-blend-mode: difference;
    }
</style>
