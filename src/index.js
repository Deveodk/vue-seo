import seoTitle from './components/basic/title.vue'
import seoDescription from './components/basic/description.vue'
import seoAuthor from './components/basic/author.vue'
import seoKeywords from './components/basic/keywords.vue'
import seoCanonical from './components/basic/canoncial.vue'
import seoCustom from './components/custom.vue'
import seoFacebookTitle from './components/facebook/title.vue'
import seoFacebookDescription from './components/facebook/description.vue'
import seoFacebookSiteName from './components/facebook/siteName.vue'
import seoFacebookImage from './components/facebook/image.vue'
import seoFacebookSeeAlso from './components/facebook/seeAlso.vue'
import seoFacebookUrl from './components/facebook/url.vue'
import seoGoogleName from './components/google/name.vue'
import seoGoogleDescription from './components/google/description.vue'
import seoGoogleImage from './components/google/image.vue'
import seoTwitterTitle from './components/twitter/title.vue'
import seoTwitterDescription from './components/twitter/description.vue'
import seoTwitterCard from './components/twitter/card.vue'
import seoTwitterImage from './components/twitter/image.vue'
import seoTwitterUrl from './components/twitter/url.vue'

function plugin (Vue, options = {}) {

    Vue.component('seo-title', seoTitle)
    Vue.component('seo-description', seoDescription)
    Vue.component('seo-author', seoAuthor)
    Vue.component('seo-keywords', seoKeywords)
    Vue.component('seo-canonical', seoCanonical)

    // Open graph
    Vue.component('seo-og-title', seoFacebookTitle)
    Vue.component('seo-og-description', seoFacebookDescription)
    Vue.component('seo-og-site-name', seoFacebookSiteName)
    Vue.component('seo-og-image', seoFacebookImage)
    Vue.component('seo-og-see-also', seoFacebookSeeAlso)
    Vue.component('seo-og-url', seoFacebookUrl)

    // Google +
    Vue.component('seo-google-name', seoGoogleName)
    Vue.component('seo-google-description', seoGoogleDescription)
    Vue.component('seo-google-image', seoGoogleImage)

    // Twitter
    Vue.component('seo-twitter-title', seoTwitterTitle)
    Vue.component('seo-twitter-description', seoTwitterDescription)
    Vue.component('seo-twitter-card', seoTwitterCard)
    Vue.component('seo-twitter-image', seoTwitterImage)
    Vue.component('seo-twitter-url', seoTwitterUrl)

    // Custom tags
    Vue.component('seo-custom', seoCustom)

}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  version,
    seoTitle,
    seoCustom,
    seoCanonical,
    seoDescription,
    seoAuthor,
    seoFacebookDescription,
    seoFacebookImage,
    seoFacebookSeeAlso,
    seoFacebookSiteName,
    seoFacebookTitle,
    seoFacebookUrl,
    seoGoogleDescription,
    seoGoogleImage,
    seoGoogleName,
    seoTwitterCard,
    seoTwitterDescription,
    seoTwitterImage,
    seoTwitterTitle,
    seoTwitterUrl
}
