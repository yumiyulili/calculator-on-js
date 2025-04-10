//получение элементов по id из html
let nmGlobal = document.getElementById("num1")
let nmGlobal2 = document.getElementById("num2")

//получение 1 ключа
let lcS = localStorage.getItem("nm1");
//получение 2 ключа
let lcS2 = localStorage.getItem("nm2");

//lcS получает значение элемента nmGlobal
if (lcS) {
nmGlobal.value = lcS;
} 
//lcS2 получает значение элемента nmGlobal2
if (lcS2) {
nmGlobal2.value = lcS2;
}


function addNumbers() {
  //присваивание переменной num1 значения из nmGlobal
  let num1 = nmGlobal.value;
  //присваивание переменной num2 значения из nmGlobal2
  let num2 = nmGlobal2.value;

  //преобразование num1 в число с плавающей точкой
  num1 = parseFloat(num1);
  //преобразование num2 в число с плавающей точкой
  num2 = parseFloat(num2);

  //проверка если в num1 и num2 было задано любое значение кроме number,
  // уведомление об ошибке и следует функция очистки полей после закрытия уведомления
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
  //получение элемента из html
  const symbol = document.getElementById("symbol").value;

  let result;
  //проверка, если задано значение с названием в html"umn" то происходит умножение num1 на num2
  if (symbol == "umn") {

    result = num1 * num2;

  //проверка, если задано значение с названием в html"plus" то происходит сложение num1 и num2
  } else if (symbol == "plus") {

    result = num1 + num2;

  //если в num2 введено значение 0, уведомление об ошибке,
  //далее после его закрытия выполняется функция очистки полей
  } else if (symbol == "del") {
    if (num2 == 0) {
      alert("error");
      cleanInput()
      return;
    }
   // в остальных случиях происходит деление num1 на num2
    result = num1 / num2;

   //проверка, если задано значение с названием в html"minus" то происходит вычитание num1 и num2
  } else if (symbol == "minus") {

    result = num1 - num2;
    
   // в остальных случаях уведомление об ошибке, после его закрытия выполняется функция очистки полей
  } else {
    alert("error");
    cleanInput()
  }

  //проверка если значение результата undefined происходит его возвращение
  if (result == undefined) {
    return;
  }
  //вывод результата на экран
  document.getElementById("result").innerText = "Result = " + result;
}

//функция очистки полей и кэша, если пользователь нажимает кнопку "clear"
const cleanInput = () => {
  const inputNum1 = document.getElementById("num1")
  inputNum1.value = " "

  const inputNum2 = document.getElementById("num2")
  inputNum2.value = " "
  localStorage.clear()
}
//получение элемента из html по id
let save = document.getElementById("sv")

//выполнение события, при клике запускается функция и происходит проверка
//если значение save равняется on то происходит сохранение значений которые находятся
// в nmGlobal и nmGlobal2
save.addEventListener('click', () => {
if (save.value.toString() == 'on') {
  localStorage.setItem('nm1', nmGlobal.value);
localStorage.setItem('nm2', nmGlobal2.value);
}
  })


