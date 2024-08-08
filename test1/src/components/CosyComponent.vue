<template>
    <div>
        <h1>Header</h1>
        <slot name="header" :kossie="kossie"></slot>
        <h1>Body</h1>
        <slot></slot>
        <h1>Footer</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: "default I'm minjae"
        }
    },
    data() {
        return {
            kossie: 'coder'
            // name: 'Minjae Da',
        }
    },
    methods: {
        updateName() {
            this.name = 'Minjae lago';
        }
    }
}
</script>

<style scopred>

</style>