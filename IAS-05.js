let frase = "Spin ouNot spin"
function converte(str) {
  return str
  .split(/\s|_|(?=[A-Z])/)
  .join("-")
  .toLowerCase()
}
console.log(converte(frase))
//Regex: a whitespace character [\s] is encountered; underscore character [_] is encountered; or is followed by an uppercase letter [(?=[A-Z])]

//outra solução:
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

//outra solução:
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

