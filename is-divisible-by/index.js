const btnGridEl = document.querySelector(".btn-grid");
const displayNumEl = document.querySelector(".num-display");
let btnEls;

const addBtns = () => {
  const arr = ["?", "->"];

  for (let i = 2; i <= 21; i++) {
    const btnEl = document.createElement("div");
    btnEl.className = "btn";
    i > 19 ? (btnEl.innerText = `${arr[i - 20]}`) : (btnEl.innerText = `${i}`);
    btnGridEl.appendChild(btnEl);
  }

  btnEls = document.querySelectorAll(".btn");

  btnEls.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      handleClick(event);
    })
  );
};

const handleClick = (event) => {
  let val = event.target.innerText;
  if (val === "->") newNum();
  else if (val === "?") showSolution();
  else {
    let isCorrect = evaluate(val);
    isCorrect
      ? event.target.classList.add("bg-green")
      : event.target.classList.add("bg-red");
  }
};

const newNum = () => {
  let displayNum = Math.ceil(Math.random() * 10000);
  displayNumEl.innerText = `${displayNum}`;
  reset();
};

const reset = () => {
  btnEls.forEach((btn) => {
    btn.className = "btn";
  });
};

const showSolution = () => {
  btnEls.forEach((btn) => {
    let val = +btn.innerText;
    if (val)
      evaluate(val)
        ? btn.classList.add("bg-green")
        : btn.classList.add("bg-red");
  });
};

const evaluate = (val) => {
  let divident = +displayNumEl.innerText;
  let divisor = +val;
  return divident % divisor === 0;
};

addBtns();
newNum();
