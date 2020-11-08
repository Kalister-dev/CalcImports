var inputDolar = document.querySelector("input[name=dolar]");
var btnAdd = document.querySelector("button.botao");
var btn18 = document.querySelector("button.botao1");
var btn30 = document.querySelector("button.botao2");
var btnReal = document.querySelector("button.ValorReal");
var btnItem = document.querySelector("button.itemAdd");
var btnFinal = document.querySelector("button.botao3");

var select = "";
var value = "";
var percent30 = "";
var percent18 = "";
var dolar = "";
var total = "";
var total18 = "";
var total30 = "";
var valorPerc18 = "";
var valorPerc30 = "";

btnAdd.onclick = function add() {
  dolar = inputDolar.value;

  alert("US$ " + dolar);
};
btnItem.onclick = function insertItem() {
  select = document.getElementById("item");
  value = select.options[select.selectedIndex].value;
  alert("US$ " + value);
};
btnReal.onclick = function real() {
  total = value * dolar;
  alert(total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
};

btn18.onclick = function perc18() {
  valorPerc18 = total * 0.18;
  total18 = total + valorPerc18;
  alert(
    total18.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  );
};
btn30.onclick = function perc30() {
  valorPerc30 = total * 0.3;
  total30 = total + valorPerc30;
  alert(
    total30.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  );
};
btnFinal.onclick = function final() {
  alert(
    "Dolar : US$ " +
      dolar +
      "\n\nValor do item : US$ " +
      value +
      "\n\nValor em Real : " +
      total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) +
      "\n\nValor com 18 % :  " +
      total18.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) +
      "\n\nValor total com 30 % de lucro : " +
      total30.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  );
};
