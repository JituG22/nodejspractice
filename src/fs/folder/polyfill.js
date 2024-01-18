let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((itm, idx, arr) => {
  console.log(itm, idx);
});
//----------------------------------------------------------------
// Create a polyfill for each

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((itm, idx, arr) => {
  console.log("MyForEach", itm);
});

//----------------------------------------------------------------
// Create a polyfill for array map  functions
let resMap = arr.map((itm, idx, arr) => {
  return itm * 2;
});

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

let resMyMap = arr.myMap((itm, idx, arr) => {
  return itm * 4;
});
console.log("resMyMap", resMyMap);
//----------------------------------------------------------------

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

let myFilterGT4 = arr.myFilter((item, idx, arr) => {
  return item > 4;
});
console.log("myFilterGT4", myFilterGT4);

//----------------------------------------------------------------

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[0];
  }
  return acc;
};
let myReduce = arr.myReduce((acc, calc) => {
  return acc + calc;
});

console.log("myReduce", myReduce);
