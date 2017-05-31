<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
      name: 'seoTwitterTitle',
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
        setUrl () {
          this.refreshTag('meta', 'name', 'twitter:title', 'content', this.content)
        }
      }
    }
</script>
