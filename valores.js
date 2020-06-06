var income = prompt("Qual é o valor da entrada?");

var costs = prompt("Qual é o valor da saída?");

var taxPercent = prompt("Qual a porcentagem dos impostos?");

var grossProfit = income - costs

var tax = grossProfit * taxPercent / 100

var netIncome = grossProfit - tax;

document.write("Sua renda líquida é de $ " + netIncome)