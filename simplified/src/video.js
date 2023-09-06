export function btnVideosPress() {
    const elements = document.getElementsByClassName('sub-btn');

    // Iterate through the collection
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        element.addEventListener("click", () => {
            console.log(element.id); // Example: Log the text content of each element
            changeVideo(element.id)
        })
    }
}

export function changeVideo(name) {
    const videoPlayer = document.getElementById('video');
    const source = document.getElementById('source');

    source.setAttribute('src', `video/${name}.mp4`);
    videoPlayer.load()
    swipeToPlay(videoPlayer)
}

function swipeToPlay(videoPlayer) {
    let touchStartX = 0;
    let touchEndX = 0;

    videoPlayer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        videoPlayer.pause();
    });

    videoPlayer.addEventListener('touchmove', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    videoPlayer.addEventListener('touchend', () => {
        videoPlayer.play();
    });

    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const swipeThreshold = 50;

        if (Math.abs(deltaX) > swipeThreshold) {

            if (deltaX > 0) {
                videoPlayer.currentTime += deltaX;
            } else {

                videoPlayer.currentTime -= deltaX;
            }
        }
    }
    videoPlayer.addEventListener('timeupdate', () => {
        console.log(`Current video time: ${videoPlayer.currentTime}`);
    });
}