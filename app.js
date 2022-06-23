// the odin project - calculator
let num1 = 0;
let tempNum1Array = [];
let num2 = 0;
let tempNum2Array = [];
let savedFirstValue = 0;
let operator = "";
let tempOperatorArray = [];

const add = (a, b) => {
  let addValue = a + b;
  const calcDisplay = document.querySelector("#display");
  calcDisplay.textContent = addValue;
};

const substract = (a, b) => {
  let substractValue = a - b;
  const calcDisplay = document.querySelector("#display");
  calcDisplay.textContent = substractValue;
};

const multiply = (a, b) => {
  let multiplyValue = a * b;
  const calcDisplay = document.querySelector("#display");
  calcDisplay.textContent = multiplyValue;
};

const divide = (a, b) => {
  let divideValue = a / b;

  // checkear error si divide por 0
  if (divideValue === "Infinity") {
    return alert("Error! You cannot divide by zero!");
  } else {
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = dividedValue;
  }
};

// operate function
const operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      return divide(a, b);
    default:
      return null;
  }
};

// main function
function runCalculator() {
  function getNumberClicked() {
    const operandButtons = document.querySelectorAll(".digit");
    operandButtons.forEach((button) => {
      button.addEventListener("click", () => {
        savedFirstValue = button.getAttribute("value");
        console.log(savedFirstValue);
        const calcDisplay = document.querySelector("#display");

        // append to num1 if multiple numbers are pressed and display out
        if (operator == "") {
          tempNum1Array.push(savedFirstValue);
          console.log("show me the array: ", tempNum1Array);
          num1 = tempNum1Array.join("");
          console.log(`saved first value is: ${num1}`);
          calcDisplay.textContent = num1;
        } else {
          // append to num2 if multiple numbers are pressed and display out
          tempNum2Array.push(savedFirstValue);
          console.log(`show me the array2: ${tempNum2Array}`);
          num2 = tempNum2Array.join("");
          console.log(`num2 is: ${num2}`);
          calcDisplay.textContent = num2;
        }
      });
    });
  }

  function getOperatorSelection() {
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("hit me operator!");
        operator = button.getAttribute("value");
        console.log(operator);
        tempOperatorArray.push(operator);
        console.log(
          `store temp operator in array for string calcs: ${tempOperatorArray}`
        );

        // enable the decimal button if disabled from previous click
        document.getElementById("decimal").disabled = false;
        console.log(`decimal button should be ENABLED now!`);

        // checks to see if a multi-operand string exists // avoid insertion of multiple operator before clicking =
        if (tempNum1Array != "" && tempNum2Array != "") {
          const calcDisplay = document.querySelector("#display");
          num1 = tempNum1Array.join("");
          num2 = tempNum2Array.join("");
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);

          let tempOperator =
            tempOperatorArray[tempOperatorArray.length - 2].toString();
          console.log(`Running STRING calculation now!`);
          operate(tempOperator, num1, num2);
          let tempStringValue = calcDisplay.textContent;
          console.log(`temp string value: ${tempStringValue}`);

          console.log(`clearing out the arrays and nums now!`);
          tempNum1Array = [];
          tempNum2Array = [];
          num1 = 0;
          num2 = 0;

          tempNum1Array.push(tempStringValue);
          num1 = tempNum1Array.join("");
          console.log(`pushed string value to array 1: ${tempNum1Array}`);
        }
      });
    });
  }

  function runCalculation() {
    const equalsButton = document.querySelector(".equals");
    equalsButton.addEventListener("click", () => {
      console.log(`time to run the math! ${num1} ${num2} ${operator}`);
      const calcDisplay = document.querySelector("#display");
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      operate(operator, num1, num2);
    });
  }

  // DOM Clear Button
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", () => {
    location.reload();
  });

  // DOM Decimal Button
  const decimalButton = document.querySelector(".decimal");
  decimalButton.addEventListener("click", () => {
    console.log("decimal pressed");
    let decimalButton = ".";
    const calcDisplay = document.querySelector("#display");

    // append 'decimal' to numarray1 and display out
    if (operator == "") {
      const calcDisplay = document.querySelector("#display");
      console.log(`decimal button registered here ${decimalButton}`);
      tempNum1Array.push(decimalButton);
      console.log(`append the array with decimal ${tempNum1Array}`);
      num1 = tempNum1Array.join("");
      calcDisplay.textContent = num1;
      document.getElementById("decimal").disabled = true;
      console.log(`num1 decimal button should be disabled now`);
    } else {
      // append 'decimal' to numArray2 and display out
      const calcDisplay = document.querySelector("#display");
      console.log(`decimal button registered here ${decimalButton}`);
      tempNum2Array.push(decimalButton);
      console.log(`append the array with decimal ${tempNum2Array}`);
      num2 = tempNum2Array.join("");
      calcDisplay.textContent = num2;
      document.getElementById("decimal").disabled = true;
      console.log(`num2 decimal button should be disabled now`);
    }
  });

  //llamar las sub-functions
  getNumberClicked();
  getOperatorSelection();
  runCalculation();
}

// llamar la funcion main
runCalculator();
