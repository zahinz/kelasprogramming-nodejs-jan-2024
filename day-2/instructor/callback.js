console.log("Hello, World!");

// callback pattern
function add(a, b) {
  const result = a + b;
  console.log(a, b);
  console.log(result);
  return result;
}

function mathCallback(callback) {
  callback();
}

mathCallback(function () {
  console.log(4 * 2);
});
