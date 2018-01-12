<h1 align="center">fsvw</h1>

You often see `vw` units used for font-size, however this breaks important accessibility functionality such as page zoom. However, using JS to dynamically set `font-size` creates undesirable flashes between font sizes.

This module enables you to fluidly scale your `font-size` with `%` instead of `vw` without requiring JS by outputting a series of media queries.

## API

```
var vwesque = require('vwesque')

var size = vwesque({
  min: 767,
  max: 1400,
  unit: 'rem'
})
```