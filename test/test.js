var romanize = require('../index.js')
var test = require('tape')
var systems = ['WG', 'MPS-II', 'TONGYONG', 'HANYU']

test('2-char name', function (t) {
  var results = ['Hsuan Chang', 'Shiuan Jang', 'Syuan Jhang', 'Xuan Zhang']

  systems.forEach(function (sys, i) {
    var name = romanize('張懸', sys)
    t.equal(results[i], name, 'translated in ' + sys + ' correctly.')
  })

  t.end()
})

test('3-char name', function (t) {
  var results = ['Mu-An Chiu', 'Mu-An Chiou', 'Mu-An Ciou', 'Mu-An Qiu']

  systems.forEach(function (sys, i) {
    var name = romanize('秋木安', sys)
    t.equal(results[i], name, 'translated in ' + sys + ' correctly.')
  })

  t.end()
})

test('4-char name', function (t) {
  var results = ['Chun-Hung Fan-Chiang', 'Jiun-Hung Fan-Jiang', 'Jyun-Hong Fan-Jiang', 'Jun-Hong Fan-Jiang']

  systems.forEach(function (sys, i) {
    var name = romanize('范姜峻宏', sys)
    t.equal(results[i], name, 'translated in ' + sys + ' correctly.')
  })

  t.end()
})

test('edge cases', function (t) {
  var nameWithSpaces = romanize('姓  空白')
  t.equal(nameWithSpaces, 'Kung-Pai Hsing', 'name translated corrently disregarding spaces')

  var heteronymSurname = romanize('解魯')
  t.equal(heteronymSurname, 'Lu Hsieh', 'heteronym surname has the correct pronunciation')

  t.end()
})

test('sad paths', function (t) {
  t.throws(function () {
    romanize('cool english')
  }, /Input contains non-Chinese characters/, 'non-Chinese input triggers an exception')

  t.end()
})
