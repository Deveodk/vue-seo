<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
        name: 'seoFacebookDescription',
        mixins: [tagMixin],
        props: {
            content: {
                required: true,
                type: String
            }
        },
        watch: {
            'content': 'setDescription'
        },
        created () {
            this.setDescription()
        },
        methods: {
            setDescription () {
                this.refreshTag('meta', 'property', 'og:description', 'content', this.content)
            }
        }
    }
</script>