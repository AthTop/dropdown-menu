import './style.css'

// Select all elements with the class 'menu'
const dropdownMenu = document.querySelectorAll('.menu')

// Create a button with an eventlistener and attach it to the menus
dropdownMenu.forEach((menu) => {
    const menuToggle = document.createElement('button')
    menuToggle.type = 'button'
    menuToggle.textContent = 'Toggle'
    menuToggle.classList.add('toggle-button')
    menuToggle.addEventListener('click', (e) =>
        triggerMenu(e.target.nextElementSibling)
    )
    menu.parentNode.prepend(menuToggle)
})

// Function to add 'visible' class to a node element
function triggerMenu(menuNode) {
    menuNode.classList.toggle('hidden')
}
