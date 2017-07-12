# Romanize names [![Travis CI](https://travis-ci.org/muan/romanize-names.svg?branch=master)](https://travis-ci.org/muan/romanize-names) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

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
  - `TONGYONG` https://en.wikipedia.org/wiki/Tongyong_Pinyin
  - `HANYU` https://en.wikipedia.org/wiki/Pinyin

## Examples

```javascript
romanize('張懸')
> Hsuan Chang

romanize('張懸', 'MPS-II')
> Shiuan Jang

romanize('張懸', 'TONGYONG')
> Syuan Jhang

romanize('張懸', 'HANYU')
> Xuan Zhang
```

```javascript
romanize('秋木安')
> Mu-An Chiu

romanize('秋木安', 'MPS-II')
> Mu-An Chiou

romanize('秋木安', 'TONGYONG')
> Mu-An Ciou

romanize('秋木安', 'HANYU')
> Mu-An Qiu
```

```javascript
romanize('范姜峻宏')
> Chun-Hung Fan-Chiang

romanize('范姜峻宏', 'MPS-II')
> Jiun-Hung Fan-Jiang

romanize('范姜峻宏', 'TONGYONG')
> Jyun-Hong Fan-Jiang

romanize('范姜峻宏', 'HANYU')
> Jun-Hong Fan-Jiang
```

## Data Sources

- Unicode Character Database – Unihan (via [unicode-mandarin-readings](https://github.com/muan/unicode-mandarin-readings))
- [Bureau of Consular Affairs (Taiwan)](http://www.boca.gov.tw/ct.asp?xItem=5609&ctNode=677&mp=1)
