const btnEl = document.querySelector('.btn');

btnEl.addEventListener('mouseover', (event) => {
    const x = event.clientX - btnEl.offsetLeft;
    const y = event.clientY - btnEl.offsetTop;

    btnEl.style.setProperty('--xPos', x + 'px');
    btnEl.style.setProperty('--yPos', y + 'px');
})