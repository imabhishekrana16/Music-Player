//console.log("Welcome to Music Player")
//Intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1..mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
//Array
let songs  =[
    {songName: "Sukh Tera Dita Lahiye - Bhai Sarbajit Singh", filePath:"songs/1.mp3", coverPath:"images/Sukh Tera Dita Lahiye.jpg"},
    {songName: "Check It Out - Parmish Verma", filePath:"songs/2.mp3", coverPath:"images/Check It Out.jpg"},
    {songName: "No Reason - Parmish Verma", filePath:"songs/3.mp3", coverPath:"images/No Reason.jpg"},
    {songName: "Gol Chowk - Hustinder ", filePath:"songs/4.mp3", coverPath:"images/Goal Chowk.jpg"},
    {songName: "Goat - Ap Dhillon", filePath:"songs/5.mp3", coverPath:"images/Goat.jpg"},
    {songName: "Whatcha Doin - Diljit Dosanjh", filePath:"songs/6.mp3", coverPath:"images/Whatcha Doin.jpg"},
    {songName: "Toronto Wala Gabhru - Amantej Hundal", filePath:"songs/7.mp3", coverPath:"images/Toronto wala gabru.png"},
    {songName: "What - Karan Aujla", filePath:"songs/8.mp3", coverPath:"images/What.png"},
    {songName: "Fully Loaded - Tegi Pannu", filePath:"songs/9.mp3", coverPath:"images/Fully loaded.png"},
    {songName: "Old Skool - Sidhu Moose Wala", filePath:"songs/10.mp3", coverPath:"images/Old skool.png"},
    {songName: "Dharmiyaan", filePath:"songs/11.mp3", coverPath:"images/Dharmiyaan.png"},
    {songName: "Bin Tere", filePath:"songs/12.mp3", coverPath:"images/Bin Tere.png"}
]
songItems.forEach((element, i) =>{
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        gif.style.opacity = 1;
    }
    else{
       audioElement.pause();
       masterPlay.classList.remove('bi-pause-circle-fill');
       masterPlay.classList.add('bi-play-circle-fill');
       gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    //update seekBar
    progress =parseInt((audioElement.currentTime/audioElement.duration)* 100);
    //console.log('progress');
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
//songItemPlay
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('bi-pause-circle-fill');
        element.classList.add('bi-play-circle-fill');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
})
