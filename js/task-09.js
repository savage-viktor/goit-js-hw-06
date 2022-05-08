function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function buttonClickFn() {
  const newColor = getRandomHexColor()
  bodyRef.style.backgroundColor = newColor
  spanRef.textContent = newColor
}

const spanRef = document.querySelector("span")
const bodyRef = document.querySelector("body")
const buttonRef = document.querySelector("button")

buttonRef.addEventListener("click", buttonClickFn)
