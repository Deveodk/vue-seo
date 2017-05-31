<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
        name: 'seoTwitterCard',
        mixins: [tagMixin],
        props: {
            content: {
                required: true,
                type: String
            }
        },
        watch: {
            'content': 'setCard'
        },
        created () {
            this.setCard()
        },
        methods: {
            setCard () {
                this.refreshTag('meta', 'name', 'twitter:card', 'content', this.content)
            }
        }
    }
</script>