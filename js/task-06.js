const inputRef = document.querySelector("#validation-input")


const blurFn = (event) => {
    if (event.currentTarget.value.length === (Number(inputRef.dataset.length))) {
        console.log("rrrrr")
        inputRef.classList.remove("invalid")
        inputRef.classList.add("valid")
        return
    };

    inputRef.classList.add("invalid")

}

inputRef.addEventListener("blur", blurFn)
