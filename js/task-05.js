const refInput = document.querySelector("#name-input")
const refText = document.querySelector("#name-output")

const inputFn = (event) => {
    if (event.currentTarget.value === "") {
        refText.textContent = "Anonymous"
        return
    }
    refText.textContent = event.currentTarget.value
}

refInput.addEventListener("input", inputFn)