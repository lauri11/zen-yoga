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

const carouselItems = document.querySelectorAll('.carousel-item');
if (carouselItems.length === carouselItemsData.length) {
    carouselItemsData.forEach((carouselItemData, index) => {
        carouselItems[index].innerHTML += `
            <article>
                <img src="img/${carouselItemData.img}" alt="${carouselItemData.alt}">
                <h3>${carouselItemData.title}</h3>
                <p>${carouselItemData.description}</p>
            </article>
        `;
    });
}


const nextIcon = document.querySelector('.next');
nextIcon.addEventListener('click', showNext);

const previousIcon = document.querySelector('.prev');
previousIcon.addEventListener('click', showPrevious);

let currentIndex = 0;

function showNext() {
    let activeElements = document.querySelectorAll('.carousel-item.active');
    let hiddenElements = document.querySelectorAll('.carousel-item:not(.active)');
    const container = document.querySelector('.carousel-items');
    const allElement = document.querySelectorAll('.carousel-item');
    const paginationElements = document.querySelectorAll('.pagination-button');

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
    let activeElements = document.querySelectorAll('.carousel-item.active');
    let hiddenElements = document.querySelectorAll('.carousel-item:not(.active)');
    const container = document.querySelector('.carousel-items');
    const allElement = document.querySelectorAll('.carousel-item');
    const paginationElements = document.querySelectorAll('.pagination-button');

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