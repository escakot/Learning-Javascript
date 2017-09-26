//Loaded Dice Exercise
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = -1;
  /* your code here */

  return function() {
    // return list[Math.floor(Math.random() * list.length)];
    if (index == list.length-1) {
      index = -1;
    }
    index++;
    return list[index];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

//Countdown Exercise

var countdownGenerator = function (x) {
  /* your code here */
  let timer = x;

  return function () {
    if (timer > 0) {
      console.log("T-minus " + timer + "...");
    } else if (timer == 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    timer--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

//Stretch
var wrapLog = function(callback, name) {
    return function() {
      let args = Array.from(arguments)
      console.log(`${name}(${args.join(', ')}) => ${callback.apply(callback, arguments)}`)
    }
}

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
