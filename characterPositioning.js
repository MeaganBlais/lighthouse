var input = process.argv[2]
var result = {}
// placeholder for output
for (var i = 0; i < input.length; i++) {
  var char = input[i]
  // recording each character of the input string
  if (result[char] === undefined) {
    result[char] = [i]
    // since 1st result is undefined, this will link the index to value of key(character)
  } else {
    var existingResult = result[char]
    existingResult.push(i)
    // this will 'push'(compile) the values(index) with matching keys
  }

// need to ignore spaces ... ? ... str.match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)  --- see: http://stackoverflow.com/questions/16261635/javascript-split-string-by-space-but-ignore-space-in-quotes-notice-not-to-spli

}

console.log(result)