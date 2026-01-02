

//  .d8888.  .d8b.  db   d8b   db db   d8b   db d888888b db   dD 
//  88'  YP d8' `8b 88   I8I   88 88   I8I   88   `88'   88 ,8P' 
//  `8bo.   88ooo88 88   I8I   88 88   I8I   88    88    88,8P   
//    `Y8b. 88~~~88 Y8   I8I   88 Y8   I8I   88    88    88`8b   
//  db   8D 88   88 `8b d8'8b d8' `8b d8'8b d8'   .88.   88 `88. 
//  `8888Y' YP   YP  `8b8' `8d8'   `8b8' `8d8'  Y888888P YP   YD  


document.addEventListener('DOMContentLoaded', () => {
    const songTitleElem = document.querySelector('.song-title');
    const songArtistElem = document.querySelector('.song-artist');
    const albumArtImg = document.getElementById('song-image-jpg');

    const playBtn = document.getElementById('play-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const playIcon = $('#play-icon');

    const songs = Array.isArray(config.songs) ? config.songs : [];
    let currentSongIndex = 0;
    const audio = new Audio();

    const PlayerVolume = document.getElementById('myRange');
    PlayerVolume.oninput = function() {
        const sliderValue = this.value / 100;
        const volume = sliderValue * sliderValue;
        audio.volume = volume;
    }
    // audio.volume = typeof config.musicVolume === 'number' ? config.musicVolume : 0.05;

    let isPlaying = false;
    const loadSong = (index) => {
        if (!songs[index]) return;
        currentSongIndex = index;
        audio.src = songs[index].src;
        songTitleElem.textContent = songs[index].title || '';
        songArtistElem.textContent = songs[index].artist || '';
        albumArtImg.src = songs[index].img || '';
    };

    const updatePlayIcon = () => {
        playIcon.toggleClass('fa-play fa-pause', !isPlaying);
        // ensure explicit classes for clarity
        if (isPlaying) {
            playIcon.removeClass('fa-play').addClass('fa-pause');
        } else {
            playIcon.removeClass('fa-pause').addClass('fa-play');
        }
    };

    const playSong = () => {
        audio.play().catch(() => {}); // ignore play errors
        isPlaying = true;
        updatePlayIcon();
    };

    const pauseSong = () => {
        audio.pause();
        isPlaying = false;
        updatePlayIcon();
    };

    playBtn.addEventListener('click', () => {
        isPlaying ? pauseSong() : playSong();
    });

    nextBtn.addEventListener('click', () => {
        loadSong((currentSongIndex + 1) % songs.length);
        playSong();
    });

    prevBtn.addEventListener('click', () => {
        loadSong((currentSongIndex - 1 + songs.length) % songs.length);
        playSong();
    });

    if (songs.length) {
        loadSong(0);
    }

    // Background slideshow
    const images = Array.isArray(config.images) ? config.images : [];
    let bgIndex = 0;
    const transitionTime = 1000;
    const displayTime = config.displayTime || 6000;
    if (images.length) {
        const nextSlide = () => {
            const $bg = $('.background-image');
            $bg.fadeOut(transitionTime, function () {
                bgIndex = (bgIndex + 1) % images.length;
                $(this).css('background-image', `url(${images[bgIndex]})`);
                setTimeout(() => $bg.fadeIn(transitionTime), 100);
            });
        };
        setInterval(nextSlide, displayTime);
    }

    const staffTeam = Array.isArray(config.staff_members) ? config.staff_members : [];
    const showStaffTeam = !!config.showStaffTeam;
    const $team = $('.team');
    const $staffTeam = $('.staff_team');

    $team.hide();
    $staffTeam.hide();

    if (showStaffTeam && staffTeam.length) {
        $team.fadeIn();
        $staffTeam.fadeIn(1000, 'swing');

        // build markup once
        const fragment = staffTeam.map(user => `
            <div class="staff-p">
                <div class="info">
                    <img src="${user.image || ''}" class="pfp" alt="${user.name || ''}">
                    <p>${user.name || ''}</p>
                </div>
                <p class="status">${user.rank || ''}</p>
            </div>
        `).join('');

        $staffTeam.append(fragment);
    }
    if (config.Notify) {
        createNotification()
        setInterval(createNotification, config.displayTime);
    }
});

let currentNotifyIndex = 0;

function createNotification() {
    const container = document.getElementById('notify-container');
    const iconClass = config.NotifyIcon || '<i class="fa-solid fa-circle-info"></i>';

    if (config.RandomNotify) {
        randomIndex = getRandomInt(config.Messages.length);
        data = config.Messages[randomIndex];
    } else {
        currentNotifyIndex++;
        if (currentNotifyIndex >= config.Messages.length) {
            currentNotifyIndex = 0;
        }
        data = config.Messages[currentNotifyIndex];
    }

    const notifyDiv = document.createElement('div');
    notifyDiv.classList.add('notification');

    notifyDiv.innerHTML = `
        <div class="icon">${iconClass}</div>
        <div class="content">
            <span class="title">${data.title || 'Oznámení'}</span>
            <div class="message">${data.message}</div>
        </div>
    `;

    container.appendChild(notifyDiv);

    setTimeout(() => {
        notifyDiv.style.animation = 'slideOut 0.5s ease-in forwards';

        setTimeout(() => {
            notifyDiv.remove();
        }, 500);
    }, 5500);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

