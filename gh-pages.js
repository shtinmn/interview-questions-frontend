var ghpages = require('gh-pages')

ghpages.publish('docs/.vuepress/dist', function(err) {
  console.log('publish err: ', err)
})
