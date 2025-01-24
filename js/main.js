function addAccordion() {
    const titles = document.querySelectorAll('.label');
    titles.forEach(sortoutTitles);
}

function sortoutTitles(title) {
    title.addEventListener('click', toggleActiveClass);
}

function toggleActiveClass() {
    this.classList.toggle('active');
}

addAccordion();