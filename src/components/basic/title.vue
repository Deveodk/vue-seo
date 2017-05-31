<template>
</template>
<script>
    export default {
        name: 'seoTitle',
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
                document.title = this.content.trim()
            }
        }
    }
</script>