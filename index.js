var data = require('unicode-mandarin-readings')
var surnameSubs = require('./surname-subs.json')
var romanizationSys = require('./romanization-pairs.json')
var removeDiacritics = require('diacritics').remove

module.exports = function (name, system) {
  system = system || "WG"

  var result = name.split('').map(function (word) {

    // Should it be subbed?
    if(Object.keys(surnameSubs).indexOf(word) >= 0) {
      word = surnameSubs[word]
    }

    var unicode = "U+" + word.charCodeAt(0).toString(16).toUpperCase()
    return processString(data[unicode], system)
  })

  return formatName(result)
}

// turning ['a', 'b', 'c'] into 'B-C A' or ['a', 'b'] into 'B A'
function formatName (arr) {
  if (arr.length === 2) {
    return arr.join(' ')
  } else if (arr.length === 3) {
    return arr[1] + "-" + arr[2] + " " + arr[0]
  }
}

function processString (str, system) {
  // romanization system
  str = romanizationSys[removeDiacritics(str).toUpperCase()][system]

  // titleCase
  str = str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase()
  return str
}
