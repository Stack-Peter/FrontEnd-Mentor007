const btn = document.querySelector('button')
const mail = document.querySelector('input')
const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const windowWidth = window.screen


function handleClick(e) {
    e.preventDefault()
    if (windowWidth.width > 515) {
        if (mail.value === '') {
            mail.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('empty')
        } else if (!regexp.test(mail.value)) {
            mail.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('empty')
            mail.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('wrong')
        } else {
            mail.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('empty')
            mail.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('wrong')
            console.log(`It's all ok! 🥳🥳`)
        }
    } else {
        if (mail.value === '') {
            mail.nextElementSibling.classList.add('empty-mobile')
        } else if (!regexp.test(mail.value)) {
            mail.nextElementSibling.classList.remove('empty-mobile')
            mail.nextElementSibling.classList.add('wrong-mobile')
        } else {
            mail.nextElementSibling.classList.remove('empty-mobile')
            mail.nextElementSibling.classList.remove('wrong-mobile')
            console.log(`It's all ok! 🥳🥳`)
        }
    }
}
btn.addEventListener('click', handleClick)