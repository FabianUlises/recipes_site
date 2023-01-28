// Function to get element from dom
const getElement = (selector) => {
    const el = document.querySelector(selector);
    if(el) return el;
    throw Error('Selector not found please try agane');
}
// Menu button
const menuBtn = getElement('.burger-btn');
// Adding click event to menu button
menuBtn.addEventListener('click', () => {
    const navLinks = getElement('.nav-links');
    navLinks.classList.toggle('show-links');
});