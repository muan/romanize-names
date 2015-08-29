# Romanize names [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Romanizing Chinese names for Taiwan. [It's a :poop: show.](https://en.wikipedia.org/wiki/Chinese_language_romanization_in_Taiwan)

## Install

```
npm install romanize-names
```

## Usage

```javascript
var romanize = require('romanize-names')
romanize(name_in_zhTW, system)
```

`system` String
  - `WG` (default) https://en.wikipedia.org/wiki/Wade%E2%80%93Giles
  - `MPS-II` https://en.wikipedia.org/wiki/Mandarin_Phonetic_Symbols_II
  - `HANYU` https://en.wikipedia.org/wiki/Tongyong_Pinyin

## Examples

```javascript
console.log(romanize('張懸'))
> Hsuan Chang

console.log(romanize('張懸', 'MPS-II'))
> Shiuan Jang

console.log(romanize('張懸', 'HANYU'))
> Syuan Jhang
```

```javascript
console.log(romanize('秋木安'))
> Mu-An Chiu

console.log(romanize('秋木安', 'MPS-II'))
> Mu-An Chiou

console.log(romanize('秋木安', 'HANYU'))
> Mu-An Ciou
```

```javascript
console.log(romanize('范姜峻宏'))
> Chun-Hung Fan Chiang

console.log(romanize('范姜峻宏', 'MPS-II'))
> Jiun-Hung Fan Jiang

console.log(romanize('范姜峻宏', 'HANYU'))
> Jyun-Hong Fan Jiang
```

## Data Sources

- Unicode Character Database (via unicode-mandarin-readings)
- [Bureau of Consular Affairs (Taiwan)](http://www.boca.gov.tw/ct.asp?xItem=5609&ctNode=677&mp=1)
