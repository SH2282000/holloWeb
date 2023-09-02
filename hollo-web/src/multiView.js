// script.js
const views = document.querySelectorAll('.view');

function showView(viewId) {
    views.forEach(view => {
        view.classList.remove('active');
        view.style.display = 'none';
    });

    const viewToShow = document.getElementById(viewId);
    viewToShow.style.display = 'block';
    setTimeout(() => {
        viewToShow.classList.add('active');
    }, 10); // Delay for proper animation
}

export function handBtnPress() {
    const handBtn = document.getElementById(`hand`);

    // Initial view
    showView('view0');

    // add click event to hand button
    handBtn.addEventListener("touchstart", () => {
        showView('view1');
    })
}
