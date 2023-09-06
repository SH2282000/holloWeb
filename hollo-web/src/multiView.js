// script.js
const views = document.querySelectorAll('.view');

function showView(viewId) {
    setInterval(blink, 500);

    views.forEach(view => {
        view.classList.remove('active');
        view.style.display = 'none';
    });

    const viewToShow = document.getElementById(viewId);
    const elements = document.getElementsByClassName('welcome');
    viewToShow.style.display = 'block';
    viewToShow.classList.add('active');

    // Iterate through the welcome collection
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (i != 0) { typeWriter(element.textContent, 100, element) }

        element.addEventListener("click", () => {
            console.log(element.textContent); // Example: Log the text content of each element
            typeWriter(element.textContent, 200, element)
        })
    }
}

function destroyView(viewId) {
    const viewToDestroy = document.getElementById(viewId);

    var child = viewToDestroy.lastElementChild;
    while (child) {
        viewToDestroy.removeChild(child);
        child = viewToDestroy.lastElementChild;
    }
}

export function handBtnPress(speed, speedUpdater) {
    const handBtn = document.getElementById(`hand`);

    // Initial view
    showView('view0');

    // add click event to hand button
    handBtn.addEventListener("touchstart", () => {
        speedUpdater(speed + 2)
    })
    // add click event to hand button
    handBtn.addEventListener("touchend", () => {
        showView('view1');
        destroyView('view0')
    })
}

function typeWriter(text, speed, element) {
    let i = 0;
    element.textContent = ""
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function blink() {
    const blinkingElement = document.getElementById("welcome0");
    blinkingElement.classList.toggle("blink");
}