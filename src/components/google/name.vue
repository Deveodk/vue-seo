<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
        name: 'seoGoogleName',
        mixins: [tagMixin],
        props: {
            content: {
                required: true,
                type: String
            }
        },
        watch: {
            'content': 'setName'
        },
        created () {
            this.setName()
        },
        methods: {
            setName () {
                this.refreshTag('meta', 'itemprop', 'name', 'content', this.content)
            }
        }
    }
</script>