const form = document.querySelector(".login-form")

const formSubmit = (event) => {
    event.preventDefault()

    const {
        elements: { email, password }
    } = event.currentTarget


    if (!email.value || !password.value) {
        return alert("Please fill in all the fields");
    }

    console.log({ email: email.value, password: password.value })
    form.reset()
}


form.addEventListener("submit", formSubmit)