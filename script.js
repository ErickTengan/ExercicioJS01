let firstNumber = Number(prompt("Insira o primeiro número:"));
let secondNumber = Number(prompt("Insira o segundo número:"));

alert(`A soma dos dois números é: ${firstNumber + secondNumber}`);
alert(`A subtração dos dois números é: ${firstNumber - secondNumber}`);
alert(`A multiplicação dos dois números é: ${firstNumber * secondNumber}`);
alert(`A divisão do primeiro número pelo segundo é: ${firstNumber / secondNumber}`);
alert(`O resto da divisão do primeiro número pelo segundo é: ${firstNumber % secondNumber}`);

if (((firstNumber + secondNumber) % 2) == 0 ){
  alert(`A soma dos dois números é par.`);
} else {
  alert(`A soma dos dois números é ímpar.`);
}

if (firstNumber == secondNumber) {
  alert(`Os números inseridos são iguais.`);
} else {
  alert(`Os números inseridos são diferentes.`);
}