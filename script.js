const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

    header.classList.add("scrolled");

    }else{

    header.classList.remove("scrolled");

    }

});

// FAQ

// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("faq-open");

        item.classList.toggle("faq-open");

        if(!isOpen){

            answer.style.maxHeight = answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }

    });

});

// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(el => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if(elementTop < windowHeight - revealPoint){

        el.classList.add("active");

    }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();