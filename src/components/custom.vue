<template>
</template>
<script>
    import tagMixin from '../mixins/tagMixin.js'
    export default {
        name: 'seoCustomTag',
        mixins: [tagMixin],
        props: {
            contentName: {
                required: true,
                type: String
            },
            content: {
                required: true,
                type: String
            },
            tag: {
                required: true,
                type: String
            },
            attrName: {
                required: true,
                type: String
            },
            attrValue: {
                required: true,
                type: String
            }
        },
        watch: {
            'content': 'setTag'
        },
        created () {
            this.setTag()
        },
        methods: {
            setTag () {
                this.refreshTag(this.tag, this.attrName, this.attrValue, this.contentName, this.content)
            }
        }
    }
</script>