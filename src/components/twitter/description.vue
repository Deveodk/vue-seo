<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
        name: 'seoTwitterDescription',
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
                this.refreshTag('meta', 'name', 'twitter:description', 'content', this.content)
            }
        }
    }
</script>