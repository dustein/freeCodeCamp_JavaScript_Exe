function whatIsInAName(collection, source) {
 var testarKey = Object.keys(source);
 
	return collection.filter(function(obj) {
    
		for (var i = 0; i < testarKey.length; i++) {
      
			if (
        !obj.hasOwnProperty(testarKey[i]) ||
        obj[testarKey[i]] !== source[testarKey[i]]
      ) {
        return false;
      }
    
		}
    return true;
  });
}
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

//outra solução:
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

//outra solução:
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}
