# Calculator

A clean, responsive web calculator built from scratch using HTML, CSS, and vanilla JavaScript. This project focuses on manual state management, event delegation, and edge-case handling without relying on `eval()`.

## Live Link

[View Deployed Project](https://induvarman.github.io/calculator/index.html)

---

## Features and Manual

* **Operations:** Handles addition, subtraction, multiplication, and division.
* **Backspace:** Removes the last entered digit or operator and keeps background memory in sync.
* **All Clear:** Completely resets the calculator state.
* **Decimal Guard:** Prevents multiple consecutive decimals in a single number.
* **Zero Division Protection:** Explicitly catches and handles errors when dividing by zero.
* **Event Delegation:** Uses a single optimized event listener on the keyboard container.