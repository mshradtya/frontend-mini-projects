const monthEl = document.querySelector(".month h2");
const dateEl = document.querySelector(".month p");
const daysEl = document.querySelector(".days");


// setting month
const monthInx = new Date().getMonth();
const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
monthEl.innerText = month[monthInx];

// setting date
const date = new Date().toDateString();
dateEl.innerText = date;

// setting days
let days = "";
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
// Setting day parameter to 0 means one day less than 
// first day of the month, which here is next month
// hence we get day previous to the first day of next month
// i.e, last day of the current month
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
console.log(firstDay);

for (let i = 0; i<firstDay; i++) {
    days += `<div class="empty"></div>`;
}

for (let i=1; i<=lastDay; i++) {
    if (i == new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    }
    days += `<div class="day">${i}</div>`;
}

daysEl.innerHTML = days;