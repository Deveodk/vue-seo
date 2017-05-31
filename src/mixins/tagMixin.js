export default {
  methods: {
    refreshTag (tag, attrName, attr, valueName, value) {
      let tags = document.getElementsByTagName(tag)
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].getAttribute(attrName) === attr) {
          tags[i].setAttribute(valueName, value)
          return
        }
      }
      tags = document.createElement(tag)
      tags.setAttribute(attrName, attr)
      tags.setAttribute(valueName, value)
      document.head.appendChild(tags)
    }
  }
}
