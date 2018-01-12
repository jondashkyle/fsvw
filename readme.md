<h1 align="center">vwesque</h1>

Accessible `font-size` scaling

## Usage

Scale your `font-size` without using `%` instead of `vw` but without JS or whatever


## API

```
var vwesque = require('vwesque')

var size = vwesque({
  min: 767,
  max: 1400,
  unit: 'rem'
})
```