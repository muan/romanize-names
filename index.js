var data = require('unicode-mandarin-readings')
var surnameSubs = require('./surname-subs.json')
var romanizationSys = require('./romanization-pairs.json')
var removeDiacritics = require('diacritics').remove

module.exports = function (name, system) {
  system = system || "WG"

  var chars = name.split('')
  var surnameLength = chars.length > 3 ? 2 : 1

  var result = chars.map(function (word, i) {
    // Should it be subbed?
    if(i < surnameLength && Object.keys(surnameSubs).indexOf(word) >= 0) {
      word = surnameSubs[word]
    }

    var unicode = "U+" + word.charCodeAt(0).toString(16).toUpperCase()
    return processString(data[unicode], system)
  })

  return formatName(result)
}

// ['a', 'b'] -> 'b a'
// ['a', 'b', 'c'] -> 'b-c a'
// ['a', 'b', 'c', 'd'] -> 'c-d a b'
function formatName (arr) {
  if (arr.length === 2) {
    return arr.join(' ')
  } else if (arr.length === 3) {
    return arr[1] + "-" + arr[2] + " " + arr[0]
  } else if (arr.length === 4) {
    return arr[2] + "-" + arr[3] + " " + arr[0] + " " + arr[1]
  }
}

function processString (str, system) {
  // romanization system
  str = romanizationSys[removeDiacritics(str).toUpperCase()][system]

  // titleCase
  str = str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase()
  return str
}
