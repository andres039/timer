"use strict";
const seconds = process.argv
  .slice(2)
  .map((tobenumber) => +tobenumber * 1000)
  .sort((a, b) => a - b);

let timer = 0;
for (let second of seconds) {
  if (second > 0) {
    timer = second;
    setTimeout(() => {
      process.stdout.write(".");
    }, timer);
  } else {
    continue;
  }
}
