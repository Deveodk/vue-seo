<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
      name: 'seoKeywords',
      mixins: [tagMixin],
      props: {
        content: {
          required: true,
          type: String
        }
      },
      watch: {
        'content': 'setKeywords'
      },
      created () {
        this.setKeywords()
      },
      methods: {
        setKeywords () {
          this.refreshTag('meta', 'name', 'name', 'content', this.content)
        }
      }
    }
</script>
