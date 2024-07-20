//1
const number1 = Number(prompt('Введіть перше число:'))
const number2 = Number(prompt('Введіть друге число:'))
if ((number1 + number2) % 5 === 0) {
    alert('Сума кратна 5')
} else {
    alert('Сума не кратна 5')
}
//2
const sideOfSquare = Number(prompt('Введіть сторону квадрата:'))
function areaOfSquare (){
    return sideOfSquare**2
}
const resultOfArea = areaOfSquare();
console.log(resultOfArea)
//3
const menu = "Ознайомтесь з меню: \n 1.Чай \n 2.Кава \n 3.Сік \n 4.Вода"
alert(menu)
const order = Number(prompt('Введіть цифру напою який хочете:'))
switch (order) {
    case 1: 
        alert('Ви вибрали чай!');
        break;
    case 2:
        alert('Ви вибрали каву!');
        break;
    case 3:
        alert('Ви вибрали сік!');
        break;
    case 4:
        alert('Ви вибрали воду!');
        break;
    default:
        alert('Вибачте, але ми такого напою не маємо(')
}
//4
const sumOfPurchase =Number(prompt("Введіть суму покупки"))
const discountOf5percent = sumOfPurchase - sumOfPurchase/100*5
const discountOf3percent = sumOfPurchase - sumOfPurchase/100*3

let purchase = (sumOfPurchase <= 500) ? `Сума покупки: ${sumOfPurchase}`:
    (sumOfPurchase>500) ? `Вітаю! вам надана знижка 3%. Сума покупки:  ${discountOf3percent}`: 
    (sumOfPurchase> 800) ? `Вітаю! вам надана знижка 5%. Сума покупки: ${discountOf5percent}`:
    '.';
console.log(purchase);
//5
const digit1 = Number(prompt("Введіть ділене:"))
const digit2 = Number(prompt("Введіть дільник:"))
if (digit1 % digit2 === 0) {
    alert(true)
} else {
    alert(false)
}
