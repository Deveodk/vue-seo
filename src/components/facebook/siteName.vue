<template>
</template>
<script>
    import tagMixin from '../../mixins/tagMixin.js'
    export default {
      name: 'seoFacebookSiteName',
      mixins: [tagMixin],
      props: {
        content: {
          required: true,
          type: String
        }
      },
      watch: {
        'content': 'setSiteName'
      },
      created () {
        this.setSiteName()
      },
      methods: {
        setSiteName () {
          this.refreshTag('meta', 'property', 'og:site_name', 'content', this.content)
        }
      }
    }
</script>
