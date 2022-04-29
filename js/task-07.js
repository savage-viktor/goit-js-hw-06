
const rangeRef = document.querySelector("#font-size-control")
const textRef = document.querySelector("#text")

const rangeFn = () => {
    textRef.style.fontSize = `${rangeRef.value}px`
}

rangeRef.addEventListener("input", rangeFn)