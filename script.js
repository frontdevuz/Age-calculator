// INPUTS
const dayInp = document.querySelector("#day");
const monthInp = document.querySelector("#month");
const yearInp = document.querySelector("#year");


//OUTPUTS
const dayOtp = document.querySelector("#DD");
const monthOtp = document.querySelector("#MM");
const yearOtp = document.querySelector("#YY")


//FORM ELEMENT
const form = document.querySelector("form");
//ADDING THE SUBMIT EVENTLISTNER TO FORM
form.addEventListener("submit", handleSubmit);
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector('small').innerText = "Bu jo'yni to'ldiring please!";
            validator = false;
        }
        else if (monthInp.value > 12) {
            monthInp.style.borderColor = "red";
            monthInp.parentElement.querySelector('small').innerText = "Tug'ilgan oyingizda xatolik bor!";
            monthInp.parentElement.querySelector('small').classList.toggle("age__month");
            validator = false;
        }
        else if (dayInp.value > 31) {
            dayInp.style.borderColor = "red";
            dayInp.parentElement.querySelector('small').innerText = "Tug'ilgan kuningizda xatolik bor!";
            validator = false;
        }
        else {
            i.style.borderColor = "dodgerblue";
            parent.querySelector('small').innerText = "";
            validator = true;
        }
    })
    return validator;
}
function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (dayInp.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthInp.value > month) {
            month = month + 12;
            year = year - 1;
        }
        const d = day - dayInp.value;
        const m = month - monthInp.value;
        const y = year - yearInp.value;
        dayOtp.innerHTML = d;
        monthOtp.innerHTML = m;
        yearOtp.innerHTML = y;
    }


}