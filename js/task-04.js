let counterValue = 0

const refs = {
    buttonDecrement: document.querySelector(`[data-action="decrement"]`),
    buttonIncrement: document.querySelector(`[data-action="increment"]`),
    spanValue: document.querySelector("#value")
}

const incrementFn = () => {
    refs.spanValue.textContent = counterValue += 1
}

const decrementFn = () => {
    refs.spanValue.textContent = counterValue -= 1
}

refs.buttonIncrement.addEventListener("click", incrementFn)
refs.buttonDecrement.addEventListener("click", decrementFn)