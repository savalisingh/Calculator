function calci() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;
  let result;
  switch (operator) {
    case "+":
      result = num1+num2;
      break;
    case "-":
      result = num1-num2;
      break;
    case "*":
      result = num1*num2;
      break;
    case "/":
      result = num1/num2;
      break;
    case "%":
      result = num1%num2;
      break;
    case "^":
      result = num1^num2;
      break;
    default:
        result = "Invalid operator";
  }
  let ans = document.getElementById("ans").textContent = result;
  console.log(result);
}
function clearNum(){
  document.getElementById('ans').innerHTML="";
}