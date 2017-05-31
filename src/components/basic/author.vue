<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
        name: 'seoAuthor',
        mixins: [tagMixin],
        props: {
            content: {
                required: true,
                type: String
            }
        },
        watch: {
            'content': 'setAuthor'
        },
        created () {
            this.setAuthor()
        },
        methods: {
            setAuthor () {
                this.refreshTag('link', 'rel', 'author', 'href', this.content)
            }
        }
    }
</script>