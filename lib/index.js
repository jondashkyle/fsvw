var xtend = require('xtend')

module.exports = fsvw

function fsvw (opts) {
  var options = xtend({
    fontSize: {
      min: 62.5,
      max: 160
    },
    breakpoints: {
      min: 767,
      max: 1280,
    },
    query: getQuery,
    unit: '%',
    breaks: false,
    overflow: true
  }, opts)

  var result = [ ]
  var diff = options.breakpoints.max - options.breakpoints.min

  return Array(diff)
    .fill(null)
    .reduce(function (result, num, i) {
      var query = {
        min: options.breakpoints.min + i,
        max: options.breakpoints.min + i + 1,
        size: Math.floor((i / (options.breakpoints.max - options.breakpoints.min)) * (options.fontSize.max - options.fontSize.min) + options.fontSize.min)
      }

      var last = result[result.length - 1]

      // compare this size against the last
      // and simply increase max size of
      // last media query if so
      if (last && last.size === query.size) {
        last.max = query.max
      } else {
        result.push(query)
      }

      return result
    }, [ ])
    .map(function (query, i, arr) {
      // overflow
      if (options.overflow) {
        if (i === 0) delete query.min
        if (i === arr.length - 1) delete query.max
      }
      // create the query
      return options.query(query.min, query.max, query.size)
    })
    .join(options.breaks ? '\n' : ' ')
}

function getQuery (min, max, size) {
  return `@media (${typeof min !== 'undefined' ? `min-width: ${min}px;` : ''} ${typeof max !== 'undefined' ? `max-width: ${max}px;` : ''}) { html { font-size: ${size}% } }`
}
