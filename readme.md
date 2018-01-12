<h1 align="center">fsvw</h1>

You often see `vw` units used for font-size, however this breaks important accessibility functionality such as page zoom. However, using JS to dynamically set `font-size` creates undesirable flashes between font sizes.

This module enables you to fluidly scale your `font-size` with `%` instead of `vw` without requiring JS by outputting a series of media queries.

```
npm i fsvw
```

## API

```js
var vwesque = require('vwesque')

var size = vwesque({
    fontSize: {
      min: 62.5,
      max: 160
    },
    breakpoints: {
      min: 767,
      max: 1280,
    },
    overflow: true,
    query: getQuery,
    unit: '%',
})
```

## Output

```css
@media (min-width: 767px; max-width: 770px;) { html { font-size: 62% } }
@media (min-width: 770px; max-width: 775px;) { html { font-size: 63% } }
@media (min-width: 775px; max-width: 781px;) { html { font-size: 64% } }
@media (min-width: 781px; max-width: 786px;) { html { font-size: 65% } }
@media (min-width: 786px; max-width: 791px;) { html { font-size: 66% } }
@media (min-width: 791px; max-width: 796px;) { html { font-size: 67% } }
@media (min-width: 796px; max-width: 802px;) { html { font-size: 68% } }
@media (min-width: 802px; max-width: 807px;) { html { font-size: 69% } }
@media (min-width: 807px; max-width: 812px;) { html { font-size: 70% } }
@media (min-width: 812px; max-width: 817px;) { html { font-size: 71% } }
@media (min-width: 817px; max-width: 823px;) { html { font-size: 72% } }
@media (min-width: 823px; max-width: 828px;) { html { font-size: 73% } }
@media (min-width: 828px; max-width: 833px;) { html { font-size: 74% } }
@media (min-width: 833px; max-width: 839px;) { html { font-size: 75% } }
@media (min-width: 839px; max-width: 844px;) { html { font-size: 76% } }
@media (min-width: 844px; max-width: 849px;) { html { font-size: 77% } }
@media (min-width: 849px; max-width: 854px;) { html { font-size: 78% } }
@media (min-width: 854px; max-width: 860px;) { html { font-size: 79% } }
@media (min-width: 860px; max-width: 865px;) { html { font-size: 80% } }
@media (min-width: 865px; max-width: 870px;) { html { font-size: 81% } }
@media (min-width: 870px; max-width: 875px;) { html { font-size: 82% } }
@media (min-width: 875px; max-width: 881px;) { html { font-size: 83% } }
@media (min-width: 881px; max-width: 886px;) { html { font-size: 84% } }
@media (min-width: 886px; max-width: 891px;) { html { font-size: 85% } }
@media (min-width: 891px; max-width: 896px;) { html { font-size: 86% } }
@media (min-width: 896px; max-width: 902px;) { html { font-size: 87% } }
@media (min-width: 902px; max-width: 907px;) { html { font-size: 88% } }
@media (min-width: 907px; max-width: 912px;) { html { font-size: 89% } }
@media (min-width: 912px; max-width: 917px;) { html { font-size: 90% } }
@media (min-width: 917px; max-width: 923px;) { html { font-size: 91% } }
@media (min-width: 923px; max-width: 928px;) { html { font-size: 92% } }
@media (min-width: 928px; max-width: 933px;) { html { font-size: 93% } }
@media (min-width: 933px; max-width: 938px;) { html { font-size: 94% } }
@media (min-width: 938px; max-width: 944px;) { html { font-size: 95% } }
@media (min-width: 944px; max-width: 949px;) { html { font-size: 96% } }
@media (min-width: 949px; max-width: 954px;) { html { font-size: 97% } }
@media (min-width: 954px; max-width: 960px;) { html { font-size: 98% } }
@media (min-width: 960px; max-width: 965px;) { html { font-size: 99% } }
@media (min-width: 965px; max-width: 970px;) { html { font-size: 100% } }
@media (min-width: 970px; max-width: 975px;) { html { font-size: 101% } }
@media (min-width: 975px; max-width: 981px;) { html { font-size: 102% } }
@media (min-width: 981px; max-width: 986px;) { html { font-size: 103% } }
@media (min-width: 986px; max-width: 991px;) { html { font-size: 104% } }
@media (min-width: 991px; max-width: 996px;) { html { font-size: 105% } }
@media (min-width: 996px; max-width: 1002px;) { html { font-size: 106% } }
@media (min-width: 1002px; max-width: 1007px;) { html { font-size: 107% } }
@media (min-width: 1007px; max-width: 1012px;) { html { font-size: 108% } }
@media (min-width: 1012px; max-width: 1017px;) { html { font-size: 109% } }
@media (min-width: 1017px; max-width: 1023px;) { html { font-size: 110% } }
@media (min-width: 1023px; max-width: 1028px;) { html { font-size: 111% } }
@media (min-width: 1028px; max-width: 1033px;) { html { font-size: 112% } }
@media (min-width: 1033px; max-width: 1038px;) { html { font-size: 113% } }
@media (min-width: 1038px; max-width: 1044px;) { html { font-size: 114% } }
@media (min-width: 1044px; max-width: 1049px;) { html { font-size: 115% } }
@media (min-width: 1049px; max-width: 1054px;) { html { font-size: 116% } }
@media (min-width: 1054px; max-width: 1060px;) { html { font-size: 117% } }
@media (min-width: 1060px; max-width: 1065px;) { html { font-size: 118% } }
@media (min-width: 1065px; max-width: 1070px;) { html { font-size: 119% } }
@media (min-width: 1070px; max-width: 1075px;) { html { font-size: 120% } }
@media (min-width: 1075px; max-width: 1081px;) { html { font-size: 121% } }
@media (min-width: 1081px; max-width: 1086px;) { html { font-size: 122% } }
@media (min-width: 1086px; max-width: 1091px;) { html { font-size: 123% } }
@media (min-width: 1091px; max-width: 1096px;) { html { font-size: 124% } }
@media (min-width: 1096px; max-width: 1102px;) { html { font-size: 125% } }
@media (min-width: 1102px; max-width: 1107px;) { html { font-size: 126% } }
@media (min-width: 1107px; max-width: 1112px;) { html { font-size: 127% } }
@media (min-width: 1112px; max-width: 1117px;) { html { font-size: 128% } }
@media (min-width: 1117px; max-width: 1123px;) { html { font-size: 129% } }
@media (min-width: 1123px; max-width: 1128px;) { html { font-size: 130% } }
@media (min-width: 1128px; max-width: 1133px;) { html { font-size: 131% } }
@media (min-width: 1133px; max-width: 1138px;) { html { font-size: 132% } }
@media (min-width: 1138px; max-width: 1144px;) { html { font-size: 133% } }
@media (min-width: 1144px; max-width: 1149px;) { html { font-size: 134% } }
@media (min-width: 1149px; max-width: 1154px;) { html { font-size: 135% } }
@media (min-width: 1154px; max-width: 1159px;) { html { font-size: 136% } }
@media (min-width: 1159px; max-width: 1165px;) { html { font-size: 137% } }
@media (min-width: 1165px; max-width: 1170px;) { html { font-size: 138% } }
@media (min-width: 1170px; max-width: 1175px;) { html { font-size: 139% } }
@media (min-width: 1175px; max-width: 1181px;) { html { font-size: 140% } }
@media (min-width: 1181px; max-width: 1186px;) { html { font-size: 141% } }
@media (min-width: 1186px; max-width: 1191px;) { html { font-size: 142% } }
@media (min-width: 1191px; max-width: 1196px;) { html { font-size: 143% } }
@media (min-width: 1196px; max-width: 1202px;) { html { font-size: 144% } }
@media (min-width: 1202px; max-width: 1207px;) { html { font-size: 145% } }
@media (min-width: 1207px; max-width: 1212px;) { html { font-size: 146% } }
@media (min-width: 1212px; max-width: 1217px;) { html { font-size: 147% } }
@media (min-width: 1217px; max-width: 1223px;) { html { font-size: 148% } }
@media (min-width: 1223px; max-width: 1228px;) { html { font-size: 149% } }
@media (min-width: 1228px; max-width: 1233px;) { html { font-size: 150% } }
@media (min-width: 1233px; max-width: 1238px;) { html { font-size: 151% } }
@media (min-width: 1238px; max-width: 1244px;) { html { font-size: 152% } }
@media (min-width: 1244px; max-width: 1249px;) { html { font-size: 153% } }
@media (min-width: 1249px; max-width: 1254px;) { html { font-size: 154% } }
@media (min-width: 1254px; max-width: 1259px;) { html { font-size: 155% } }
@media (min-width: 1259px; max-width: 1265px;) { html { font-size: 156% } }
@media (min-width: 1265px; max-width: 1270px;) { html { font-size: 157% } }
@media (min-width: 1270px; max-width: 1275px;) { html { font-size: 158% } }
@media (min-width: 1275px; max-width: 1280px;) { html { font-size: 159% } }
```