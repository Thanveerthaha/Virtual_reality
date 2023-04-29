const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'virtual reality1',
        'name': 'virtual reality1.mp4',
        'duration': '0:10s',
    },
    {
        'id': 'a2',
        'title': 'virtual reality2',
        'name': 'virtual realty 2.mp4',
        'duration': '0:10s',
    },
    {
        'id': 'a3',
        'title': 'virtual reality3',
        'name': 'virtual realty 3.mp4',
        'duration': '0:10s',
    },

    {
        'id': 'a4',
        'title': 'virtual reality4',
        'name': 'virtual realty 4.mp4',
        'duration': '0:10s',
    },
    {
        'id': 'a5',
        'title': 'virtual reality5',
        'name': 'virtual realty 5.mp4',
        'duration': '0:17s',
    },
    {
        'id': 'a6',
        'title': 'virtual reality6',
        'name': 'virtual realty 6.mp4',
        'duration': '0:39s',
    },
    {
        'id': 'a7',
        'title': 'virtual reality7',
        'name': 'virtual realty7.mp4',
        'duration': '0:10s',
    },

    {
        'id': 'a8',
        'title': 'virtual reality8',
        'name': 'virtual realty8.mp4',
        'duration': '0:10s',
    },
    {
        'id': 'a9',
        'title': 'virtual reality9',
        'name': 'virtual realty9.mp4',
        'duration': '0:17s',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play-button.jpg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play-button.jpg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});



/*customer review*/


const swiper = new Swiper('.swiper', {
    loop: true,

     // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


})