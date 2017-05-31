<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
      name: 'seoTwitterImage',
      mixins: [tagMixin],
      props: {
        content: {
          required: true,
          type: String
        }
      },
      watch: {
        'content': 'setImage'
      },
      created () {
        this.setImage()
      },
      methods: {
        setImage () {
          this.refreshTag('meta', 'name', 'twitter:image', 'content', this.content)
        }
      }
    }
</script>
