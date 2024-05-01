console.log("Welecome to Spotify");


//INitlaize the variable

let songIndex =0;
let audioElement = new Audio(`1.mp3`);
let masterPlay = document.getElementById(`masterPlay`);
let myProgressBar = document.getElementById(`myProgressBar`);



let song = [
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
    {songName: "Bolna halke halke", filePath: "Bolna-Halke-Halke-Slowed(PagalWorld).mp3", coverPath: "covers/1.jpg"},
]



//audioElement.play();

//HAndle paly/pause click

masterPlay.addEventListener(`click`, ()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
//Listen to Events
document.addEventListener('timeupdate',()=>{
    console.log(`timeupdate`);
})