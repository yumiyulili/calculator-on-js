function addNumbers() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let num;
  if (num1.toString() == "NaN") {
    alert("error");
    cleanInput()
    return;
  } else if (num2.toString() == "NaN") {
    alert("error");
    cleanInput()
    return;
  }

  const symbol = document.getElementById("symbol").value;

  let result;

  if (symbol == "umn") {

    result = num1 * num2;

  } else if (symbol == "plus") {

    result = num1 + num2;

  } else if (symbol == "del") {
    if (num2 == 0) {
      alert("error");
      cleanInput()
      return;
    }

    result = num1 / num2;

  } else if (symbol == "minus") {

    result = num1 - num2;
    
  } else {
    alert("error");
    cleanInput()
  }

  if (result == undefined) {
    return;
  }

  document.getElementById("result").innerText = "Result = " + result;
}

const cleanInput = () => {
  const inputNum1 = document.getElementById("num1")
  inputNum1.value = " "

  const inputNum2 = document.getElementById("num2")
  inputNum2.value = " "
}


