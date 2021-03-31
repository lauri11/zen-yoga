const carouselItemsData = [
    {
        "img": "yoga-basics.svg",
        "title": "Basic",
        "alt": "Basic Yoga",
        "description": "This class is designed to teach the main aspects of yoga"
    },
    {
        "img": "yoga-hatha.svg",
        "title": "Hatha",
        "alt": "Hatha Yoga",
        "description": "This class allows students to practice the fundamentals of Ashtanga Yoga."
    },
    {
        "img": "yoga-ashtanga.svg",
        "title": "Ashtanga Led",
        "alt": "Ashtanga Yoga",
        "description": "This class allows students to practice the fundamentals of Ashtanga Yoga."
    },
    {
        "img": "yoga-vinyasa.svg",
        "title": "Vinyasa",
        "alt": "Vinyasa Yoga",
        "description": "This class allows students to practice the fundamentals of Ashtanga Yoga"
    },
    {
        "img": "yoga-yin.svg",
        "title": "Yin",
        "alt": "Yin Yoga",
        "description": "Learn to balance your mind and body energy and to control breathing."
    },
    {
        "img": "yoga-prenatal.svg",
        "title": "Prenatal Yoga",
        "alt": "Prenatal Yoga",
        "description": "Practise breathing Yoga asanas during pregnancy"
    }
];

const carouselItems = document.querySelectorAll('.carousel-container .carousel-item');
const carouselItemsTablet = document.querySelectorAll('.carousel-container-tablet .carousel-item');
const carouselItemsMobile = document.querySelectorAll('.carousel-container-mobile .carousel-item');

carouselItemsData.forEach((carouselItemData, index) => {
    carouselItems[index].innerHTML += `
            <article>
                <img src="img/${carouselItemData.img}" alt="${carouselItemData.alt}">
                <h3>${carouselItemData.title}</h3>
                <p>${carouselItemData.description}</p>
            </article>
        `;
});

carouselItemsData.forEach((carouselItemData, index) => {
    carouselItemsTablet[index].innerHTML += `
            <article>
                <img src="img/${carouselItemData.img}" alt="${carouselItemData.alt}">
                <h3>${carouselItemData.title}</h3>
                <p>${carouselItemData.description}</p>
            </article>
        `;
});

carouselItemsData.forEach((carouselItemData, index) => {
    carouselItemsMobile[index].innerHTML += `
            <article>
                <img src="img/${carouselItemData.img}" alt="${carouselItemData.alt}">
                <h3>${carouselItemData.title}</h3>
                <p>${carouselItemData.description}</p>
            </article>
        `;
});

const nextIcon = document.querySelectorAll('.next');
nextIcon.forEach(icon => icon.addEventListener('click', showNext));

const previousIcon = document.querySelectorAll('.prev');
previousIcon.forEach(icon => icon.addEventListener('click', showPrevious));

let currentIndex = 0;

function showNext() {
    let activeElements;
    let hiddenElements;
    let container;
    let allElement;
    let paginationElements;

    if (window.getComputedStyle(document.querySelector('.carousel-container-tablet')).getPropertyValue('display') !== 'none') {
        activeElements = document.querySelectorAll('.carousel-container-tablet .carousel-item.active');
        hiddenElements = document.querySelectorAll('.carousel-container-tablet .carousel-item:not(.active)');

        container = document.querySelector('.carousel-container-tablet .carousel-items');
        allElement = document.querySelectorAll('.carousel-container-tablet .carousel-item');
        paginationElements = document.querySelectorAll('.carousel-container-tablet .pagination-button');
    } else if (window.getComputedStyle(document.querySelector('.carousel-container-mobile')).getPropertyValue('display') !== 'none') {
        activeElements = document.querySelectorAll('.carousel-container-mobile .carousel-item.active');
        hiddenElements = document.querySelectorAll('.carousel-container-mobile .carousel-item:not(.active)');

        container = document.querySelector('.carousel-container-mobile .carousel-items');
        allElement = document.querySelectorAll('.carousel-container-mobile .carousel-item');
        paginationElements = document.querySelectorAll('.carousel-container-mobile .pagination-button');
    } else {
        activeElements = document.querySelectorAll('.carousel-container .carousel-item.active');
        hiddenElements = document.querySelectorAll('.carousel-container .carousel-item:not(.active)');

        container = document.querySelector('.carousel-container .carousel-items');
        allElement = document.querySelectorAll('.carousel-container .carousel-item');
        paginationElements = document.querySelectorAll('.carousel-container .pagination-button');
    }

    let firstActive = activeElements[0];
    paginationElements[currentIndex].classList.remove('current');
    firstActive.classList.remove('active');
    container.appendChild(firstActive);
    currentIndex++;
    if (currentIndex > allElement.length - 1) {
        currentIndex = 0;
    }
    hiddenElements[0].classList.add('active');
    paginationElements[currentIndex].classList.add('current');
}

function showPrevious() {
    let activeElements;
    let hiddenElements;
    let container;
    let allElement;
    let paginationElements;

    if (window.getComputedStyle(document.querySelector('.carousel-container-tablet')).getPropertyValue('display') !== 'none') {
        activeElements = document.querySelectorAll('.carousel-container-tablet .carousel-item.active');
        hiddenElements = document.querySelectorAll('.carousel-container-tablet .carousel-item:not(.active)');

        container = document.querySelector('.carousel-container-tablet .carousel-items');
        allElement = document.querySelectorAll('.carousel-container-tablet .carousel-item');
        paginationElements = document.querySelectorAll('.carousel-container-tablet .pagination-button');
    } else if (window.getComputedStyle(document.querySelector('.carousel-container-mobile')).getPropertyValue('display') !== 'none') {
        activeElements = document.querySelectorAll('.carousel-container-mobile .carousel-item.active');
        hiddenElements = document.querySelectorAll('.carousel-container-mobile .carousel-item:not(.active)');

        container = document.querySelector('.carousel-container-mobile .carousel-items');
        allElement = document.querySelectorAll('.carousel-container-mobile .carousel-item');
        paginationElements = document.querySelectorAll('.carousel-container-mobile .pagination-button');
    } else {
        activeElements = document.querySelectorAll('.carousel-container .carousel-item.active');
        hiddenElements = document.querySelectorAll('.carousel-container .carousel-item:not(.active)');

        container = document.querySelector('.carousel-container .carousel-items');
        allElement = document.querySelectorAll('.carousel-container .carousel-item');
        paginationElements = document.querySelectorAll('.carousel-container .pagination-button');
    }

    let lastHidden = hiddenElements[hiddenElements.length - 1];
    lastHidden.classList.add('active');
    paginationElements[currentIndex].classList.remove('current');
    container.prepend(lastHidden);
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = allElement.length - 1;
    }
    let lastActive = activeElements[activeElements.length - 1];
    lastActive.classList.remove('active');
    paginationElements[currentIndex].classList.add('current');
}

document.querySelectorAll('.pagination-button').forEach((button, index) => {
    button.addEventListener('click', (e) => {
        if (currentIndex < index) {
            for (let i = currentIndex; i < index; i++) {
                console.log(currentIndex);
                console.log(index);
                showNext();
            }
        } else {
            for (let i = currentIndex; i > index; i--) {
                console.log(currentIndex);
                console.log(index);
                showPrevious();
            }
        }
    })
});