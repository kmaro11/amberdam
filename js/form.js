const openModalButtons = document.querySelectorAll('[data-modal-target]')
const formInputs = document.querySelectorAll('[data-form]');
const formButton = document.querySelectorAll('[data-form-button]');
const formCloseButton = document.querySelectorAll('[data-close-modal]');

// send data
formButton.forEach(button => {
    const formType = button.dataset.formButton
    button.addEventListener('click', (e) => {
        e.preventDefault()
        let dataToSend = {};
        formInputs.forEach(input => {
            if (input.dataset.form === formType) {
                dataToSend[input.id] = input.type === 'checkbox' ? input.checked : input.value
            }
        })
    })
})

// close modal
formCloseButton.forEach(button => {
    button.addEventListener('click', () => {
        const formType = button.dataset.closeModal
        const modal = document.querySelector(`.${formType}`)
        toggleModal(modal)
    })
})

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const formType = button.dataset.modalTarget
        console.log('formType', formType)
        const modal = document.querySelector(`.${formType}`)
        toggleModal(modal)
    })
})

function toggleModal(modal) {
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('h-0')
    modal.classList.toggle('pointer-events-none')
}