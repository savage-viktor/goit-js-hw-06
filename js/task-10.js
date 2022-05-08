function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createDivFn() {

  const divArray = []
  let size = 20

  for (let i = 1; i <= inputRef.value; i += 1) {

    size += 10

    const newDiv = document.createElement("div")
    newDiv.style.width = `${size}px`
    newDiv.style.height = `${size}px`
    newDiv.style.backgroundColor = getRandomHexColor()
    divArray.push(newDiv)
  }

  divBoxesRef.prepend(...divArray)
}

function eraseDivFn() {
  divBoxesRef.innerHTML = ``
  inputRef.value = ""
}

const inputRef = document.querySelector("input")
const createBtnRef = document.querySelector(`button[data-create]`)
const destroyBtnRef = document.querySelector(`button[data-destroy]`)
const divBoxesRef = document.querySelector("#boxes")

createBtnRef.addEventListener("click", createDivFn)
destroyBtnRef.addEventListener("click", eraseDivFn)