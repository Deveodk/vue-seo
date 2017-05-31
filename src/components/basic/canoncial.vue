<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
        name: 'seoCanonical',
        mixins: [tagMixin],
        props: {
            content: {
                required: true,
                type: String
            }
        },
        watch: {
            'content': 'setCanonical'
        },
        created () {
            this.setCanonical()
        },
        methods: {
            setCanonical () {
                this.refreshTag('link', 'rel', 'canonical', 'href', this.content)
            }
        }
    }
</script>