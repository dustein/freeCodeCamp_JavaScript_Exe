//minha solução:
function pairElement(str) {
  let par = []
  let fonte = str.split("")
  console.log(fonte)
  for (let i =0; i<fonte.length; i++) {
    if (fonte[i] === "G") {
      par[i]=["G","C"]
    } else if (fonte[i] === "C") {
      par[i]=["C","G"]
    } else if (fonte[i] === "A") {
      par[i]=["A","T"]
    } else if (fonte[i] === "T") {
      par[i]=["T","A"]
    }
  } return par
}
console.log(pairElement("ATGCG"))

//outra solução: ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

//outra solução:  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}
