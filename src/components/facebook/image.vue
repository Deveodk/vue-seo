<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
      name: 'seoFacebookImage',
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
          this.refreshTag('meta', 'property', 'og:image', 'content', this.content)
        }
      }
    }
</script>
