const bill = document.querySelector(".bill")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")
const btn5 = document.querySelector(".btn5")
const btn6 = document.querySelector(".btn6")
const PeopleAmount = document.querySelector(".PeopleAmount")
const pay = document.querySelector(".pay")
const tip = document.querySelector(".tip")
const reset = document.querySelector(".reset")

console.log(bill)
console.log(btn1)
console.log(btn2)
console.log(btn3)
console.log(btn4)
console.log(btn5)
console.log(btn6)
console.log(PeopleAmount)
console.log(pay)
console.log(tip)
console.log(reset)

bill.addEventListener("input", () =>{
    pay.textContent =  bill.value
})

reset.addEventListener("click", () =>{
    PeopleAmount.textContent = 0
})