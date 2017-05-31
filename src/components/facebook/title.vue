<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
        name: 'seoFacebookTitle',
        mixins: [tagMixin],
        props: {
            content: {
                required: true,
                type: String
            }
        },
        watch: {
            'content': 'setTitle'
        },
        created () {
            this.setTitle()
        },
        methods: {
            setTitle () {
                this.refreshTag('meta', 'property', 'og:title', 'content', this.content)
            }
        }
    }
</script>