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
const areaOfSquare = sideOfSquare*sideOfSquare
console.log("Площа квадрата:", areaOfSquare)
//3
const menu = "Ознайомтесь з меню: \n 1.Чай \n 2.Кава \n 3.Сік \n 4.Вода"
alert(menu)
const order = Number(prompt('Введіть цифру напою який хочете:'))
if (order===1) {
    alert('Ви вибрали чай!')
} else if (order===2) {
    alert('Ви вибрали каву!')
}  else if (order===3) {
    alert('Ви вибрали сік!')
} else if (order===4) {
    alert('Ви вибрали воду!')
}  else {
    alert('Вибачте, але ми такого напою не маємо(')
}
//4
const sumOfPurchase =Number(prompt("Введіть суму покупки"))
const discountOf5percent = sumOfPurchase - sumOfPurchase/100*5
const discountOf3percent = sumOfPurchase - sumOfPurchase/100*3
if (sumOfPurchase>500) {
    if (sumOfPurchase>800){
        console.log("Вітаю! вам надана знижка 5%. Сума покупки: ", discountOf5percent)
    } else{
        console.log("Вітаю! вам надана знижка 3%. Сума покупки: ", discountOf3percent)
    }
} else {
    console.log("Сума покупки:", sumOfPurchase )
}
//5
const digit1 = Number(prompt("Введіть ділене:"))
const digit2 = Number(prompt("Введіть дільник:"))
if (digit1 % digit2 === 0) {
    alert(Boolean(true))
} else {
    alert(Boolean(false))
}
