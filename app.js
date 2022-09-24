const form = document.getElementById("form")
const emailInput = document.getElementById("emailInput")
const msgError = document.getElementById("msg-error")

// FORM ON SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault()
  validate()
  //   form.reset()
  //   emailInput.value = ""
})

// ERROR MESSAGE
const setError = (message) => {
  msgError.innerText = message
}
// success
const setSuccess = (message) => {
  msgError.innerText = message
}

// EMAIL PATTERN
const isValidEmail = (email) => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

  return pattern.test(String(email).toLowerCase())
}

// VALIDATE EMAIL
const validate = () => {
  const emailValue = emailInput.value.trim()

  if (emailValue === "") {
    setError("Email is required")
  } else if (!isValidEmail(emailValue)) {
    setError("Provide a valid email address")
  } else {
    setSuccess("")
    emailInput.value = ""
  }
}
