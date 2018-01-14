<h1 align="center">fsvw</h1>

You often see `vw` units used for font-size, however this breaks important accessibility functionality such as page zoom. However, using JS to dynamically set `font-size` creates undesirable flashes between font sizes.

This module enables you to fluidly scale your `font-size` with `%` instead of `vw` without requiring JS by outputting a series of media queries.

```
npm i fsvw
```

### NOTE

Turns out there is a much simpler css-only method of accomplishing a very similar result. Shouts out to [@kidneb for this one](https://twitter.com/kidneb/status/952172044032110592).

```css
html { font-size: calc(2vw + 56.50%); }
```

## API

```js
var fsvw = require('fsvw')

var size = fsvw({
  breakpoints: {
    min: 767,
    max: 1280,
  },
  fontSize: 62.5,
  unit: '%',
  overflow: true
})
```

#### `.breakpoints`

An object containing the dimension range for scaling. Properties are `min` and `max` and values must be `int`.

#### `.fontSize`

The base size at the `min` breakpoint.

#### `.fontSizeMax`

The base size at the `max` breakpoint, used for custom non-linear scaling.

#### `.unit`

The `font-size` unit, defaulting to `%`.

#### `.overflow`

If you’d like your min/max size to carry over past the breakpoint. Defaults to `true`.

## Output

```css
@media (max-width: 774px) { html { font-size: 62% } }
@media (min-width: 774px) and (max-width: 786px) { html { font-size: 63% } }
@media (min-width: 786px) and (max-width: 798px) { html { font-size: 64% } }
@media (min-width: 798px) and (max-width: 810px) { html { font-size: 65% } }
@media (min-width: 810px) and (max-width: 823px) { html { font-size: 66% } }
@media (min-width: 823px) and (max-width: 835px) { html { font-size: 67% } }
@media (min-width: 835px) and (max-width: 847px) { html { font-size: 68% } }
@media (min-width: 847px) and (max-width: 860px) { html { font-size: 69% } }
@media (min-width: 860px) and (max-width: 872px) { html { font-size: 70% } }
@media (min-width: 872px) and (max-width: 884px) { html { font-size: 71% } }
@media (min-width: 884px) and (max-width: 896px) { html { font-size: 72% } }
@media (min-width: 896px) and (max-width: 909px) { html { font-size: 73% } }
@media (min-width: 909px) and (max-width: 921px) { html { font-size: 74% } }
@media (min-width: 921px) and (max-width: 933px) { html { font-size: 75% } }
@media (min-width: 933px) and (max-width: 945px) { html { font-size: 76% } }
@media (min-width: 945px) and (max-width: 958px) { html { font-size: 77% } }
@media (min-width: 958px) and (max-width: 970px) { html { font-size: 78% } }
@media (min-width: 970px) and (max-width: 982px) { html { font-size: 79% } }
@media (min-width: 982px) and (max-width: 995px) { html { font-size: 80% } }
@media (min-width: 995px) and (max-width: 1007px) { html { font-size: 81% } }
@media (min-width: 1007px) and (max-width: 1019px) { html { font-size: 82% } }
@media (min-width: 1019px) and (max-width: 1031px) { html { font-size: 83% } }
@media (min-width: 1031px) and (max-width: 1044px) { html { font-size: 84% } }
@media (min-width: 1044px) and (max-width: 1056px) { html { font-size: 85% } }
@media (min-width: 1056px) and (max-width: 1068px) { html { font-size: 86% } }
@media (min-width: 1068px) and (max-width: 1080px) { html { font-size: 87% } }
@media (min-width: 1080px) and (max-width: 1093px) { html { font-size: 88% } }
@media (min-width: 1093px) and (max-width: 1105px) { html { font-size: 89% } }
@media (min-width: 1105px) and (max-width: 1117px) { html { font-size: 90% } }
@media (min-width: 1117px) and (max-width: 1130px) { html { font-size: 91% } }
@media (min-width: 1130px) and (max-width: 1142px) { html { font-size: 92% } }
@media (min-width: 1142px) and (max-width: 1154px) { html { font-size: 93% } }
@media (min-width: 1154px) and (max-width: 1166px) { html { font-size: 94% } }
@media (min-width: 1166px) and (max-width: 1179px) { html { font-size: 95% } }
@media (min-width: 1179px) and (max-width: 1191px) { html { font-size: 96% } }
@media (min-width: 1191px) and (max-width: 1203px) { html { font-size: 97% } }
@media (min-width: 1203px) and (max-width: 1215px) { html { font-size: 98% } }
@media (min-width: 1215px) and (max-width: 1228px) { html { font-size: 99% } }
@media (min-width: 1228px) and (max-width: 1240px) { html { font-size: 100% } }
@media (min-width: 1240px) and (max-width: 1252px) { html { font-size: 101% } }
@media (min-width: 1252px) and (max-width: 1265px) { html { font-size: 102% } }
@media (min-width: 1265px) and (max-width: 1277px) { html { font-size: 103% } }
@media (min-width: 1277px) { html { font-size: 104% } }

```