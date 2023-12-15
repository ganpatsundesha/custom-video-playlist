let mainVideo = document.querySelector(".main-video video");
let mainVideoTitle = document.querySelector(".main-video h2");
let nextPlay = document.querySelectorAll(".vid-card");


nextPlay.forEach((video) => {
    video.onclick = () => {
        nextPlay.forEach((vid) => {
            vid.classList.remove('active')
            video.classList.add('active')
            if (video.classList.contains('active')) {
                let src = video.children[0].getAttribute('src');
                let text = video.children[1].innerHTML;
                mainVideo.src = src;
                mainVideoTitle.innerHTML = text;
            }
        })
    }
})