let count = 1;

const getData = () => {
  console.log("fetching data", count++);
};

const Debouncing = (fun, delay) => {
  let debounceTimer;

  return function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fun();
    }, delay);
  };
};

const betterDebouncingfuntion = Debouncing(getData, 1000);

document.getElementById("Click").addEventListener("click", () => {
  betterDebouncingfuntion();
});

// throttling
let flag = true;

const Throttling = (fun, delay) => {
  if (flag) {
    fun();
    setTimeout(() => {
      flag = true;
    }, delay);
    flag = false;
  }
};

const betterThrottlingfuntion = () => {
  Throttling(getData, 2000);
};

document.getElementById("Click-throttling").addEventListener("click", () => {
  betterThrottlingfuntion();
});
