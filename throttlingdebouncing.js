const getData = (ex) => {
  console.log("fetching data", ex.name + " ( " + ex.id + " ) ");
};

const Debouncing = (fun, delay) => {
  let debounceTimer;

  return function (args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fun.apply(this, [args]);
    }, delay);
  };
};
let args = { name: "xyz", id: "1234578" };
const betterDebouncingfuntion = Debouncing(getData, 1000);

document.getElementById("Click").addEventListener("click", () => {
  betterDebouncingfuntion(args);
});

// throttling

const Throttling = (fun, delay) => {
  let flag = true;
  return function () {
    if (flag) {
      fun.apply(this,[arg]);
      setTimeout(() => {
        flag = true;
      }, delay);
      flag = false;
    }
  };
};
let arg = { name: "xyz", id: "1234578" };
const betterThrottlingfuntion = Throttling(getData, 2000);

document.getElementById("Click-throttling").addEventListener("click", () => {
  betterThrottlingfuntion(args);
});
