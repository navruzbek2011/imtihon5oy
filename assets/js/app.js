alert("Escape bosing brat siz Control bosyapsiz");
const btnEl = document.querySelector(".button");
const lorem_divEl = document.querySelector(".lorem_div");
const lorem_texrEl = document.querySelector(".lorem_div_text");
const lorem_text2El = document.querySelector(".lorem_div_text2");
const biEl = document.querySelector(".bi bi-x-lg");
const bodyEl = document.querySelector ("body")

btnEl.addEventListener('click', () => {
    lorem_divEl.style.display = "block";
    lorem_texrEl.style.display = "block";
    lorem_text2El.style.display = "block";
    biEl.style.display = "block";
})
bodyEl.addEventListener('click', () => {
    lorem_divEl.style.display = "none"
})

