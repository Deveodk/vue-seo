<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
        name: 'seoFacebookUrl',
        mixins: [tagMixin],
        props: {
            content: {
                required: true,
                type: String
            }
        },
        watch: {
            'content': 'setUrl'
        },
        created () {
            this.setUrl()
        },
        methods: {
            setUrl () {
                this.refreshTag('meta', 'property', 'og:url', 'content', this.content)
            }
        }
    }
</script>