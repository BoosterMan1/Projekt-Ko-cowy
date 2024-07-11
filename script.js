//Zmiana tekstu po kliknięciu
let button2 = document.querySelector("#radio2");
let label = document.querySelector("#radio2__label");

button2.addEventListener("click", () => {
    label.textContent = "KAŻDY SIĘ CZEGOŚ BOI";
});

let button3 = document.querySelector("#radio11");
let button3label = document.querySelector("#radio11label");
button3.addEventListener("click", () => {
    button3label.textContent = "NIE WIEM";
});

let button4 = document.querySelector("#radio12");
let button4label = document.querySelector("#radio12label");
button4.addEventListener("click", () => {
    button4label.textContent = "NIE WIEM";
});

let button5 = document.querySelector("#radio17");
let button5label = document.querySelector("#radio17label");
button5.addEventListener("click", () => {
    button5label.textContent = "NIE";
});

// Zmiana tekstu i wyświetlanie paragrafów po kliknięciu przycisku
let button6 = document.querySelector("#radio9");
let p1 = document.querySelector("#p1");

button6.addEventListener("click", () => {
    p1.classList.add('displayed');
    p1.textContent = "MASZ ARACHNOFOBIĘ - LĘK PRZED PAJĄKAMI";
});

let button7 = document.querySelector("#radio5");
let p2 = document.querySelector("#p2");

button7.addEventListener("click", () => {
    p2.classList.add('displayed');
    p2.textContent = "MASZ LILAPSOFOBIĘ - LĘK PRZED TORNADAMI I GWAŁTOWNYMI BURZAMI";
});

let button8 = document.querySelector("#radio7");
let p3 = document.querySelector("#p3");

button8.addEventListener("click", () => {
    p3.classList.add('displayed');
    p3.textContent = "MASZ KAULROFOBIĘ - LĘK PRZED KLAUNAMI";
});

let button9 = document.querySelector("#radio14");
let p4 = document.querySelector("#p4");

button9.addEventListener("click", () => {
    p4.classList.add('displayed');
    p4.textContent = "MASZ PEDIOFOBIĘ - LĘK PRZED LALKAMI";
});

let button10 = document.querySelector("#radio3");
let p5 = document.querySelector("#p5");

button10.addEventListener("click", () => {
    p5.classList.add('displayed');
    p5.textContent = "MASZ NYKTOFOBIĘ - LĘK PRZED CIEMNOŚCIĄ";
});

// Usuwanie klasy displayed po kliknięciu przycisku
let button11 = document.querySelector("#radio10");
let p1no = document.querySelector("#p1");

button11.addEventListener("click", () => {
    p1no.classList.remove('displayed');
});

let button12 = document.querySelector("#radio6");
let p2no = document.querySelector("#p2");

button12.addEventListener("click", () => {
    p2no.classList.remove('displayed');
});

let button13 = document.querySelector("#radio8");
let p3no = document.querySelector("#p3");

button13.addEventListener("click", () => {
    p3no.classList.remove('displayed');
});

let button14 = document.querySelector("#radio15");
let p4no = document.querySelector("#p4");

button14.addEventListener("click", () => {
    p4no.classList.remove('displayed');
});

let button15 = document.querySelector("#radio4");
let p5no = document.querySelector("#p5");

button15.addEventListener("click", () => {
    p5no.classList.remove('displayed');
});

// Zmiana tekstu po kliknięciu przycisku
let button16 = document.querySelector("#radio20");
let p6 = document.querySelector("#p6");

button16.addEventListener("click", () => {
    p1.classList.remove('displayed');
    p2.classList.remove('displayed');
    p3.classList.remove('displayed');
    p4.classList.remove('displayed');
    p5.classList.remove('displayed');
    p6.classList.add('displayed');
    p6.textContent = "NIE ODPOWIEDZIAŁEŚ SZCZERZE?! NIE DOSTANIESZ WYNIKÓW!";
});

let button17 = document.querySelector("#radio19");
let p6yes = document.querySelector("#p6");

button17.addEventListener("click", () => {
    p6yes.classList.remove('displayed');
});
// MASZ ARACHNOFOBIĘ - LĘK PRZED PAJĄKAMI
// MASZ LILAPSOFOBIĘ - LĘK PRZED TORNADAMI I GWAŁTOWNYMI BURZAMI
// MASZ KAULROFOBIĘ - LĘK PRZED KLAUNAMI
// MASZ PEDIOFOBIĘ - LĘK PRZED LALKAMI
// MASZ NYKTOFOBIĘ - LĘK PRZED CIEMNOŚCIĄ
//Znikające przyciski po kliknięciu
/*let button3 = document.querySelector("#radio9")
let button3label = document.querySelector("#radio9label")
button3.addEventListener("click", () => {
    button3label.classList.add("hidden")
})

let button4 = document.querySelector("#radio10")
let button4label = document.querySelector("#radio10label")
button4.addEventListener("click", () => {
    button4label.classList.add("hidden")
})*/

// Define the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the animation classes from the `data-on-reach` attribute.
            const newClassNames = entry.target.getAttribute('data-on-reach');
            // Split the classes and add them to the element.
            const targetSelector = entry.target.getAttribute('data-target');
            const target = targetSelector ? document.querySelector(targetSelector) : entry.target;
            newClassNames.split(' ').forEach(className => {
                target.classList.add(className);
            });
            // Optionally, stop observing the element to improve performance.
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 1 // Even a pixel of visibility triggers the callback.
});

// Observe elements with the `data-on-reach` attribute.
document.querySelectorAll('[data-on-reach]').forEach(target => {
    observer.observe(target);
});

//--------------------------------------------------------

// Define the Intersection Observer
const audioObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const audioMp3 = entry.target.getAttribute('data-audio')

            playAudio(audioMp3, () => audioObserver.unobserve(entry.target))

            // Optionally, stop observing the element to improve performance.
        }
    });
}, {
    rootMargin: '0px', // Trigger as soon as the element comes into view.
    threshold: 1
});

// Observe elements with the `data-on-reach` attribute.
document.querySelectorAll('[data-audio]').forEach(target => {
    audioObserver.observe(target);
});
function playAudio(audioMp3, onPlay) {
    const myAudioElement = new Audio(audioMp3)

    myAudioElement.addEventListener("canplaythrough", (event) => {
        /* the audio is now playable; play it if permissions allow */
        myAudioElement.play()
        onPlay?.()
    })
}

