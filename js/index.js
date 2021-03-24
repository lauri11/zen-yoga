const upperHeaderElement = document.querySelector('.header-upper');
const upperHeaderElementHeight = parseInt(window.getComputedStyle(upperHeaderElement).height);

const tabletWidth = 767;
function changeNavigationStyleOnScroll() {
    if (window.innerWidth > tabletWidth) {
        if (window.scrollY > upperHeaderElementHeight) {
            document.querySelector('.header-upper nav').classList.add('colored');
        } else {
            document.querySelector('.header-upper nav').classList.remove('colored');
        }
    }
}

window.addEventListener('scroll', changeNavigationStyleOnScroll);