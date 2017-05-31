<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
      name: 'seoFacebookSeeAlso',
      mixins: [tagMixin],
      props: {
        content: {
          required: true,
          type: String
        }
      },
      watch: {
        'content': 'setSeeAlso'
      },
      created () {
        this.setSeeAlso()
      },
      methods: {
        setSeeAlso () {
          this.refreshTag('meta', 'property', 'og:see_also', 'content', this.content)
        }
      }
    }
</script>
