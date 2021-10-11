const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tejangandhi/OneDrive - umd.edu/Personal Projects and descriptions/Portfolio Website/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tejangandhi/OneDrive - umd.edu/Personal Projects and descriptions/Portfolio Website/src/pages/index.js")))
}

