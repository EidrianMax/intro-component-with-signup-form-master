const form = document.querySelector('#form')
const firstName = form.querySelectorAll('.wrapper-input')[0]
const firstNameInput = form.querySelectorAll('.wrapper-input input')[0]
const firstNameIcon = form.querySelectorAll('.wrapper-input img')[0]
const firstNameParagraph = form.querySelectorAll('.wrapper-input p')[0]
const lastName = form.querySelectorAll('.wrapper-input')[1]
const lastNameInput = form.querySelectorAll('.wrapper-input input')[1]
const lastNameIcon = form.querySelectorAll('.wrapper-input img')[1]
const lastNameParagraph = form.querySelectorAll('.wrapper-input p')[1]
const email = form.querySelectorAll('.wrapper-input')[2]
const emailInput = form.querySelectorAll('.wrapper-input input')[2]
const emailIcon = form.querySelectorAll('.wrapper-input img')[2]
const emailParagraph = form.querySelectorAll('.wrapper-input p')[2]
const password = form.querySelectorAll('.wrapper-input')[3]
const passwordInput = form.querySelectorAll('.wrapper-input input')[3]
const passwordIcon = form.querySelectorAll('.wrapper-input img')[3]
const passwordParagraph = form.querySelectorAll('.wrapper-input p')[3]

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const firstName = event.target.name.value
  const lastName = event.target.lastname.value
  const email = event.target.email.value
  const password = event.target.password.value

  if (!firstName) {
    firstNameInput.classList.add('wrapper-input__input--valid')
    firstNameIcon.classList.add('d-block')
    firstNameParagraph.classList.add('d-block')
  }

  if (!lastName) {
    lastNameInput.classList.add('wrapper-input__input--valid')
    lastNameIcon.classList.add('d-block')
    lastNameParagraph.classList.add('d-block')
  }

  if (!email) {
    emailInput.classList.add('wrapper-input__input--valid')
    emailIcon.classList.add('d-block')
    emailParagraph.classList.add('d-block')
  }

  if (!password) {
    passwordInput.classList.add('wrapper-input__input--valid')
    passwordIcon.classList.add('d-block')
    passwordParagraph.classList.add('d-block')
  }
})
