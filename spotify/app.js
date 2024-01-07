// console.log("JavaScript is running....");
const songList = document.querySelector(".song-list ul");
let currentSong = new Audio();
let songs;
// const playMusic(let music)
// {
//  let audio=new Audio(`/songs/`+music)   ;
//  audio.play();
// }
document.querySelector('.left-side img.invert').addEventListener("click", () => {
    document.querySelector(".left").style.left = 0 + "%";
});
document.querySelector(".home").querySelector("#close").addEventListener("click", () => {
    document.querySelector(".left").style.left = -120 + "%";
});

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);

    // Add leading zero if needed
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    remainingSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;

    return minutes + ":" + remainingSeconds;
}
async function getSongs() {
    let response = await fetch("http://127.0.0.1:3000/songs/");
    let htmlString = await response.text();

    let div = document.createElement("div");
    div.innerHTML = htmlString;

    let songs = [];
    let links = div.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
        let element = links[i];

        if (element.href.endsWith("mp3") || element.href.endsWith("m4a")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }

    return songs;
}
const playMusic = (track, pause = false) => {
    if (pause == true) {
        currentSong.play();
        play.src = "play.svg";

    }
    currentSong.src = "/songs/" + track;
    // currentSong.play();

    // play.src="pause.svg";

    document.querySelector(".info").innerHTML = decodeURI(track);
    document.querySelector(".timeVol").innerHTML = "00:00/00:00";
}

async function main() {
    songs = await getSongs();
    playMusic(songs[0], true);
    for (let i = 0; i < songs.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `
            <span><img class="invert" src="music.svg" alt="music"></span>
            <div>
                <p>${songs[i].replaceAll("%20", " ")}</p>
                <img class="invert" src="play.svg" alt="">
            </div>
        `;

        // Append the created li to the existing ul
        songList.appendChild(li);

    }
    Array.from(songList.getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector("div").firstElementChild.innerHTML);
            playMusic(e.querySelector("div").firstElementChild.innerHTML);
        })


    });
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "pause.svg";
        }
        else {
            currentSong.pause();
            play.src = "play.svg";
        }
    })

    currentSong.addEventListener("timeupdate", function () {
        var currentTime = currentSong.currentTime;
        var duration = currentSong.duration;
        // console.log(currentTime,duration);
        // Format the time in minutes and seconds
        var currentTimeFormatted = formatTime(currentTime);
        var durationFormatted = formatTime(duration);

        // // Update UI or perform actions with the time information
        // document.querySelector(".info").innerHTML=currentTimeFormatted;
        document.querySelector(".timeVol").innerHTML = `${currentTimeFormatted}/${durationFormatted}`
        document.querySelector(".gola").style.left = (currentTime / duration) * 100 + "%"

        // console.log("Current Time: " + currentTimeFormatted);
        // console.log("Duration: " + durationFormatted);
    });
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".gola").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;

    })
    previous.addEventListener("click", () => {
        console.log("previous was clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((index - 1) >= length) {
            playMusic(songs[index - 1])
        }
    });
    next.addEventListener("click", () => {
        console.log("next was clicked");
        console.log(currentSong.src.split("/").slice(-1)[0]);
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((index + 1) > length) {
            playMusic(songs[index + 1])
        }

        console.log(index);
        console.log(songs);
    })
}


main();
