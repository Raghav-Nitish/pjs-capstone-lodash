const _ = {
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },
  inRange(number, lower, upper){
    // First set of conditionals
    if (upper === undefined){
      upper = lower
      lower = 0
    }
    else if (lower > upper) {
      const temp = lower
      lower = upper
      upper = temp
    }

    // Second set of conditionals
    if (number < lower){
      return false
    }
    else if (number >= upper){
      return false
    }
    else if (number > lower && number < upper){
      return true
    }
  },
  words(inputString){
    inputString += " "
    let array = []
    let tempString = ""
    let i = 0
    while (i < inputString.length){
      if (inputString[i] != " "){
        tempString += inputString[i]
      }
      else if (inputString[i] === " "){
        array.push(tempString)
        tempString = ""
      }
      i++
    }
    return array
  },
  pad(string, length){
    let numberOfSpaces = length - string.length
    console.log(numberOfSpaces)
    let numberOfSpacesToAddEachSide = numberOfSpaces / 2
    //If length = string length
    if (numberOfSpaces <= 0){
      return string
    }

    // If length not equal to string length
    else if (numberOfSpaces > 0){
      if (Number.isInteger(numberOfSpacesToAddEachSide) === true){
        let i = 0
        while (i < numberOfSpacesToAddEachSide){
          string = " " + string + " "
          i++
        }
        return string
    	}
    	else if (Number.isInteger(numberOfSpacesToAddEachSide) === false){
      	numberOfSpacesToAddEachSide -= 1
      	let j = 0
      	while (j < numberOfSpacesToAddEachSide){
        	string = " " + string + " "
        	j++
      	}
      	return string + " "
      }
  }
},
  has(object, key){
    if (object[key]){
      return true
    }
    else{
      return false
    }
  },
  invert(obj){
    for (let key in obj){
      let temp = key
      key = obj[key]
      obj[key] = temp
      delete obj[temp]
    }
    return obj
  },
  findKey(obj, predicate){
    for (let key in obj){
      if (predicate(obj[key]) === true){
        return key
        break
      }
    }
    return undefined
  },
  drop(array, number){
    if (number){
      for (let i = 0; i < number; i++){
        array.shift()
      }
    }
    else{
      array.shift()
    }
    return array
  },
  dropWhile(array, predicate){
    copyArray = array
    for (let i = 0; i < array.length; i++){
      returnValue = predicate(array[i], i, array)
      if (returnValue === true){
        copyArray.shift()
      }
    }
    return copyArray
  },
  chunk(array, size){
    let new_array = []
    let sub_array = []
    for (let i = 0; i < array.length; i++){
      while (sub_array.length < size){
        sub_array.push(array[i])
        break
      }
      if (sub_array.length === size){
        new_array.push(sub_array)
        sub_array = []
      }
      else if (i === array.length - 1 && sub_array.length != size){
        new_array.push(sub_array)
      }
    }
    return new_array
  }
};


// Do not write or modify code below this line.
module.exports = _;
