# Looping Code Notes

- Usng loops are useful, because they reduce redundancy in code!
- Most loops stem from certain types, like "for", "while" or "if" loops

### Both of the following functions used below tend to be for functional expressions!

map() : used to do something tp each item i na collegtion and create a new collection containing the changed items

filter() : used to test each item in a collection and create a new collection containing ONLY items that match

```js
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
```

- the code above alculates squares for the numbers from 1 to 9, and writes out the result. The core of the code is the for loop that performs the calculation.

Other topics
- Looping through a collection
- Reducing redundancy in code using loops
- Exitingloops with break function
- Skipping interations with continue statement
- while loops

