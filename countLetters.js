var input = process.argv[2]
var result = {}
// placeholder for output
for (var i = 0; i < input.length; i++) {
  var char = input[i]
  // this will seperate the string into individual characters
  if (result[char] === undefined) {
    result[char] =1
  } else {
    result[char] = result[char] + 1
  }
  // this will ensure that the key is recognized and does not return NaN due to being undefined
}

console.log(result)












