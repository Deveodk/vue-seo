<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
      name: 'seoTwitterUrl',
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
          this.refreshTag('meta', 'name', 'twitter:url', 'content', this.content)
        }
      }
    }
</script>
