const urlDecode = function(text) {
  // Put your solution here

  const result = {};

  // Separate the key-value pairs

  const urlArray = text.split("&");

  // Separate the keys and values into sub-arrays
  
  urlArray.forEach(function(item, index, array) {
    array[index] = item.split("=");
  }); 

  // Function to remove percent encoding

  const percentDecode = function(string) {
    string = string.split("%20").join(" ");
    return string;
  }

  // Loop to create the object

  urlArray.forEach(function(item){
    result[percentDecode(item[0])] = percentDecode(item[1]);
  });

  return result;
};

// Tests

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);