const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estiloBody = getComputedStyle(document.body);
const corbody = estiloBody.backgroundColor
console.log(corbody)
for (let p of ps) {
    p.style.backgroundColor = corbody;
    p.style.color='white';
}
