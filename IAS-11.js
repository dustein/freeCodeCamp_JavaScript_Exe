function convertHTML(str) {
  var temp = str.split("")
  // como são poucos elementos, podemos usar um switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;"
        break
      case "&":
        temp[i] = "&amp;"
        break
      case ">":
        temp[i] = "&gt;"
        break
      case '"':
        temp[i] = "&quot;"
        break
      case "'":
        temp[i] = "&apos;"
        break
    }
  }

  temp = temp.join("")
  return temp
}

console.log(convertHTML("Dolce & Gabbana"))

// outra solução: :::::::::::::::::::
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match])
}

// outra solução: :::::::::::::::::::
function convertHTML(str) {
// Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("")
}

